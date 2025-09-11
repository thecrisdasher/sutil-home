'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, HelpCircle, Phone } from 'lucide-react'
import Image from 'next/image'

interface WhatsAppFloatButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export default function WhatsAppFloatButton({
  phoneNumber = '+573106123883',
  message = '¡Hola! Necesito mas información sobre el servicio.',
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
    right: '80px',        // Posicionado a la izquierda del botón
    bottom: '0px',        // Alineado con el botón
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
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={tooltipStyle}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-72 relative">
                  {/* Flecha del tooltip - apunta hacia la derecha */}
                  <div className="absolute -right-2 bottom-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center ring-2 ring-green-100">
                        <HelpCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        ¿Necesitas ayuda?
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Estamos aquí para asistirte con cualquier consulta sobre nuestros servicios de cuidado domiciliario.
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-green-600 font-medium">
                          👩‍⚕️ Respuesta en menos de 5 minutos
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowTooltip(false)}
                      className="flex-shrink-0 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full p-1 transition-colors"
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
              <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
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
