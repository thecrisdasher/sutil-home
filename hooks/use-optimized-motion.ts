'use client';

import { useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

// Variantes optimizadas para animaciones comunes
export const optimizedVariants = {
  // Fade in optimizado
  fadeIn: {
    hidden: { 
      opacity: 0,
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  },
  
  // Slide up optimizado
  slideUp: {
    hidden: { 
      opacity: 0,
      y: 20,
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
      }
    }
  },
  
  // Scale optimizado
  scale: {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  },
  
  // Stagger container
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
export function useViewportAnimation(threshold = 0.1, once = true) {
  const { motionProps, shouldReduceMotion } = useOptimizedMotion();
  
  const viewportProps = useMemo(() => {
    if (shouldReduceMotion) {
      return {};
    }
    
    return {
      viewport: { 
        once,
        amount: threshold,
        margin: '0px 0px -100px 0px' // Trigger antes de que sea visible
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
  fast: { duration: 0.2, ease: 'easeOut' },
  medium: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 0.5, ease: 'easeOut' },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bounce: { type: 'spring', stiffness: 400, damping: 10 }
};

// Hook para hover animations optimizadas
export function useHoverAnimation() {
  const { shouldReduceMotion } = useOptimizedMotion();
  
  return useMemo(() => {
    if (shouldReduceMotion) {
      return {};
    }
    
    return {
      whileHover: { 
        scale: 1.02,
        transition: optimizedTransitions.fast
      },
      whileTap: { 
        scale: 0.98,
        transition: optimizedTransitions.fast
      }
    };
  }, [shouldReduceMotion]);
}