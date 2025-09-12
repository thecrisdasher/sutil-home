"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Scale, Shield, Users, Globe, Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

interface TermsOfServiceProps {
  className?: string;
}

export function TermsOfService({ className = "" }: TermsOfServiceProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      icon: Scale,
      title: "Objeto",
      content: "Estos Términos de Servicio regulan el acceso y uso del sitio web y de los servicios de Lazos de Cuidado Home Care, empresa dedicada a brindar servicios de salud domiciliaria."
    },
    {
      icon: Shield,
      title: "Aceptación de los términos",
      content: "Al navegar en nuestro sitio web, ponerse en contacto con nosotros o contratar nuestros servicios, usted acepta quedar vinculado a estos Términos. Si no está de acuerdo, le solicitamos abstenerse de usar el sitio."
    },
    {
      icon: Users,
      title: "Servicios ofrecidos",
      content: "Lazos de Cuidado Home Care ofrece servicios de cuidado y asistencia domiciliaria en salud. La descripción detallada de cada servicio está disponible en nuestro sitio web. Nos reservamos el derecho de modificar, actualizar o descontinuar cualquiera de los servicios en cualquier momento, previa notificación en el sitio web."
    },
    {
      icon: Globe,
      title: "Uso del sitio web",
      content: "Usted se compromete a utilizar este sitio web únicamente para fines lícitos. No está permitido el uso del sitio para realizar actividades fraudulentas, distribuir virus o afectar el funcionamiento de la plataforma. El contenido del sitio es informativo y no sustituye la asesoría médica profesional."
    },
    {
      icon: FileText,
      title: "Propiedad intelectual",
      content: "Todos los contenidos, marcas, logos, textos, gráficos y diseños de este sitio web son propiedad de Lazos de Cuidado Home Care o de sus respectivos titulares. Queda prohibida su reproducción, distribución o uso no autorizado sin nuestro consentimiento previo por escrito."
    },
    {
      icon: AlertTriangle,
      title: "Responsabilidad",
      content: "Lazos de Cuidado Home Care no garantiza la disponibilidad continua del sitio, aunque procuramos que se mantenga en funcionamiento de manera estable y segura. Los servicios de salud domiciliaria están sujetos a disponibilidad, condiciones específicas y evaluación previa de cada caso. La información publicada en el sitio no reemplaza la consulta médica profesional."
    },
    {
      icon: Shield,
      title: "Privacidad y protección de datos",
      content: "El uso del sitio web también se rige por nuestra Política de Privacidad, donde explicamos cómo recopilamos, usamos y protegemos sus datos personales."
    },
    {
      icon: FileText,
      title: "Modificaciones",
      content: "Podemos actualizar estos Términos en cualquier momento. Las modificaciones se publicarán en esta página y entrarán en vigencia desde el momento de su publicación."
    }
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-gray-400 hover:text-beige-300 transition-colors duration-200 flex items-center space-x-1 text-sm group"
      >
        <FileText className="w-4 h-4" />
        <span>Términos de Servicio</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-neutral-dark to-blue-serene text-white p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Términos de Servicio</h2>
                      <p className="text-blue-light text-sm md:text-base">Lazos De Cuidado Home Care</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <span className="text-2xl leading-none">×</span>
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-200px)]">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-beige-50 rounded-xl border border-blue-100"
                >
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Última actualización: 12 de septiembre de 2025</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Bienvenido a <strong>Lazos de Cuidado Home Care</strong>. Al acceder y utilizar nuestro sitio web{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://lazosdecuidado.com</code>{" "}
                    usted acepta cumplir con los siguientes términos y condiciones de uso. Le recomendamos leerlos cuidadosamente antes de utilizar nuestros servicios.
                  </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-6">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-200 hover:border-beige-300 hover:shadow-lg transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-beige-500 to-blue-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-neutral-dark mb-3 group-hover:text-blue-serene transition-colors duration-300">
                              {index + 1}. {section.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-6 bg-gradient-to-r from-neutral-dark to-blue-serene text-white rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-5 h-5" />
                    <h4 className="font-semibold">9. Contacto</h4>
                  </div>
                  <p className="text-blue-light leading-relaxed mb-4">
                    Si tiene alguna pregunta sobre estos Términos, puede contactarnos en:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-beige-300" />
                      <span className="text-sm">Teléfono: +57 (310) 6123883</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-beige-300" />
                      <span className="text-sm">Correo: lazosdecuidado@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-beige-300" />
                      <span className="text-sm">Dirección: CALLE 30 #1B-100 Of. 61, Jamundí, Valle del Cauca</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}