"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useOptimizedMotion } from "@/hooks/use-optimized-motion";

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

// Variantes optimizadas con will-change
const slideVariants = {
  left: (distance: number) => ({
    initial: { x: -distance, opacity: 0, willChange: 'transform, opacity' },
    animate: { x: 0, opacity: 1, willChange: 'auto' },
  }),
  right: (distance: number) => ({
    initial: { x: distance, opacity: 0, willChange: 'transform, opacity' },
    animate: { x: 0, opacity: 1, willChange: 'auto' },
  }),
  up: (distance: number) => ({
    initial: { y: distance, opacity: 0, willChange: 'transform, opacity' },
    animate: { y: 0, opacity: 1, willChange: 'auto' },
  }),
  down: (distance: number) => ({
    initial: { y: -distance, opacity: 0, willChange: 'transform, opacity' },
    animate: { y: 0, opacity: 1, willChange: 'auto' },
  }),
};

export function SlideIn({
  children,
  direction,
  delay = 0,
  duration = 0.3, // Reducido de 0.6 a 0.3
  distance = 60, // Reducido de 100 a 60
  className,
  ...props
}: SlideInProps) {
  const { shouldReduceMotion } = useOptimizedMotion();
  
  const variants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
      };
    }
    return slideVariants[direction](distance);
  }, [shouldReduceMotion, direction, distance]);
  
  const transition = useMemo(() => {
    if (shouldReduceMotion) return undefined;
    
    return {
      duration,
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