"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
}

const directionVariants = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: {},
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
  className,
  ...props
}: FadeInProps) {
  const getInitialVariant = () => {
    const baseVariant = { opacity: 0 };
    
    if (direction === "up") {
      return { ...baseVariant, y: distance };
    } else if (direction === "down") {
      return { ...baseVariant, y: -distance };
    } else if (direction === "left") {
      return { ...baseVariant, x: distance };
    } else if (direction === "right") {
      return { ...baseVariant, x: -distance };
    } else {
      return baseVariant;
    }
  };

  const initialVariant = getInitialVariant();

  return (
    <motion.div
      initial={initialVariant}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
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