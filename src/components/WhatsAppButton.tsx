'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { MessageCircle, X, Phone, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // WhatsApp number and message
  const phoneNumber = '573001234567' // Replace with actual WhatsApp number
  const defaultMessage = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre los servicios de cuidado domiciliario de Alivio Vital. ¿Podrían brindarme más información?'
  )

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const openDirectCall = () => {
    window.open(`tel:+${phoneNumber}`)
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.2
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Alivio Vital</h3>
                      <p className="text-xs text-green-100">Cuidado Domiciliario</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <div className="text-sm text-gray-600">
                  <p className="mb-2">¡Hola! 👋</p>
                  <p className="mb-3">¿Cómo podemos ayudarte hoy?</p>
                  
                  <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                    <Clock className="w-3 h-3" />
                    <span>Disponible 24/7 para emergencias</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 h-auto"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Escribir por WhatsApp
                  </Button>
                  
                  <Button
                    onClick={openDirectCall}
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50 text-sm py-2 h-auto"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Directamente
                  </Button>
                </div>

                {/* Quick Info */}
                <div className="text-xs text-gray-500 space-y-1">
                  <p>📞 +57 300 123 4567</p>
                  <p>⏰ Respuesta promedio: 5 minutos</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white shadow-2xl border-0 p-0"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
          )}

          {/* Pulse Animation */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-green-500"
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
          )}
        </motion.div>
      </motion.div>
    </>
  )
}