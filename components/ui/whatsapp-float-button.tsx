'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, HelpCircle } from 'lucide-react'

interface WhatsAppFloatButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export default function WhatsAppFloatButton({
  phoneNumber = '+573106123883',
  message = '¡Hola! 👋 ¿Necesitas ayuda? Estoy aquí para asistirte con información sobre nuestros servicios de cuidado domiciliario.',
  className = ''
}: WhatsAppFloatButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Mostrar tooltip automáticamente después de 5 segundos si no ha interactuado
    const tooltipTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true)
        // Ocultar tooltip después de 4 segundos
        setTimeout(() => setShowTooltip(false), 4000)
      }
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [hasInteracted])

  const handleClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleMouseEnter = () => {
    setHasInteracted(true)
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 999999,
    pointerEvents: 'auto'
  }

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '80px',
    right: '0px',
    marginBottom: '8px',
    marginRight: '8px'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={containerStyle}
          className={className}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={tooltipStyle}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-xs relative">
                  {/* Flecha del tooltip */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        ¿Necesitas ayuda?
                      </p>
                      <p className="text-xs text-gray-600">
                        Estamos aquí para asistirte con cualquier consulta sobre nuestros servicios.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowTooltip(false)}
                      className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Contactar por WhatsApp"
          >
            {/* Efecto de ondas */}
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Segundo efecto de ondas */}
            <motion.div
              className="absolute inset-0 bg-green-300 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* Icono de WhatsApp */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>

            {/* Efecto de brillo al hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          {/* Indicador de notificación */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 500 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}