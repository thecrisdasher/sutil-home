"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Shield, Users, Clock, Home, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Cuidado Integral",
    description: "Atención médica completa y personalizada en la comodidad del hogar.",
    color: "from-blue-serene to-blue-light"
  },
  {
    icon: Users,
    title: "Acompañamiento Emocional",
    description: "Apoyo psicológico y emocional para pacientes y familias.",
    color: "from-beige-500 to-beige-600"
  },
  {
    icon: Stethoscope,
    title: "Cuidado Posoperatorio",
    description: "Seguimiento especializado después de procedimientos médicos.",
    color: "from-blue-light to-beige-400"
  },
  {
    icon: Shield,
    title: "Enfermería Profesional",
    description: "Personal altamente capacitado y certificado en cuidados de salud.",
    color: "from-blue-serene to-beige-500"
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Servicio continuo para emergencias y cuidados especiales.",
    color: "from-beige-600 to-blue-serene"
  },
  {
    icon: Home,
    title: "Masajes Terapéuticos",
    description: "Terapias de relajación y rehabilitación en casa.",
    color: "from-blue-light to-blue-serene"
  }
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-beige-100 rounded-full text-sm font-medium text-blue-serene mb-4"
          >
            <Heart className="w-4 h-4 mr-2" />
            Nuestros Servicios
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Servicios que <span className="text-gradient">transforman vidas</span>
          </h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de salud domiciliaria diseñados 
            para brindar el mejor cuidado en la comodidad de tu hogar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-beige-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-blue-serene transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button className="btn-primary text-lg px-8 py-4">
              Ver todos los servicios
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}