"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface WhatsAppButtonProps {
  customMessage?: string;
  phoneNumber?: string;
}

export function WhatsAppButton({ 
  customMessage,
  phoneNumber = "573001234567" // Número de WhatsApp (incluir código de país sin +)
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const pathname = usePathname();

  // Mensajes personalizados según la página
  const getPageMessage = () => {
    if (customMessage) return customMessage;
    
    switch (pathname) {
      case "/":
        return "Hola, me interesa recibir información sobre los servicios de Alivio Vital Home Care.";
      case "/services":
        return "Hola, me gustaría conocer más detalles sobre sus servicios de enfermería domiciliaria.";
      case "/contact":
        return "Hola, necesito una consulta gratuita para evaluar mis necesidades de cuidado.";
      case "/about":
        return "Hola, me interesa conocer más sobre su equipo y experiencia en cuidados domiciliarios.";
      case "/team":
        return "Hola, me gustaría información sobre su equipo de profesionales.";
      case "/benefits":
        return "Hola, quiero conocer los beneficios de elegir cuidados domiciliarios.";
      case "/testimonials":
        return "Hola, me interesa conocer más sobre sus servicios después de leer los testimonios.";
      default:
        return "Hola, me interesa recibir información sobre los servicios de Alivio Vital Home Care.";
    }
  };

  const message = encodeURIComponent(getPageMessage());
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Mostrar tooltip automáticamente después de 5 segundos si no ha interactuado
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
        // Ocultar después de 3 segundos
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleInteraction = () => {
    setHasInteracted(true);
    setShowTooltip(false);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      {/* Tooltip mejorado */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.8 }}
        animate={{ 
          opacity: showTooltip ? 1 : 0, 
          x: showTooltip ? 0 : 10, 
          scale: showTooltip ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full sm:bottom-auto sm:right-full mb-3 sm:mb-0 sm:mr-3 sm:top-1/2 sm:transform sm:-translate-y-1/2 px-3 sm:px-4 py-2 sm:py-3 bg-white text-gray-800 text-xs sm:text-sm rounded-lg shadow-xl border border-gray-200 max-w-[200px] sm:max-w-xs right-0"
        style={{ pointerEvents: showTooltip ? 'auto' : 'none' }}
      >
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <span className="font-medium text-xs sm:text-sm">¿Necesitas ayuda?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-1 text-[10px] sm:text-xs">
          Escríbenos por WhatsApp para atención inmediata
        </p>
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleInteraction}
        onMouseEnter={handleInteraction}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#25D366] rounded-full"
        />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
        
        {/* Hover tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        >
          ¡Escríbenos ahora!
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </motion.div>

        {/* Notification badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: hasInteracted ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}