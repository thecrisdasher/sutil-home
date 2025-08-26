"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const slideVariants = {
  left: (distance: number) => ({
    initial: { x: -distance, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  }),
  right: (distance: number) => ({
    initial: { x: distance, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  }),
  up: (distance: number) => ({
    initial: { y: distance, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }),
  down: (distance: number) => ({
    initial: { y: -distance, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }),
};

export function SlideIn({
  children,
  direction,
  delay = 0,
  duration = 0.6,
  distance = 100,
  className,
  ...props
}: SlideInProps) {
  const variants = slideVariants[direction](distance);

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}