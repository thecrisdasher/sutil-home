"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Heart, Sparkles, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    text: "Personal altamente capacitado y certificado",
    icon: Shield
  },
  {
    text: "Atención personalizada las 24 horas",
    icon: Clock
  },
  
  {
    text: "Coordinación con enfermero tratantes",
    icon: Users
  },
  {
    text: "Planes de cuidado individualizados",
    icon: Star
  }
];

const stats = [
  {
    icon: Users,
    number: "Profesionales",
    label: "Familias Atendidas",
    color: "from-blue-serene via-blue-light to-beige-500",
    description: "Confiaron en nosotros"
  },
  {
    icon: Award,
    number: "5+",
    label: "Años de Experiencia",
    color: "from-blue-serene via-beige-500 to-blue-light",
    description: "En el sector salud"
  },
  {
    icon: Heart,
    number: "98%",
    label: "Satisfacción del Cliente",
    color: "from-blue-serene via-blue-light to-beige-400",
    description: "Nos recomiendan"
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export function AboutPreview() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-beige-50/70">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-serene/8 to-beige-400/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-beige-500/8 to-blue-light/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Subtle badge with gentle animation */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm rounded-full border border-blue-serene/15 shadow-sm mb-6 hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 mr-2 text-blue-serene" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-serene to-beige-600 bg-clip-text text-transparent">
                Sobre Nosotros
              </span>
            </motion.div>

            {/* Enhanced title with subtle effects */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6 leading-tight"
            >
              Comprometidos con tu{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-serene via-blue-light to-beige-500 bg-clip-text text-transparent">
                  bienestar
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-serene to-transparent rounded-full opacity-60"
                />
              </span>{" "}
              y{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-serene via-blue-light to-beige-500 bg-clip-text text-transparent">
                  dignidad
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-beige-500 to-transparent rounded-full opacity-60"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-neutral-dark/80 mb-8 leading-relaxed"
            >
              En Lazos De Cuidado Home Care, entendemos que cada persona merece recibir 
              atención médica de calidad en la comodidad y calidez de su hogar. 
              Nuestro equipo de profesionales está dedicado a brindar cuidados 
              excepcionales con el más alto nivel de compasión y respeto.
            </motion.p>

            {/* Features List with subtle improvements */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.01,
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex items-start space-x-3 p-3 rounded-xl bg-white/40 backdrop-blur-sm border border-blue-serene/8 hover:border-blue-serene/20 hover:shadow-sm transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-serene to-blue-light rounded-lg flex items-center justify-center shadow-sm"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-neutral-dark/90 text-sm group-hover:text-neutral-dark transition-colors duration-300">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats removidos del inicio */}
            <></>

            {/* CTA Button with subtle enhancement */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href="/about">
                <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-serene to-blue-light hover:from-blue-600 hover:to-blue-serene text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Conoce más sobre nosotros</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Images Section with refined effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image with subtle enhancement */}
              <motion.div
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                <Image
                  src="/images/home-care-about.png"
                  alt="Equipo médico profesional de Lazos De Cuidado Home Care"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                />
              </motion.div>

              {/* Secondary image with gentle animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl z-20 border-3 border-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-serene/10 to-transparent z-10" />
                <Image
                  src="/images/logo-empresa-salud-solo-vividos-web.png"
                  alt="Cuidado personalizado en el hogar"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Refined floating elements */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-beige-400 to-blue-light rounded-2xl opacity-30 -z-10 shadow-lg"
              />
              
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -45, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-serene to-blue-light rounded-xl opacity-25 -z-10 shadow-lg"
              />

              {/* Subtle decorative dots */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 -left-6 w-3 h-3 bg-blue-serene/40 rounded-full"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-8 w-2 h-2 bg-beige-500/50 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}