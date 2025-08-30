"use client";

import Image from "next/image"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Nuestro Equipo", href: "/team" },
  ],
  secondary: [
    { name: "Beneficios", href: "/benefits" },
    { name: "Testimonios", href: "/testimonials" },
    { name: "Contacto", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 (310) 6123883",
    href: "tel:+573001234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aliviovitalhc@gmail.com",
    href: "mailto:aliviovitalhc@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cal, Colombia",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-dark to-blue-serene text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-transparent from-beige-500 to-blue-light rounded-xl flex items-center justify-center">
                  <Image
                    src="/images/logo-empresa-salud-solo-vividos-web.png"   // 👈 reemplaza con la ruta de tu logo (ej: /images/logo.png)
                    alt="Alivio Vital Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Alivio Vital</h3>
                  <p className="text-blue-light text-sm">Home Care</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cuidamos con empatía, profesionalismo y respeto. Brindamos servicios de salud domiciliaria de la más alta calidad.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-beige-500 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Navegación</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-beige-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-beige-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Más Información</h4>
              <ul className="space-y-3">
                {navigation.secondary.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-beige-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-beige-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-beige-300 transition-colors duration-200 group"
                      >
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-beige-500 transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Alivio Vital Home Care. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Desarrollado por{" "}
              <a
                href="https://portafolio-mejorllamaacris.vercel.app/"
                rel="noopener noreferrer"
                className="text-beige-300 hover:text-beige-200 decoration-beige-300/60 hover:decoration-beige-200"
              >
                Mejor Llama A Cris!
              </a>
            </p>
            <div className="flex justify-center md:justify-end space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-beige-300 transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-beige-300 transition-colors duration-200">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}