"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react";

interface PrivacyPolicyProps {
  className?: string;
}

export function PrivacyPolicy({ className = "" }: PrivacyPolicyProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      icon: Shield,
      title: "Información que Recopilamos",
      content: "Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónico e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación."
    },
    {
      icon: Lock,
      title: "Uso de la Información",
      content: "Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted."
    },
    {
      icon: Eye,
      title: "Cookies",
      content: "Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador. Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente."
    },
    {
      icon: Globe,
      title: "Enlaces a Terceros",
      content: "Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros."
    },
    {
      icon: Users,
      title: "Control de su Información Personal",
      content: "En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial."
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
        <span>Política de Privacidad</span>
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
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Política de Privacidad</h2>
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
                  <p className="text-gray-700 leading-relaxed">
                    La presente Política de Privacidad establece los términos en que <strong>Lazos De Cuidado</strong> usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios.
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
                              {section.title}
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

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-6 bg-gradient-to-r from-neutral-dark to-blue-serene text-white rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Lock className="w-5 h-5" />
                    <h4 className="font-semibold">Compromiso de Seguridad</h4>
                  </div>
                  <p className="text-blue-light leading-relaxed">
                    <strong>Lazos De Cuidado</strong> está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-light">
                      <strong>LA GERENCIA</strong> - Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                    </p>
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