"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Heart, Shield, Users, Clock, Home, Stethoscope, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Cuidado de Enfermería",
    description: "Atención médica profesional con enfermeras certificadas.",
    color: "from-blue-serene via-blue-light to-beige-500",
    shadowColor: "shadow-blue-serene/25",
    highlight: "Enfermería"
  },
  {
    icon: Shield,
    title: "Cuidado Postoperatorio",
    description: "Recuperación segura en casa después de cirugías.",
    color: "from-blue-serene via-blue-light to-beige-400",
    shadowColor: "shadow-blue-serene/25",
    highlight: "Postoperatorio"
  },
  {
    icon: Users,
    title: "Acompañamiento y Cuidado Personal",
    description: "Asistencia en actividades diarias con cuidadores capacitados.",
    color: "from-blue-light via-blue-serene to-beige-400",
    shadowColor: "shadow-blue-serene/25",
    highlight: "Personal"
  },
  {
    icon: Sparkles,
    title: "Masaje de drenaje linfático",
    description: "Masaje suave y rítmico para pacientes con movilidad reducida.",
    color: "from-beige-400 via-beige-500 to-blue-light",
    shadowColor: "shadow-beige-500/25",
    highlight: "linfático"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ServicesPreview() {
  return (
    <section className="relative py-10 sm:py-14 md:py-18 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 90, 180],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [180, 90, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-beige-500/5 to-blue-light/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/90 to-beige-50/90 backdrop-blur-sm rounded-full border border-blue-serene/20 shadow-lg mb-6 sm:mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-serene" />
            </motion.div>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-serene to-beige-600 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-amber-500" />
            </motion.div>
          </motion.div>

          {/* Simplified Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-neutral-dark">Servicios que </span>
            <span className="bg-gradient-to-r from-blue-serene via-blue-light to-beige-500 bg-clip-text text-transparent relative">
              transforman
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-serene to-blue-light rounded-full"
              />
            </span>
            <span className="text-neutral-dark"> </span>
            <span className="bg-gradient-to-r from-beige-400 via-beige-500 to-blue-light bg-clip-text text-transparent relative">
              vidas
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-beige-400 to-blue-light rounded-full"
              />
            </span>
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-neutral-dark/80 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Ofrecemos una amplia gama de servicios de salud domiciliaria diseñados 
            para brindar el{" "}
            <span className="bg-gradient-to-r from-blue-serene to-blue-light bg-clip-text text-transparent font-semibold">
              mejor cuidado
            </span>{" "}
            en la comodidad de tu hogar.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Simple floating particle */}
                <motion.div
                  animate={{
                    y: [-2, 2, -2],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-serene to-blue-light rounded-full"
                />
                
                {/* Enhanced Icon */}
                <motion.div 
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 ${service.shadowColor} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    rotate: 5,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
                  
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Enhanced Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-serene transition-colors duration-300">
                  {service.title.includes(service.highlight) ? (
                    <>
                      <span className="text-neutral-dark">
                        {service.title.split(service.highlight)[0]}
                      </span>
                      <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.highlight}
                      </span>
                      <span className="text-neutral-dark">
                        {service.title.split(service.highlight)[1]}
                      </span>
                    </>
                  ) : (
                    <span className="text-neutral-dark">{service.title}</span>
                  )}
                </h3>

                {/* Enhanced Description */}
                <p className="text-sm sm:text-base text-neutral-dark/70 leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Simplified hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-slate-200 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-serene via-blue-light to-beige-500 hover:opacity-95 text-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-blue-serene/30 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <span className="text-sm sm:text-base md:text-lg">Ver todos los servicios</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                  </motion.div>
                </span>
                
                {/* Simplified button shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}