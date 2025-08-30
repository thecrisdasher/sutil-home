"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Heart, 
  Home, 
  DollarSign, 
  Clock, 
  Shield, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp,
  Smile,
  Award,
  Phone,
  Sparkles,
  Stethoscope
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Type definitions
interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface MainBenefit {
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  accent: string;
}

interface AdditionalBenefit {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const mainBenefits: MainBenefit[] = [
  {
    icon: Home,
    title: "Comodidad del Hogar",
    description: "Recibe atención médica profesional en la comodidad y privacidad de tu propio hogar, rodeado de tus seres queridos.",
    features: [
      "Ambiente familiar y conocido",
      "Mayor privacidad y dignidad",
      "Reducción del estrés y ansiedad",
      "Mantenimiento de rutinas personales",
      "Acceso a pertenencias personales"
    ],
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-blue-serene to-blue-light",
    accent: "bg-blue-serene/10"
  },
  {
    icon: DollarSign,
    title: "Ahorro Económico",
    description: "El cuidado domiciliario es significativamente más económico que la hospitalización prolongada o residencias especializadas.",
    features: [
      "Costos menores que hospitalización",
      "Sin gastos de alojamiento adicional",
      "Planes de pago flexibles",
      "Optimización de recursos familiares",
      "Reducción de gastos de transporte"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-beige-400 to-beige-500",
    accent: "bg-beige-400/10"
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Cuidado uno a uno adaptado específicamente a las necesidades individuales de cada paciente y familia.",
    features: [
      "Plan de cuidado individualizado",
      "Atención exclusiva del profesional",
      "Flexibilidad en horarios",
      "Adaptación a preferencias personales",
      "Comunicación directa con la familia"
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-blue-serene to-beige-400",
    accent: "bg-gradient-to-r from-blue-serene/10 to-beige-400/10"
  },
  {
    icon: TrendingUp,
    title: "Recuperación Más Rápida",
    description: "Los estudios demuestran que los pacientes se recuperan más rápido en un ambiente familiar y cómodo.",
    features: [
      "Menor riesgo de infecciones hospitalarias",
      "Mejor estado de ánimo y motivación",
      "Sueño de mejor calidad",
      "Nutrición personalizada",
      "Apoyo emocional constante"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "from-beige-500 to-blue-light",
    accent: "bg-beige-500/10"
  }
];

const additionalBenefits: AdditionalBenefit[] = [
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Atención disponible las 24 horas del día, los 7 días de la semana.",
    color: "from-blue-serene to-blue-light"
  },
  {
    icon: Shield,
    title: "Seguridad y Confianza",
    description: "Personal certificado y verificado con amplia experiencia.",
    color: "from-beige-400 to-beige-500"
  },
  {
    icon: Users,
    title: "Apoyo Familiar",
    description: "Involucra a la familia en el proceso de cuidado y recuperación.",
    color: "from-blue-light to-beige-400"
  },
  {
    icon: Star,
    title: "Calidad Garantizada",
    description: "Servicios de alta calidad con seguimiento continuo.",
    color: "from-beige-500 to-blue-serene"
  },
  {
    icon: Smile,
    title: "Bienestar Emocional",
    description: "Mejora significativa en el estado de ánimo y calidad de vida.",
    color: "from-blue-serene to-beige-500"
  },
  {
    icon: Award,
    title: "Excelencia Profesional",
    description: "Equipo multidisciplinario de profesionales especializados.",
    color: "from-beige-400 to-blue-light"
  }
];

const comparisons = [
  {
    category: "Costo",
    homecare: "60-70% menos costoso",
    hospital: "Muy alto",
    nursing: "Alto"
  },
  {
    category: "Comodidad",
    homecare: "Máxima comodidad",
    hospital: "Limitada",
    nursing: "Moderada"
  },
  {
    category: "Privacidad",
    homecare: "Total privacidad",
    hospital: "Mínima",
    nursing: "Limitada"
  },
  {
    category: "Atención",
    homecare: "Personalizada 1:1",
    hospital: "Compartida",
    nursing: "Grupal"
  },
  {
    category: "Familia",
    homecare: "Siempre presente",
    hospital: "Horarios limitados",
    nursing: "Visitas restringidas"
  }
];

const testimonialStats = [
  { number: "95%", label: "Prefiere cuidado en casa" },
  { number: "40%", label: "Recuperación más rápida" },
  { number: "60%", label: "Ahorro en costos" },
  { number: "98%", label: "Satisfacción familiar" }
];

// Floating particles animation
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-serene/20 to-beige-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced card hover effect for additional benefits
const AdditionalBenefitCard = ({ benefit, index }: { benefit: AdditionalBenefit; index: number }) => {
  const Icon = benefit.icon;
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 50,
      rotateX: 10,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        type: "spring" as const,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        type: "spring" as const,
        stiffness: 400
      }
    }
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden border border-gray-100 h-full">
        {/* Background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        <div className="relative z-10 text-center space-y-4 h-full flex flex-col">
          <motion.div 
            variants={iconVariants}
            className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden`}
          >
            <Icon className="w-8 h-8 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          
          <h3 className="text-xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
            {benefit.title}
          </h3>
          
          <p className="text-neutral-dark/70 flex-grow">{benefit.description}</p>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={isHovered ? { x: [-100, 300] } : {}}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

export default function BenefitsPage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.title = "Beneficios - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre los beneficios del cuidado domiciliario: comodidad, ahorro, atención personalizada, recuperación más rápida y bienestar familiar.');
    }

    // Intersection observer for active section
    const observers: IntersectionObserver[] = [];
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Advanced stagger animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <FloatingParticles />
        
        {/* Enhanced geometric shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-128, -100, -128],
            y: [-128, -150, -128],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-beige-500/10 to-blue-light/10 rounded-full"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
            x: [96, 120, 96],
            y: [96, 70, 96],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-8 h-8 bg-blue-serene/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-6 h-6 bg-beige-400/30 rounded-full"
          animate={{
            x: [0, 15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <Star className="w-4 h-4 mr-2" />
              Beneficios del Cuidado Domiciliario
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight"
            >
              Ventajas que{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                transforman vidas
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto"
            >
              Descubre por qué el cuidado domiciliario es la mejor opción para 
              la recuperación, bienestar y calidad de vida de tus seres queridos.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-primary relative overflow-hidden group">
                    <span className="relative z-10">Consulta Gratuita</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-secondary relative overflow-hidden group">
                    <span className="relative z-10">Ver Servicios</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-serene to-beige-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-serene rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-beige-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="text-center p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 relative z-10">
                  {stat.number}
                </div>
                <div className="text-neutral-dark/70 font-medium relative z-10">
                  {stat.label}
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5d5b7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Principales <span className="text-gradient">beneficios</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Conoce las ventajas más importantes que ofrece el cuidado 
              domiciliario para pacientes y familias.
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
          
          <div className="space-y-32">
            {mainBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <motion.div 
                      className="flex items-center space-x-6"
                      whileInView={{ x: [isEven ? -50 : 50, 0] }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-10 h-10 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                          {benefit.title}
                        </h3>
                        <motion.div
                          className="h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full mt-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg text-neutral-dark/70 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {benefit.description}
                    </motion.p>
                    
                    <div className="space-y-4">
                      <motion.h4 
                        className="font-semibold text-neutral-dark flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Sparkles className="w-5 h-5 mr-2 text-beige-400" />
                        Ventajas específicas:
                      </motion.h4>
                      
                      <div className="grid gap-3">
                        {benefit.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.5 + featureIndex * 0.1 
                            }}
                            whileHover={{ x: 10, scale: 1.02 }}
                            className="flex items-center space-x-3 group/item p-3 rounded-xl hover:bg-gradient-to-r hover:from-beige-50/50 hover:to-blue-serene/5 transition-all duration-300"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                              className="relative"
                            >
                              <CheckCircle className="w-6 h-6 text-blue-serene flex-shrink-0" />
                              <motion.div
                                className="absolute inset-0 rounded-full bg-blue-serene/20"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                              />
                            </motion.div>
                            <span className="text-neutral-dark/80 group-hover/item:text-neutral-dark transition-colors font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <Link href="/contact">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="btn-primary relative overflow-hidden group shadow-lg">
                            <span className="relative z-10">Más Información</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene opacity-0 group-hover:opacity-100"
                              transition={{ duration: 0.3 }}
                            />
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className={`relative ${isEven ? '' : 'lg:col-start-1'}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: isEven ? -15 : 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: isEven ? 5 : -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-blue-serene/30 via-transparent to-transparent"
                        whileHover={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Overlay content */}
                      <motion.div
                        className="absolute inset-0 flex items-end p-8"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-white">
                          <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">Beneficio Premium</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <motion.div 
                      className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-gradient-to-br ${benefit.color} rounded-3xl rotate-12 opacity-80`}
                      animate={{
                        rotate: [12, 20, 12],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div 
                      className={`absolute -bottom-8 ${isEven ? '-left-8' : '-right-8'} w-20 h-20 bg-gradient-to-br from-blue-light to-blue-serene rounded-2xl -rotate-12 opacity-80`}
                      animate={{
                        rotate: [-12, -20, -12],
                        scale: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    
                    {/* Floating accent */}
                    <motion.div
                      className={`absolute top-1/4 ${isEven ? 'left-4' : 'right-4'} w-4 h-4 bg-beige-400/60 rounded-full`}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-beige-500/5 to-blue-light/5 rounded-full"
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Beneficios <span className="text-gradient">adicionales</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Más razones por las que el cuidado domiciliario es la mejor 
              opción para tu familia.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalBenefits.map((benefit, index) => (
              <AdditionalBenefitCard 
                key={index} 
                benefit={benefit} 
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-blue-light/5 to-beige-50 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2382b4d4' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Comparación de <span className="text-gradient">opciones de cuidado</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ve cómo el cuidado domiciliario se compara con otras opciones 
              de atención médica.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden relative group"
          >
            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="overflow-x-auto relative z-10">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-serene to-beige-500 text-white relative overflow-hidden">
                  {/* Eliminado overlay inválido dentro de thead para evitar desajuste de hidratación */}
                  <tr className="relative z-10">
                    <th className="px-6 py-6 text-left font-bold text-lg">Aspecto</th>
                    <th className="px-6 py-6 text-center font-bold text-lg">Cuidado en Casa</th>
                    <th className="px-6 py-6 text-center font-bold text-lg">Hospital</th>
                    <th className="px-6 py-6 text-center font-bold text-lg">Residencia</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                     <tr
                       key={index}
                       className={`${index % 2 === 0 ? 'bg-beige-50/50' : 'bg-white'} transition-colors duration-200 hover:bg-blue-serene/5`}
                     >
                       <td className="px-6 py-5 font-semibold text-neutral-dark relative">
                         <div
                           className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-serene to-beige-400 rounded-r-full"
                         />
                         {comparison.category}
                       </td>
                       <td className="px-6 py-5 text-center">
                         <span 
                           className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-full text-sm font-bold shadow-sm"
                         >
                           {comparison.homecare}
                         </span>
                       </td>
                       <td className="px-6 py-5 text-center">
                         <span 
                           className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-50 text-red-800 rounded-full text-sm font-bold shadow-sm"
                         >
                           {comparison.hospital}
                         </span>
                       </td>
                       <td className="px-6 py-5 text-center">
                         <span 
                           className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 rounded-full text-sm font-bold shadow-sm"
                         >
                           {comparison.nursing}
                         </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
              </table>
            </div>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: [-100, 1200] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-serene rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-beige-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-serene/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-beige-400/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Familia feliz con cuidado domiciliario"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay stats */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="text-white text-center">
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      98%
                    </motion.div>
                    <div className="text-lg">Satisfacción</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced floating decorations */}
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-beige-400 to-beige-500 rounded-3xl rotate-12 opacity-80"
                animate={{
                  rotate: [12, 25, 12],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-light to-blue-serene rounded-2xl -rotate-12 opacity-80"
                animate={{
                  rotate: [-12, -25, -12],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Pulsing dots */}
              <motion.div
                className="absolute top-1/3 left-6 w-3 h-3 bg-beige-400/80 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/3 right-8 w-2 h-2 bg-blue-serene/80 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Lo que dicen nuestras <span className="text-gradient">familias</span>
                </motion.h2>
                
                <motion.div
                  className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-2xl border border-beige-200 shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote decoration */}
                  <motion.div
                    className="absolute top-4 left-4 text-6xl text-blue-serene/20 font-serif leading-none"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    "
                  </motion.div>
                  
                  <motion.blockquote 
                    className="text-xl text-neutral-dark/80 italic leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Elegir el cuidado domiciliario fue la mejor decisión que pudimos tomar. 
                    Mi madre se recuperó mucho más rápido en casa, rodeada de amor y en 
                    un ambiente familiar. El equipo de Alivio Vital fue excepcional.
                  </motion.blockquote>
                  
                  <motion.div 
                    className="mt-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="font-bold text-neutral-dark">María González</div>
                    <div className="text-neutral-dark/60">Hija de paciente</div>
                  </motion.div>
                  
                  {/* Background gradient animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className="ml-2 text-neutral-dark/70 font-medium">5.0 de 5 estrellas</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-serene to-beige-500 text-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ¿Listo para experimentar estos beneficios?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contáctanos hoy mismo para una consulta gratuita y descubre 
              cómo el cuidado domiciliario puede transformar tu vida.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button className="bg-white text-blue-serene hover:bg-white/90 px-10 py-4 text-lg font-semibold relative overflow-hidden">
                    <span className="relative z-10">Consulta Gratuita</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-100 to-blue-50"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              <a 
                href="https://wa.me/573106123883?text=Hola,%20me%20interesa%20conocer%20los%20beneficios%20del%20cuidado%20domiciliario%20de%20Alivio%20Vital."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-10 py-4 text-lg font-semibold relative overflow-hidden">
                    <span className="relative z-10">WhatsApp</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              className="flex items-center justify-center space-x-8 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-5 h-5" />
                <span className="text-sm opacity-80">Certificado</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5" />
                <span className="text-sm opacity-80">24/7</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="w-5 h-5" />
                <span className="text-sm opacity-80">+50 Familias</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}