"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import { useOptimizedMotion } from "@/hooks/use-optimized-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function Counter({
  from = 0,
  to,
  duration = 1.5, // Reducido de 2 a 1.5
  delay = 0,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { shouldReduceMotion } = useOptimizedMotion();
  const motionValue = useMotionValue(from);
  
  // Configuración optimizada del spring
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });
  
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3, // Trigger cuando 30% es visible
    margin: "0px 0px -50px 0px"
  });

  // Callback optimizado para actualizar el valor
  const updateValue = useCallback((latest: number) => {
    if (ref.current) {
      const value = latest.toFixed(decimals);
      ref.current.textContent = `${prefix}${value}${suffix}`;
    }
  }, [decimals, prefix, suffix]);

  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      const timer = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else if (shouldReduceMotion && ref.current) {
      // Si las animaciones están deshabilitadas, mostrar valor final inmediatamente
      ref.current.textContent = `${prefix}${to}${suffix}`;
    }
  }, [isInView, motionValue, to, delay, shouldReduceMotion, prefix, suffix]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", updateValue);
    return unsubscribe;
  }, [springValue, updateValue]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, willChange: 'transform, opacity' }}
      animate={shouldReduceMotion ? false : (isInView ? { opacity: 1, scale: 1, willChange: 'auto' } : { opacity: 0, scale: 0.95 })}
      transition={shouldReduceMotion ? undefined : { 
        duration: 0.3, // Reducido de 0.5
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {prefix}{from}{suffix}
    </motion.span>
  );
}