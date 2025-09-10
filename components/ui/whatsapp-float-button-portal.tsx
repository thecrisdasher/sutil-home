'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import WhatsAppFloatButton from './whatsapp-float-button'

interface WhatsAppFloatButtonPortalProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export default function WhatsAppFloatButtonPortal({
  phoneNumber = '+573106123883',
  message = '¡Hola! 👋 ¿Necesitas ayuda? Estoy aquí para asistirte con información sobre nuestros servicios de cuidado domiciliario.',
  className = ''
}: WhatsAppFloatButtonPortalProps) {
  const [mounted, setMounted] = useState(false)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Crear un contenedor específico para el portal
    const container = document.createElement('div')
    container.id = 'whatsapp-portal-container'
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 999999;
      overflow: hidden;
    `
    
    document.body.appendChild(container)
    setPortalContainer(container)
    setMounted(true)

    return () => {
      if (container && document.body.contains(container)) {
        document.body.removeChild(container)
      }
    }
  }, [])

  if (!mounted || !portalContainer) {
    return null
  }

  return createPortal(
    <div style={{ pointerEvents: 'auto' }}>
      <WhatsAppFloatButton
        phoneNumber={phoneNumber}
        message={message}
        className={className}
      />
    </div>,
    portalContainer
  )
}