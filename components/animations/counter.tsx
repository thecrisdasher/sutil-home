"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

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
  duration = 2,
  delay = 0,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, to, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const value = latest.toFixed(decimals);
        (ref.current as HTMLElement).textContent = `${prefix}${value}${suffix}`;
      }
    });

    return unsubscribe;
  }, [springValue, decimals, prefix, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{from}{suffix}
    </motion.span>
  );
}