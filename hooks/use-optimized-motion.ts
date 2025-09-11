'use client';

import { useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

// Variantes optimizadas para animaciones comunes con will-change
export const optimizedVariants = {
  // Fade in optimizado
  fadeIn: {
    hidden: { 
      opacity: 0,
      willChange: 'opacity',
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      willChange: 'auto',
      transition: { 
        duration: 0.25, // Reducido de 0.3 a 0.25
        ease: [0.25, 0.46, 0.45, 0.94] // Curva más eficiente
      }
    }
  },
  
  // Slide up optimizado
  slideUp: {
    hidden: { 
      opacity: 0,
      y: 15, // Reducido de 20 a 15
      willChange: 'transform, opacity',
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      willChange: 'auto',
      transition: { 
        duration: 0.3, // Reducido de 0.4 a 0.3
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart optimizado
      }
    }
  },
  
  // Scale optimizado
  scale: {
    hidden: { 
      opacity: 0,
      scale: 0.97, // Menos cambio de escala para mejor rendimiento
      willChange: 'transform, opacity',
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      willChange: 'auto',
      transition: { 
        duration: 0.25, // Reducido de 0.3 a 0.25
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  
  // Stagger container optimizado
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reducido de 0.1 a 0.08
        delayChildren: 0.05, // Reducido de 0.1 a 0.05
        ease: 'easeOut'
      }
    }
  }
};

// Hook para animaciones optimizadas
export function useOptimizedMotion() {
  const shouldReduceMotion = useReducedMotion();
  
  const motionProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: false,
        exit: false,
        transition: { duration: 0 }
      };
    }
    
    return {
      initial: 'hidden',
      animate: 'visible',
      exit: 'hidden'
    };
  }, [shouldReduceMotion]);
  
  const getVariant = useMemo(() => {
    return (variantName: keyof typeof optimizedVariants) => {
      if (shouldReduceMotion) {
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 }
        };
      }
      return optimizedVariants[variantName];
    };
  }, [shouldReduceMotion]);
  
  return {
    motionProps,
    getVariant,
    shouldReduceMotion,
    variants: optimizedVariants
  };
}

// Hook para viewport animations optimizadas
export function useViewportAnimation(threshold = 0.05, once = true) {
  const { motionProps, shouldReduceMotion } = useOptimizedMotion();
  
  const viewportProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {};
    }
    
    return {
      viewport: { 
        once,
        amount: threshold,
        margin: '0px 0px -50px 0px', // Optimizado: trigger más cerca
        root: null // Usar viewport por defecto para mejor rendimiento
      },
      whileInView: 'visible',
      initial: 'hidden'
    };
  }, [threshold, once, shouldReduceMotion]);
  
  return {
    ...motionProps,
    ...viewportProps
  };
}

// Transiciones optimizadas comunes
export const optimizedTransitions = {
  fast: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }, // Más rápido y suave
  medium: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }, // Optimizado
  slow: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }, // Reducido de 0.5
  spring: { type: 'spring', stiffness: 400, damping: 25, mass: 0.8 }, // Más responsivo
  bounce: { type: 'spring', stiffness: 500, damping: 15, mass: 0.6 }, // Optimizado
  microInteraction: { duration: 0.1, ease: 'easeOut' } // Nueva transición ultra rápida
};

// Hook para hover animations optimizadas
export function useHoverAnimation(scaleAmount = 1.02) {
  const { shouldReduceMotion } = useOptimizedMotion();
  
  return useMemo(() => {
    if (shouldReduceMotion) {
      return {};
    }
    
    return {
      whileHover: { 
        scale: scaleAmount,
        willChange: 'transform',
        transition: optimizedTransitions.microInteraction
      },
      whileTap: { 
        scale: 0.98,
        willChange: 'transform',
        transition: optimizedTransitions.microInteraction
      },
      onHoverStart: () => {
        // Preparar para animación
      },
      onHoverEnd: () => {
        // Limpiar will-change después de la animación
      }
    };
  }, [shouldReduceMotion, scaleAmount]);
}

// Hook especializado para animaciones de entrada con mejor rendimiento
export function useEntranceAnimation(variant: keyof typeof optimizedVariants = 'fadeIn', delay = 0) {
  const { shouldReduceMotion, getVariant } = useOptimizedMotion();
  
  return useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: false
      };
    }
    
    const variants = getVariant(variant);
    const visibleVariant = variants.visible;
    const baseTransition = typeof visibleVariant === 'object' && 'transition' in visibleVariant 
      ? visibleVariant.transition 
      : { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] };
    
    return {
      initial: 'hidden',
      animate: 'visible',
      variants,
      transition: {
        ...baseTransition,
        delay
      }
    };
  }, [shouldReduceMotion, variant, delay, getVariant]);
}