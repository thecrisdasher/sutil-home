"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Personal altamente capacitado y certificado",
  "Atención personalizada las 24 horas",
  "Equipos médicos de última tecnología",
  "Seguimiento continuo del estado de salud",
  "Coordinación con médicos tratantes",
  "Planes de cuidado individualizados"
];

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Familias Atendidas",
    color: "from-blue-serene to-blue-light"
  },
  {
    icon: Award,
    number: "15+",
    label: "Años de Experiencia",
    color: "from-beige-500 to-beige-600"
  },
  {
    icon: Heart,
    number: "98%",
    label: "Satisfacción del Cliente",
    color: "from-blue-light to-beige-400"
  }
];

export function AboutPreview() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-serene mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Sobre Nosotros
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Comprometidos con tu <span className="text-gradient">bienestar</span> y <span className="text-gradient">dignidad</span>
            </h2>

            <p className="text-lg text-neutral-dark/80 mb-8 leading-relaxed">
              En Alivio Vital Home Care, entendemos que cada persona merece recibir 
              atención médica de calidad en la comodidad y calidez de su hogar. 
              Nuestro equipo de profesionales está dedicado a brindar cuidados 
              excepcionales con el más alto nivel de compasión y respeto.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-serene flex-shrink-0" />
                  <span className="text-neutral-dark/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-dark">{stat.number}</div>
                    <div className="text-sm text-neutral-dark/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <Button className="btn-primary">
                  Conoce más sobre nosotros
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipo médico profesional de Alivio Vital Home Care"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Secondary image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl z-20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Cuidado personalizado en el hogar"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-beige-400 to-blue-light rounded-2xl opacity-30 -z-10"
              />
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl opacity-20 -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}