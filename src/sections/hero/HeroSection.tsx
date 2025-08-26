'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Heart, Shield, Users, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40 pt-10">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-br from-lime-400/15 to-teal-400/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-lime-400/25 to-emerald-400/25 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(6 182 212) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <motion.div 
                className="flex items-center space-x-3 text-teal-600 font-semibold bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-100/50 shadow-lg w-fit"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-5 h-5 text-teal-500" />
                </motion.div>
                <span className="text-sm tracking-wide">Alivio Vital Home Care</span>
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block mb-2">Cuidamos con</span>
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  cariño
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-lg blur-sm -z-10"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
                <span className="text-gray-700">, </span>
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-500 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  profesionalismo
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-lime-500/20 rounded-lg blur-sm -z-10"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  />
                </motion.span>
                <span className="text-gray-700"> y </span>
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  respeto
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg blur-sm -z-10"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                  />
                </motion.span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light relative z-10">
                  Servicios de atención domiciliaria de salud con{' '}
                  <span className="font-semibold text-teal-700">enfermeras</span>,{' '}
                  <span className="font-semibold text-emerald-700">fisioterapeutas</span> y{' '}
                  <span className="font-semibold text-cyan-700">auxiliares</span> disponibles{' '}
                  <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full text-teal-800 font-bold text-lg">24/7</span>.
                  <br className="hidden md:block" />
                  Garantizamos el bienestar integral de nuestros pacientes en la comodidad de su hogar.
                </p>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-teal-50/50 to-emerald-50/50 rounded-xl blur-sm -z-10"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </FadeIn>

            {/* Enhanced Stats */}
            <FadeIn delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                <motion.div 
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-teal-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Personal Certificado</span>
                    <span className="text-xs text-gray-600">Profesionales licenciados</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-2 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Users className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Atención 24/7</span>
                    <span className="text-xs text-gray-600">Disponibles siempre</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-cyan-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-2 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Cuidado Personalizado</span>
                    <span className="text-xs text-gray-600">Adaptado a cada paciente</span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            {/* Enhanced CTAs */}
            <FadeIn delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-600 hover:via-emerald-600 hover:to-cyan-600 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden group"
                    onClick={() => scrollToSection('servicios')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Conoce nuestros servicios</span>
                      <Star className="w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="relative border-2 border-teal-500 text-teal-600 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white hover:border-transparent px-10 py-4 rounded-2xl transition-all duration-500 font-semibold text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden group"
                    onClick={() => scrollToSection('contacto')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Contáctanos hoy</span>
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Enhanced Image Section */}
          <FadeIn delay={0.8} direction="right">
            <div className="relative">
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-[28rem] bg-gradient-to-br from-white/40 via-teal-50/60 to-emerald-50/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center relative overflow-hidden -translate-y-44">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
                  
                  {/* Enhanced content */}
                  <div className="text-center space-y-6 relative z-10">
                    <motion.div 
                      className="relative mx-auto"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400 rounded-full mx-auto flex items-center justify-center shadow-2xl relative">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Heart className="w-16 h-16 text-white drop-shadow-lg" />
                        </motion.div>
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 border-4 border-white/30 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      
                      {/* Floating mini icons */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -5, 0], rotate: [0, 180, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
                        animate={{ y: [0, 5, 0], rotate: [360, 180, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        <Star className="w-3 h-3 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800">Cuidado Profesional</h3>
                      <p className="text-gray-600 font-medium leading-relaxed px-4">
                        Enfermeras certificadas<br />
                        <span className="text-teal-600 font-semibold">atendiendo en casa</span>
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Background pattern inside card */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                       backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)`,
                       backgroundSize: '30px 30px'
                     }} />
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-24 bg-gradient-to-br from-emerald-400/30 to-lime-400/30 rounded-full backdrop-blur-sm border border-white/20 shadow-xl"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full backdrop-blur-sm border border-white/20 shadow-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              
              <motion.div
                className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-lime-400/25 to-emerald-400/25 rounded-full backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{ scale: [1, 1.1, 1], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              <motion.div
                className="absolute top-1/4 -right-2 w-12 h-12 bg-gradient-to-br from-cyan-400/25 to-teal-400/25 rounded-full backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{ scale: [1.1, 1, 1.1], x: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const element = document.getElementById('servicios')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className="relative">
          <div className="w-8 h-12 border-2 border-teal-400/60 rounded-full flex justify-center bg-white/20 backdrop-blur-sm shadow-lg group-hover:border-teal-500 transition-colors duration-300">
            <motion.div 
              className="w-1.5 h-4 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full mt-2"
              animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-teal-400/30 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm"
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            Ver servicios
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}