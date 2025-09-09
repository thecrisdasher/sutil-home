'use client';

import { lazy, Suspense, ComponentType, LazyExoticComponent } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface DynamicComponentProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

// Componente de loading optimizado
const OptimizedLoader = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center p-8 ${className || ''}`}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-2 text-blue-600"
    >
      <Loader2 className="w-5 h-5 animate-spin" />
      <span className="text-sm font-medium">Cargando...</span>
    </motion.div>
  </div>
);

// HOC para crear componentes dinámicos con loading optimizado
export function createDynamicComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    fallback?: React.ReactNode;
    ssr?: boolean;
    loading?: React.ComponentType;
  } = {}
): LazyExoticComponent<T> {
  const LazyComponent = lazy(importFn);
  
  const DynamicWrapper = (props: any) => {
    const LoadingComponent = options.loading || OptimizedLoader;
    const fallback = options.fallback || <LoadingComponent />;
    
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
  
  return DynamicWrapper as LazyExoticComponent<T>;
}

// Componente para lazy loading con Intersection Observer
export function LazyLoadComponent({ 
  children, 
  fallback, 
  className,
  threshold = 0.1,
  rootMargin = '50px'
}: DynamicComponentProps & {
  threshold?: number;
  rootMargin?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ 
        once: true, 
        amount: threshold,
        margin: rootMargin
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Suspense fallback={fallback || <OptimizedLoader />}>
        {children}
      </Suspense>
    </motion.div>
  );
}

// Hook para precargar componentes dinámicos
export function usePreloadComponent(importFn: () => Promise<any>) {
  const preload = () => {
    // Precargar el componente
    importFn().catch(console.error);
  };
  
  return { preload };
}

// Componente para cargar módulos de forma condicional
export function ConditionalLoader({
  condition,
  component: Component,
  fallback,
  ...props
}: {
  condition: boolean;
  component: ComponentType<any>;
  fallback?: React.ReactNode;
  [key: string]: any;
}) {
  if (!condition) {
    return fallback || null;
  }
  
  return (
    <Suspense fallback={fallback || <OptimizedLoader />}>
      <Component {...props} />
    </Suspense>
  );
}

// Componentes lazy pre-definidos para secciones comunes
export const LazyHeroSection = createDynamicComponent(
  () => import('@/components/layout/hero-section').then(mod => ({ default: mod.HeroSection })),
  { 
    fallback: <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 animate-pulse" />
  }
);

export const LazyAboutPreview = createDynamicComponent(
  () => import('@/components/layout/about-preview').then(mod => ({ default: mod.AboutPreview })),
  { 
    fallback: <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
  }
);

export const LazyServicesPreview = createDynamicComponent(
  () => import('@/components/layout/services-preview').then(mod => ({ default: mod.ServicesPreview })),
  { 
    fallback: <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
  }
);

export const LazyTestimonialsPreview = createDynamicComponent(
  () => import('@/components/layout/testimonials-preview').then(mod => ({ default: mod.TestimonialsPreview })),
  { 
    fallback: <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
  }
);

export const LazyContactForm = createDynamicComponent(
  () => import('@/components/forms/contact-form').then(mod => ({ default: mod.ContactForm })),
  { 
    fallback: <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
  }
);

// Utilidad para crear skeleton loaders personalizados
export function createSkeletonLoader(config: {
  height?: string;
  className?: string;
  lines?: number;
  showAvatar?: boolean;
}) {
  const { height = 'h-64', className = '', lines = 3, showAvatar = false } = config;
  
  return function SkeletonLoader() {
    return (
      <div className={`${height} ${className} animate-pulse`}>
        <div className="flex space-x-4 p-4">
          {showAvatar && (
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          )}
          <div className="flex-1 space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
              <div 
                key={i}
                className={`h-4 bg-gray-300 rounded ${
                  i === lines - 1 ? 'w-3/4' : 'w-full'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  };
}

// Componente para manejar errores de carga
export function ErrorBoundaryFallback({ 
  error, 
  resetError 
}: { 
  error: Error; 
  resetError: () => void; 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-red-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Error al cargar el componente
      </h3>
      <p className="text-gray-600 mb-4 text-sm">
        {error.message || 'Ha ocurrido un error inesperado'}
      </p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}