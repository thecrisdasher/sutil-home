"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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

const directionVariants = {
  up: (distance: number) => ({ y: distance }),
  down: (distance: number) => ({ y: -distance }),
  left: (distance: number) => ({ x: distance }),
  right: (distance: number) => ({ x: -distance }),
  none: () => ({}),
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 50,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
  });

  const initialVariant = {
    opacity: 0,
    ...directionVariants[direction](distance),
  };

  const animateVariant = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={isInView ? animateVariant : initialVariant}
      transition={{
        duration,
        delay: isInView ? delay : 0,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}