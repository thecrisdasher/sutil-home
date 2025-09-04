"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-beige-500/10 to-blue-light/10 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20"
            >
              <Heart className="w-4 h-4 mr-2" />
              Tu bienestar es nuestra prioridad
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark leading-tight"
            >
              ¿Listo para recibir el 
              <span className="text-gradient block">
                mejor cuidado en casa?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-dark/70 leading-relaxed"
            >
              Nuestro equipo de profesionales está disponible las 24 horas para 
              brindarte el cuidado personalizado que tú y tu familia merecen. 
              Contáctanos hoy mismo y descubre la diferencia.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl border border-beige-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-serene to-blue-light rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark text-sm">24/7</p>
                  <p className="text-xs text-neutral-dark/60">Disponibilidad</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl border border-beige-200">
                <div className="w-10 h-10 bg-gradient-to-br from-beige-500 to-beige-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark text-sm">Certificados</p>
                  <p className="text-xs text-neutral-dark/60">Profesionales</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl border border-beige-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-light to-beige-400 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark text-sm">Cuidado</p>
                  <p className="text-xs text-neutral-dark/60">Personalizado</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="flex-1">
                <Button className="btn-primary w-full group">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar consulta gratuita
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <a 
                href="https://wa.me/573106123883?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20los%20servicios%20de%20Alivio%20Vital%20Home%20Care."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="btn-secondary w-full group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 pt-4 border-t border-beige-200"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-serene">50+</p>
                <p className="text-sm text-neutral-dark/60">Familias atendidas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-beige-500">98%</p>
                <p className="text-sm text-neutral-dark/60">Satisfacción</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-serene">5+</p>
                <p className="text-sm text-neutral-dark/60">Años experiencia</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home-care-ready.png"
                alt="Enfermera profesional brindando cuidado personalizado"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent"></div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-dark">Cuidado con amor</h4>
                    <p className="text-sm text-neutral-dark/70">Profesionalismo y calidez humana</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl rotate-12 opacity-80"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-light to-blue-serene rounded-xl -rotate-12 opacity-80"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}