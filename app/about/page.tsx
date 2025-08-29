"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Sparkles,
  Star,
  Target,
  Eye,
  Trophy,
  Zap
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

interface Value {
  icon: any;
  title: string;
  description: string;
  color: string;
  accent: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: any;
  color: string;
}

interface Feature {
  text: string;
  icon?: any;
}

// Enhanced data structures
const values: Value[] = [
  {
    icon: Heart,
    title: "Compasión",
    description: "Brindamos cuidado con amor y empatía, tratando a cada paciente como familia.",
    color: "from-blue-serene to-blue-light",
    accent: "bg-blue-serene/10"
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Construimos relaciones sólidas basadas en la transparencia y profesionalismo.",
    color: "from-beige-400 to-beige-500",
    accent: "bg-beige-400/10"
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    description: "Estamos disponibles 24/7 para brindar el cuidado que necesitas cuando lo necesitas.",
    color: "from-blue-serene to-beige-400",
    accent: "bg-gradient-to-r from-blue-serene/10 to-beige-400/10"
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboramos estrechamente con familias y médicos para el mejor cuidado integral.",
    color: "from-beige-500 to-blue-light",
    accent: "bg-beige-500/10"
  }
];

const achievements: Achievement[] = [
  { 
    number: "500+", 
    label: "Familias Atendidas",
    icon: Users,
    color: "from-blue-serene to-blue-light"
  },
  { 
    number: "98%", 
    label: "Satisfacción del Cliente",
    icon: Star,
    color: "from-beige-400 to-beige-500"
  },
  { 
    number: "5+", 
    label: "Años de Experiencia",
    icon: Trophy,
    color: "from-blue-light to-beige-400"
  },
  { 
    number: "24/7", 
    label: "Disponibilidad",
    icon: Clock,
    color: "from-beige-500 to-blue-serene"
  }
];

const features: Feature[] = [
  { text: "Personal certificado y con experiencia", icon: Award },
  { text: "Planes de cuidado personalizados", icon: Target },
  { text: "Atención médica especializada", icon: Heart },
  { text: "Apoyo emocional y psicológico", icon: Users },
  { text: "Coordinación con médicos tratantes", icon: Shield },
  { text: "Servicios de rehabilitación", icon: Zap },
  { text: "Cuidado post-operatorio", icon: CheckCircle },
  { text: "Acompañamiento en actividades diarias", icon: Clock }
];

// Enhanced floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 6,
      size: 2 + Math.random() * 6
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-serene/15 to-beige-400/15"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
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

// Enhanced value card component
interface ValueCardProps {
  value: Value;
  index: number;
}

const ValueCard = ({ value, index }: ValueCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = value.icon;

  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 60,
      rotateX: 15,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        type: "spring" as const,
        stiffness: 100
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.4,
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.3, 
      rotate: 360,
      transition: { duration: 0.8 }
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
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative border border-gray-100 p-8 h-full">
        {/* Gradient overlay animation */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-6 h-full flex flex-col">
          <motion.div 
            variants={iconVariants}
            className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto relative overflow-hidden shadow-lg`}
          >
            <Icon className="w-10 h-10 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 0.8 }}
            />
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-white/30"
              animate={isHovered ? { scale: [1, 1.5], opacity: [1, 0] } : {}}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          
          <div className="flex-grow space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
              {value.title}
            </h3>
            
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
            />
            
            <p className="text-neutral-dark/70 leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>
        
        {/* Enhanced corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-serene/10 to-transparent rounded-tr-2xl" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          animate={isHovered ? { x: [-100, 400] } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced achievement card
interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="text-center p-8 bg-gradient-to-br from-white to-beige-50/50 rounded-3xl border border-beige-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
        {/* Background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-lg`}
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white relative z-10" />
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : {}}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
        
        {/* Number with enhanced animation */}
        <motion.div 
          className="text-4xl md:text-5xl font-bold text-gradient mb-3 relative"
          whileInView={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          {achievement.number}
          <motion.div
            className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-serene to-beige-400 bg-clip-text"
            animate={isHovered ? { 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ duration: 2 }}
            style={{ backgroundSize: "200% 100%" }}
          />
        </motion.div>
        
        <div className="text-neutral-dark/70 font-medium relative z-10">
          {achievement.label}
        </div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-2 border-beige-400/20 rounded-full"
          animate={isHovered ? { rotate: 360, scale: 1.2 } : {}}
          transition={{ duration: 0.8 }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={isHovered ? { x: [-100, 300] } : {}}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.title = "Sobre Nosotros - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conoce nuestra historia, misión y valores. Somos un equipo de profesionales dedicados al cuidado domiciliario con más de 5 años de experiencia.');
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

  // Advanced animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
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
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <FloatingParticles />
        
        {/* Enhanced geometric animations */}
        <motion.div 
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-serene/8 to-beige-400/8 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            x: [-160, -120, -160],
            y: [-160, -180, -160],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-beige-500/8 to-blue-light/8 rounded-full"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [0, -120, -240, -360],
            x: [128, 150, 128],
            y: [128, 100, 128],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + i % 3} h-${2 + i % 3} ${
              i % 2 === 0 ? 'bg-blue-serene/15' : 'bg-beige-400/15'
            } rounded-full`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20 backdrop-blur-sm relative overflow-hidden group"
              >
                <Heart className="w-4 h-4 mr-2" />
                Nuestra Historia
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-full"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight"
              >
                Cuidado con{" "}
                <motion.span 
                  className="text-gradient relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  propósito
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-beige-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-neutral-dark/70 leading-relaxed"
              >
                En Alivio Vital Home Care, creemos que cada persona merece recibir 
                cuidado de calidad en la comodidad de su hogar. Nuestra misión es 
                brindar servicios de salud domiciliarios excepcionales con compasión, 
                profesionalismo y dedicación.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="btn-primary relative overflow-hidden group">
                      <span className="relative z-10">Contáctanos</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="btn-secondary relative overflow-hidden group">
                      <span className="relative z-10">Nuestros Servicios</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-serene to-beige-400"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              className="relative"
            >
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/home-care-about-real.png"
                  alt="Equipo de profesionales de Alivio Vital Home Care"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-serene/30 via-transparent to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced overlay content */}
                <motion.div
                  className="absolute inset-0 flex items-end p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-white">
                    <h4 className="text-xl font-bold mb-2">Nuestro Equipo</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Profesionales Certificados</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-beige-400 to-beige-500 rounded-3xl rotate-12 opacity-80"
                animate={{
                  rotate: [12, 25, 12],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-light to-blue-serene rounded-2xl -rotate-12 opacity-80"
                animate={{
                  rotate: [-12, -25, -12],
                  scale: [1, 0.85, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 left-8 w-4 h-4 bg-beige-400/60 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/3 right-12 w-3 h-3 bg-blue-serene/60 rounded-full"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2377a8d8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                icon: Target,
                title: "Nuestra Misión",
                content: "Proporcionar servicios de cuidado domiciliario de la más alta calidad, centrados en la dignidad, comodidad y bienestar de nuestros pacientes. Nos comprometemos a ser el puente entre la atención médica profesional y el calor del hogar.",
                color: "from-blue-serene to-blue-light"
              },
              {
                icon: Eye,
                title: "Nuestra Visión",
                content: "Ser reconocidos como líderes en cuidado domiciliario, transformando la experiencia de atención médica en el hogar y estableciendo nuevos estándares de excelencia en el cuidado personalizado y compasivo.",
                color: "from-beige-500 to-beige-400"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="space-y-8 p-10 bg-gradient-to-br from-white to-beige-50/30 rounded-3xl border border-beige-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <div className="flex items-center space-x-6 relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
                        {item.title}
                      </h2>
                      <motion.div
                        className="h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full mt-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-dark/70 leading-relaxed relative z-10">
                    {item.content}
                  </p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-serene/10 to-transparent rounded-tr-2xl" />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: [-100, 400] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.5
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(119, 168, 216, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(229, 213, 183, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(119, 168, 216, 0.03) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-serene/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-beige-400/10 rounded-full"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
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
              Nuestros <span className="text-gradient">Valores</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Los principios que guían cada aspecto de nuestro trabajo y definen 
              quiénes somos como organización.
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Achievements */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-beige-500/5 to-blue-light/5 rounded-full"
            animate={{
              scale: [1, 0.7, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 14,
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
              Nuestros <span className="text-gradient">Logros</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Números que reflejan nuestro compromiso y la confianza que las familias 
              depositan en nosotros.
            </motion.p>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-light/5 to-beige-50 relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(119, 168, 216, 0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 60%, rgba(229, 213, 183, 0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 40%, rgba(119, 168, 216, 0.05) 0%, transparent 60%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${1 + i % 2} h-${1 + i % 2} ${
              i % 3 === 0 ? 'bg-blue-serene/10' : 
              i % 3 === 1 ? 'bg-beige-400/10' : 'bg-blue-light/10'
            } rounded-full`}
            style={{
              top: `${15 + (i * 10)}%`,
              right: `${5 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  ¿Por qué elegir <span className="text-gradient">Alivio Vital?</span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-neutral-dark/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Nuestro compromiso con la excelencia se refleja en cada aspecto 
                  de nuestros servicios y en la confianza que depositamos en nuestro equipo.
                </motion.p>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon || CheckCircle;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -60, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 120
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 15, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center space-x-4 p-6 bg-gradient-to-r from-white to-beige-50/50 rounded-2xl border border-beige-200/50 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    >
                      <motion.div
                        whileHover={{ scale: 1.4, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <Icon className="w-7 h-7 text-blue-serene flex-shrink-0" />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-blue-serene/20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 3, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                      <span className="text-neutral-dark/80 group-hover:text-neutral-dark transition-colors font-medium">
                        {feature.text}
                      </span>
                      
                      {/* Enhanced hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-serene/3 to-beige-400/3 rounded-2xl"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Sparkle effect */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-beige-400/60 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 8,
                transition: { duration: 0.4 }
              }}
              className="relative"
            >
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/grupo-enfermeros.png"
                  alt="Cuidado profesional en el hogar"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-serene/30 via-transparent to-transparent"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced overlay content */}
                <motion.div
                  className="absolute inset-0 flex items-end p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-white space-y-2">
                    <h4 className="text-xl font-bold">Equipo Profesional</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Certificados y Experimentados</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs">Disponible</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span className="text-xs">Certificado</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced decorative elements with more complex animations */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-beige-400 to-beige-500 rounded-3xl rotate-12 opacity-70"
                animate={{
                  rotate: [12, 35, 12],
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-12 -left-12 w-28 h-28 bg-gradient-to-br from-blue-light to-blue-serene rounded-2xl -rotate-12 opacity-70"
                animate={{
                  rotate: [-12, -35, -12],
                  scale: [1, 0.8, 1],
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Multiple floating accents */}
              <motion.div
                className="absolute top-1/3 left-6 w-5 h-5 bg-beige-400/50 rounded-full"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-8 w-3 h-3 bg-blue-serene/50 rounded-full"
                animate={{
                  x: [0, 15, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
              
              <motion.div
                className="absolute top-1/2 right-1/4 w-2 h-2 bg-beige-500/60 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-serene to-beige-500 text-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border-2 border-white/15 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white/15 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/10 rounded-2xl"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Multiple floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${1 + i % 2} h-${1 + i % 2} bg-white/20 rounded-full`}
            style={{
              top: `${25 + (i * 12)}%`,
              left: `${15 + (i * 15)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ¿Listo para conocer más sobre nosotros?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a ti y a tu familia 
              con nuestros servicios de cuidado domiciliario personalizado.
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
                    <span className="relative z-10">Contáctanos</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-100 to-blue-50"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="/team">
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
                    <span className="relative z-10">Conoce nuestro equipo</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div
              className="flex items-center justify-center space-x-8 mt-12 flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Shield, text: "Certificado" },
                { icon: Clock, text: "24/7" },
                { icon: Users, text: "+500 Familias" },
                { icon: Heart, text: "Con Amor" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}