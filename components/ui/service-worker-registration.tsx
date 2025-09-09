'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface ServiceWorkerRegistrationProps {
  children?: React.ReactNode;
}

export default function ServiceWorkerRegistration({ children }: ServiceWorkerRegistrationProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Verificar soporte para Service Workers
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      registerServiceWorker();
    }

    // Listeners para estado de conexión
    const handleOnline = () => {
      setIsOnline(true);
      toast.success('Conexión restaurada');
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.warning('Sin conexión - Modo offline activado');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Estado inicial
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const registerServiceWorker = async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      setRegistration(reg);

      // Verificar actualizaciones
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
              toast.info('Nueva versión disponible', {
                action: {
                  label: 'Actualizar',
                  onClick: () => handleUpdate()
                },
                duration: 10000
              });
            }
          });
        }
      });

      // Listener para mensajes del Service Worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          toast.success('Contenido actualizado y guardado para uso offline');
        }
      });

      console.log('Service Worker registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar Service Worker:', error);
    }
  };

  const handleUpdate = async () => {
    if (registration && registration.waiting) {
      // Enviar mensaje al Service Worker para que se active
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Recargar la página después de un breve delay
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
      setUpdateAvailable(false);
      toast.success('Actualizando aplicación...');
    }
  };

  const cleanCache = () => {
    if (registration && registration.active) {
      registration.active.postMessage({ type: 'CLEAN_CACHE' });
      toast.success('Cache limpiado');
    }
  };

  // Limpiar cache periódicamente (cada 30 minutos)
  useEffect(() => {
    const interval = setInterval(() => {
      cleanCache();
    }, 30 * 60 * 1000); // 30 minutos

    return () => clearInterval(interval);
  }, [registration]);

  return (
    <>
      {children}
      
      {/* Indicador de estado offline */}
      {!isOnline && (
        <div className="fixed bottom-4 left-4 z-50 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Modo Offline</span>
        </div>
      )}
      
      {/* Banner de actualización disponible */}
      {updateAvailable && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Nueva versión disponible</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setUpdateAvailable(false)}
              className="text-xs px-2 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors"
            >
              Después
            </button>
            <button
              onClick={handleUpdate}
              className="text-xs px-2 py-1 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors font-medium"
            >
              Actualizar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Hook para verificar estado de conexión
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

// Hook para interactuar con Service Worker
export function useServiceWorker() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      setIsSupported(true);
      
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);
      });
    }
  }, []);

  const sendMessage = (message: any) => {
    if (registration && registration.active) {
      registration.active.postMessage(message);
    }
  };

  const updateServiceWorker = () => {
    if (registration) {
      registration.update();
    }
  };

  return {
    registration,
    isSupported,
    sendMessage,
    updateServiceWorker
  };
}