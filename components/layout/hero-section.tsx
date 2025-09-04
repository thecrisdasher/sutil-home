"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Heart,
    title: "Cuidado con Empatía",
    description: "Atención personalizada y humana"
  },
  {
    icon: Shield,
    title: "Profesionalismo",
    description: "Personal altamente capacitado"
  },
  {
    icon: Users,
    title: "Respeto",
    description: "Dignidad en cada servicio"
  }
];

export function HeroSection() {
  return (
    <section className="py-20 gradient-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-light/20 to-beige-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear", 
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-beige-400/20 to-blue-serene/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
              }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-serene mb-6 shadow-lg cursor-pointer transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-4 h-4 mr-2" />
              </motion.div>
              Cuidado Domiciliario En Cali y Alrededores.
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-dark mb-4 sm:mb-6 leading-tight"
            >
              Servicio especializado de{" "}
              <motion.span 
                className="text-gradient cursor-pointer inline-block"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                enfermeras
              </motion.span>
              {" "}y{" "}
              <motion.span 
                className="text-gradient cursor-pointer inline-block"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                fisioterapeutas
              </motion.span>
              <motion.span 
                className="text-gradient cursor-pointer inline-block"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
              </motion.span>
              {" "}a domicilio en el área metropolitana de Cali{" "}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-neutral-dark/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Brindamos servicios de salud domiciliaria de la más alta calidad, 
              con un equipo de profesionales comprometidos con el bienestar 
              y la dignidad de nuestros pacientes.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-300"
                  >
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-serene to-beige-500 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-neutral-dark text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-neutral-dark/70">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/services">
                <Button className="btn-primary group w-full xs:w-auto">
                  <span className="text-sm sm:text-base">Conoce nuestros servicios</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-blue-serene text-blue-serene hover:bg-blue-serene hover:text-white w-full xs:w-auto">
                  <span className="text-sm sm:text-base">Contáctanos</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl -mt-20 sm:-mt-40 md:-mt-60 lg:-mt-80"
              >
                <Image
                  src="/images/cuidados-ancianos.png"
                  alt="Enfermera cuidando a paciente mayor con cariño y profesionalismo"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ y: -5 }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl max-w-[180px] sm:max-w-xs"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-dark text-sm sm:text-base">+50</h4>
                    <p className="text-xs sm:text-sm text-neutral-dark/70">
                      Familias atendidas
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-beige-400 to-blue-light rounded-2xl opacity-20 -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute -bottom-46 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-serene rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-serene rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}