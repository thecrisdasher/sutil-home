'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
  rotateX?: number
  rotateY?: number
}

export function HoverCard({ 
  children, 
  className = '',
  scale = 1.05,
  rotateX = 0,
  rotateY = 0
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        rotateX,
        rotateY,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}