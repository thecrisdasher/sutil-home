"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useOptimizedMotion, optimizedTransitions } from "@/hooks/use-optimized-motion";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
}

// Variantes optimizadas con will-change
const directionVariants = {
  up: (distance: number) => ({ y: distance, willChange: 'transform, opacity' }),
  down: (distance: number) => ({ y: -distance, willChange: 'transform, opacity' }),
  left: (distance: number) => ({ x: distance, willChange: 'transform, opacity' }),
  right: (distance: number) => ({ x: -distance, willChange: 'transform, opacity' }),
  none: () => ({ willChange: 'opacity' }),
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.3, // Reducido de 0.6 a 0.3
  direction = "up",
  distance = 15, // Reducido de 20 a 15
  className,
  ...props
}: FadeInProps) {
  const { shouldReduceMotion } = useOptimizedMotion();
  
  const variants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
      };
    }
    
    const baseVariant = { opacity: 0 };
    const directionVariant = directionVariants[direction](distance);
    
    return {
      initial: { ...baseVariant, ...directionVariant },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        willChange: 'auto'
      }
    };
  }, [shouldReduceMotion, direction, distance]);
  
  const transition = useMemo(() => {
    if (shouldReduceMotion) return undefined;
    
    return {
      duration: duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94], // Curva optimizada
    };
  }, [duration, delay, shouldReduceMotion]);

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}