"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Shield, 
  Clock, 
  Users, 
  Brain,
  Pill,
  Thermometer,
  Badge,
  UserCheck,
  Home,
  Phone,
  CheckCircle,
  Sparkles,
  Star
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Función para generar mensaje de WhatsApp
const generateWhatsAppMessage = (packageName: string, features: string[], schedule: string) => {
  const message = `¡Hola! Me interesa el ${packageName}\n\n📋 Detalles del paquete:\n• Horario: ${schedule}\n\n✅ Servicios incluidos:\n${features.map(feature => `• ${feature}`).join('\n')}\n\n¿Podrían proporcionarme más información y cotización?`
  return encodeURIComponent(message)
}

// Función para abrir WhatsApp
const openWhatsApp = (packageName: string, features: string[], schedule: string) => {
  const phoneNumber = '+573106123883' // Reemplazar con el número real
  const message = generateWhatsAppMessage(packageName, features, schedule)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

// Type definitions
interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface MainService {
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  accent: string;
}

interface AdditionalService {
  icon: any;
  title: string;
  description: string;
  color: string;
  scope?: string;
  benefits?: string[];
}

interface ServiceCardProps {
  service: MainService | AdditionalService;
  index: number;
  isMain?: boolean;
}

const mainServices: MainService[] = [
  {
    icon: Stethoscope,
    title: "Cuidado de Enfermería",
    description: "Nuestro cuidado domiciliario integral se enfoca en el bienestar y la comodidad del paciente en su hogar.",
    features: [
      "Cuidados Personales: Asistencia en actividades diarias como higiene, vestirse, alimentación, suministro de medicamentos según fórmula médica, actividades lúdicas y de movilidad, terapias, estimulación cognitiva y ajustada a las necesidades del paciente.",
      "Acompañamiento Emocional: Compañía cálida para reducir la ansiedad y fomentar el bienestar emocional del paciente y su familia.",
      "TPink: Traslados a citas médicas y diligencias, garantizando comodidad y puntualidad.",
      "Acompañamiento y asistencia posoperatoria: Servicio especializado para garantizar una recuperación exitosa tras una cirugía, atendiendo siempre las indicaciones médicas.",
      "Acompañamiento a pacientes terminales: Cuidado compasivo y respetuoso para pacientes en etapa terminal, enfocado en su comodidad y dignidad."
    ],
    image: "/images/cuidado-enfermero.png",
    color: "from-blue-serene to-blue-light",
    accent: "bg-blue-serene/10"
  }
];

const additionalServices: AdditionalService[] = [
  {
    icon: Sparkles,
    title: "Masajes",
    description: "Masajes especializados realizados por fisioterapeutas certificados: Geriátricos, Terapéuticos y Drenaje linfático, diseñados para pacientes con movilidad reducida.",
    scope: "Sesiones de 45 minutos personalizadas. Masajes geriátricos para adultos mayores, terapéuticos para rehabilitación y drenaje linfático para reducir inflamación.",
    benefits: [
      "Mejora circulación",
      "Reduce hinchazón",
      "Alivia rigidez",
      "Previene complicaciones como úlceras por presión"
    ],
    color: "from-beige-400 to-beige-500"
  }
];

const benefits = [
  "Permite a los pacientes mantener su independencia y rutina en la comodidad de su hogar.",
  "Ofrece un entorno familiar que mejora el bienestar emocional y físico.",
  "Previene complicaciones mediante un monitoreo constante y personalizado.",
  "Para la familia: Tranquilidad, tiempo para descansar o realizar otras tareas, confianza en el cuidado de su ser querido."
];

// Floating particles animation
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
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

// Enhanced card hover effect
const ServiceCard = ({ service, index, isMain = false }: ServiceCardProps) => {
  const Icon = service.icon;
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
      rotateY: isMain ? 0 : 5,
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

  if (isMain) {
    const mainService = service as MainService;
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
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative border border-gray-100">
          {/* Gradient overlay animation */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${mainService.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />
          
          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <motion.div 
                variants={iconVariants}
                className={`w-16 h-16 bg-gradient-to-br ${mainService.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
              >
                <Icon className="w-8 h-8 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
                  {mainService.title}
                </h3>
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <p className="text-lg text-neutral-dark/70 leading-relaxed">
              {mainService.description}
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-neutral-dark flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-beige-400" />
                Incluye:
              </h4>
              <div className="grid gap-3">
                {mainService.features.map((feature: string, featureIndex: number) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-serene flex-shrink-0" />
                    </motion.div>
                    <span className="text-neutral-dark/80 group-hover/item:text-neutral-dark transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={isHovered ? { x: [-100, 400] } : {}}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    );
  }

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
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        <div className="relative z-10 text-center space-y-4 h-full flex flex-col">
          <motion.div 
            variants={iconVariants}
            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden`}
          >
            <Icon className="w-8 h-8 text-white relative z-10" />
            <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
          </motion.div>
          
          <h3 className="text-xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-neutral-dark/70 flex-grow">{service.description}</p>
          
          {('scope' in service && service.scope) && (
            <div className="text-left text-sm text-neutral-dark/70 space-y-2 pt-4">
              <h4 className="font-semibold text-neutral-dark flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-beige-400" />
                Alcance:
              </h4>
              <p>{service.scope}</p>
            </div>
          )}

          {('benefits' in service && service.benefits) && (
            <div className="text-left text-sm text-neutral-dark/70 space-y-2 pt-2">
              <h4 className="font-semibold text-neutral-dark flex items-center">
                <Star className="w-4 h-4 mr-2 text-beige-400" />
                Beneficios:
              </h4>
              <ul className="space-y-1 list-disc list-inside">
                {service.benefits.map((benefit: string, i: number) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
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

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.title = "Servicios - Lazos De Cuidado Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre nuestros servicios de cuidado domiciliario: enfermería, cuidado post-operatorio, rehabilitación, acompañamiento y más. Atención 24/7.');
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
              <Stethoscope className="w-4 h-4 mr-2" />
              Nuestros Servicios
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
              Cuidado integral{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                en tu hogar
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
              Ofrecemos un servicio de apoyo en el cuidado integral del paciente en la comodidad de su hogar permitiendo recibir atención en un entorno familiar y comódo.
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
                    <span className="relative z-10">Solicitar Información</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <a 
                href="https://wa.me/573106123883?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20los%20servicios%20de%20Alivio%20Vital%20Home%20Care."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-secondary relative overflow-hidden group">
                    <span className="relative z-10">WhatsApp</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-serene to-beige-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-serene rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-beige-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-blue-light rounded-full"></div>
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
              Servicios <span className="text-gradient">Principales</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nuestros servicios especializados están diseñados para brindar 
              el mejor cuidado en la comodidad de tu hogar.
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
            {mainServices.map((service, index) => {
              const Icon = service.icon;
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
                        className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg`}
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
                          {service.title}
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
                      {service.description}
                    </motion.p>
                    
                    <div className="space-y-4">
                      <motion.h4 
                        className="font-semibold text-neutral-dark flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Sparkles className="w-5 h-5 mr-2 text-beige-400" />
                        Incluye:
                      </motion.h4>
                      
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
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
                        src={service.image}
                        alt={service.title}
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
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">Servicio Premium</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <motion.div
                      className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-gradient-to-br ${service.color} rounded-3xl rotate-12 opacity-80`}
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

      {/* Additional Services */}
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
              Servicios <span className="text-gradient">Adicionales</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Complementamos nuestros servicios principales con atención 
              especializada para cubrir todas tus necesidades de salud.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
                  src="/images/casa-encali-cuidados.png"
                  alt="Beneficios del cuidado domiciliario"
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
                      24/7
                    </motion.div>
                    <div className="text-lg">Disponibilidad</div>
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
                  Beneficios del <span className="text-gradient">cuidado en casa</span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-neutral-dark/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Descubre por qué cada vez más familias eligen el cuidado 
                  domiciliario como la mejor opción para sus seres queridos.
                </motion.p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center space-x-4 p-5 bg-gradient-to-r from-beige-50 to-white rounded-2xl border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <CheckCircle className="w-7 h-7 text-blue-serene flex-shrink-0" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-serene/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                    <span className="text-neutral-dark/80 group-hover:text-neutral-dark transition-colors font-medium">
                      {benefit}
                    </span>
                    
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-2xl"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2382b4d4' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-serene/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-beige-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating dots */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-serene/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-beige-400/40 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Tenemos más opciones que se adaptan <span className="text-gradient">perfecto a tus necesidades</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cada familia es unica y merece un cuidado diseñado especialmente para ello, personaliza el paquete que cumpla con tus requisitos específicos.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Paquete Básico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-blue-serene/10 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-serene/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-serene to-blue-light rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">Paquete Estándar</h3>
                <p className="text-neutral-dark/70 mb-4">Lunes a Viernes 8 horas</p>
                <p className="text-sm text-neutral-dark/60 mb-6">Cuidado profesional de enfermería</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Cuidado profesional de enfermería",
                    "Lunes a Viernes",
                    "8 horas diarias"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-serene flex-shrink-0" />
                      <span className="text-neutral-dark/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => openWhatsApp(
                      'Paquete Estándar (8 horas L a V)',
                      [
                        'Cuidado básico de enfermería',
                        'Administración de medicamentos',
                        'Acompañamiento y supervisión',
                        'Asistencia en actividades diarias',
                        'Monitoreo de signos vitales',
                        'Horario: Lunes a Viernes'
                      ],
                      '8 horas, Lunes a Viernes'
                    )}
                    className="w-full bg-gradient-to-r from-blue-serene to-blue-light text-white hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Cotización
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Paquete Completo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-beige-400 relative overflow-hidden group transform scale-105"
            >
              {/* Popular badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-beige-400 to-beige-500 text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12"
                animate={{
                  rotate: [12, 15, 12],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Más Popular
              </motion.div>
              
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-beige-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">Paquete Pro</h3>
                <p className="text-neutral-dark/70 mb-4">Lunes a Viernes 12 horas</p>
                <p className="text-sm text-neutral-dark/60 mb-6">Cuidado profesional de enfermería</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Cuidado profesional de enfermería",
                    "Lunes a Viernes",
                    "12 horas diarias"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-beige-500 flex-shrink-0" />
                      <span className="text-neutral-dark/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => openWhatsApp(
                      'Paquete Pro (12 hrs L a V)',
                      [
                        'Todo del paquete estándar',
                        'Fisioterapia y rehabilitación',
                        'Traslados médicos (TPink)',
                        'Cuidado postoperatorio',
                        'Estimulación cognitiva',
                        'Masaje de drenaje linfático',
                        'Horario extendido: 12 horas'
                      ],
                      '12 horas, Lunes a Viernes'
                    )}
                    className="w-full bg-gradient-to-r from-beige-400 to-beige-500 text-white hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Cotización
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Paquete Premium - COLORES MORADOS ACTUALIZADOS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-500 relative overflow-hidden group"
            >
              {/* Premium badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12"
                animate={{
                  rotate: [12, 15, 12],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Premium
              </motion.div>
              
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">Paquete Premium</h3>
                <p className="text-neutral-dark/70 mb-4">Lunes a Domingo 24 horas</p>
                <p className="text-sm text-neutral-dark/60 mb-6">Cuidado profesional de enfermería</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Cuidado profesional de enfermería",
                    "Lunes a Domingo",
                    "24 horas diarias"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-neutral-dark/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => openWhatsApp(
                      'Paquete Premium (Servicio 24/7)',
                      [
                        'Todo del paquete Pro',
                        'Servicio 24 horas',
                        'Disponibilidad fines de semana',
                        'Atención de emergencias',
                        'Equipo de enfermería especializado',
                        'Seguimiento continuo',
                        'Coordinación con enfermeras tratantes'
                      ],
                      '24 horas, 7 días a la semana'
                    )}
                    className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Cotización
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-3xl p-8 border border-blue-serene/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
            
            </motion.div>
          </motion.div>
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
              ¿Necesitas más información sobre nuestros servicios?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contáctanos para una validación gratuita y descubre cómo podemos 
              ayudarte a ti y a tu familia.
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
                href="https://wa.me/573106123883?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20los%20servicios%20de%20Alivio%20Vital%20Home%20Care."
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
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm opacity-80">Certificado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm opacity-80">24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="text-sm opacity-80">Profesionalismo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
