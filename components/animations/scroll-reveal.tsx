"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useMemo } from "react";
import { useOptimizedMotion, useViewportAnimation } from "@/hooks/use-optimized-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

// Variantes optimizadas con will-change
const directionVariants = {
  up: (distance: number) => ({ y: distance, willChange: 'transform, opacity' }),
  down: (distance: number) => ({ y: -distance, willChange: 'transform, opacity' }),
  left: (distance: number) => ({ x: distance, willChange: 'transform, opacity' }),
  right: (distance: number) => ({ x: -distance, willChange: 'transform, opacity' }),
  none: () => ({ willChange: 'opacity' }),
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.4, // Reducido de 0.8 a 0.4
  direction = "up",
  distance = 30, // Reducido de 50 a 30
  className,
  threshold = 0.05, // Reducido de 0.1 a 0.05
  triggerOnce = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useOptimizedMotion();
  
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin: "0px 0px -50px 0px" // Optimizado para trigger más temprano
  });

  const variants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
      };
    }
    
    const initialVariant = {
      opacity: 0,
      ...directionVariants[direction](distance),
    };

    const animateVariant = {
      opacity: 1,
      x: 0,
      y: 0,
      willChange: 'auto'
    };
    
    return { initial: initialVariant, animate: animateVariant };
  }, [shouldReduceMotion, direction, distance]);
  
  const transition = useMemo(() => {
    if (shouldReduceMotion) return undefined;
    
    return {
      duration,
      delay: isInView ? delay : 0,
      ease: [0.25, 0.46, 0.45, 0.94], // Curva optimizada
    };
  }, [duration, delay, isInView, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}