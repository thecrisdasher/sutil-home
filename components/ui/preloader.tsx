'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface PreloaderProps {
  duration?: number;
  onComplete?: () => void;
}

export function Preloader({ duration = 2000, onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Asegurar que se complete después del tiempo especificado
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 300);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-beige-100"
        >
          <div className="text-center space-y-6">
            {/* Logo animado */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-20 h-20 mx-auto bg-blue-serene rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </motion.div>
              
              {/* Círculos animados alrededor */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-20 h-20 mx-auto"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-beige-500 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-beige-500 rounded-full transform -translate-x-1/2 translate-y-1"></div>
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-beige-500 rounded-full transform -translate-y-1/2 -translate-x-1"></div>
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-beige-500 rounded-full transform -translate-y-1/2 translate-x-1"></div>
              </motion.div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <h2 className="text-2xl font-bold text-blue-serene font-serif">
                Lazos De Cuidado
              </h2>
              <p className="text-beige-600 text-sm">
                Cargando experiencia de cuidado...
              </p>
            </motion.div>

            {/* Barra de progreso */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-64 mx-auto"
            >
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-serene to-beige-500 rounded-full"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs text-beige-500 mt-2 text-center"
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook para controlar el preloader
export function usePreloader(enabled = true) {
  const [isLoading, setIsLoading] = useState(enabled);

  const hidePreloader = () => setIsLoading(false);
  const showPreloader = () => setIsLoading(true);

  return {
    isLoading,
    hidePreloader,
    showPreloader,
  };
}