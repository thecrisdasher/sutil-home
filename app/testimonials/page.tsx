"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Star, 
  Quote, 
  Heart, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  MessageCircle,
  Shield,
  Clock,
  Sparkles,
  CheckCircle,
  MapPin,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Type definitions
interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  service: string;
  duration: string;
}

interface VideoTestimonial {
  id: number;
  name: string;
  service: string;
  thumbnail: string;
  duration: string;
}

interface Stat {
  number: string;
  label: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    relation: "Hija de paciente",
    location: "Ciudad de México",
    rating: 5,
    text: "Elegir el cuidado domiciliario de Alivio Vital fue la mejor decisión que pudimos tomar para mi madre. Después de su cirugía de cadera, necesitaba atención especializada pero queríamos que estuviera en casa. La enfermera Ana fue increíble, no solo cuidó de mi madre médicamente, sino que también le brindó el apoyo emocional que necesitaba. Mi madre se recuperó mucho más rápido de lo esperado.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Cuidado Post-operatorio",
    duration: "3 meses"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    relation: "Esposo de paciente",
    location: "Guadalajara",
    rating: 5,
    text: "Mi esposa tiene diabetes y necesitaba cuidados especializados. El equipo de Alivio Vital no solo manejó perfectamente su medicación y monitoreo, sino que también nos educó a toda la familia sobre cómo apoyarla mejor. La diferencia en su calidad de vida ha sido notable. Ahora tiene más energía y se siente más segura.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Manejo de Diabetes",
    duration: "6 meses"
  },
  {
    id: 3,
    name: "Ana Martínez",
    relation: "Hija de paciente",
    location: "Monterrey",
    rating: 5,
    text: "Papá tiene Alzheimer y cuidarlo se había vuelto muy difícil para nuestra familia. El cuidador especializado que nos asignaron ha sido una bendición. No solo cuida de papá con mucha paciencia y cariño, sino que también nos ha dado técnicas para comunicarnos mejor con él. Papá está más tranquilo y nosotros podemos descansar sabiendo que está en buenas manos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Cuidado de Alzheimer",
    duration: "1 año"
  },
  {
    id: 4,
    name: "Roberto Silva",
    relation: "Paciente",
    location: "Puebla",
    rating: 5,
    text: "Después de mi accidente cerebrovascular, pensé que nunca volvería a ser independiente. El equipo de rehabilitación de Alivio Vital trabajó conmigo todos los días en casa. La fisioterapeuta Laura fue increíble, siempre motivándome y adaptando los ejercicios a mi progreso. Hoy puedo caminar nuevamente y he recuperado gran parte de mi movilidad.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Rehabilitación Neurológica",
    duration: "8 meses"
  },
  {
    id: 5,
    name: "Lucía Hernández",
    relation: "Esposa de paciente",
    location: "Tijuana",
    rating: 5,
    text: "Mi esposo necesitaba cuidados paliativos y queríamos que estuviera cómodo en casa. El equipo de Alivio Vital nos brindó no solo atención médica excepcional, sino también apoyo emocional a toda la familia. Nos ayudaron a crear momentos hermosos y significativos en sus últimos meses. Estaremos eternamente agradecidos por su compasión y profesionalismo.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Cuidados Paliativos",
    duration: "4 meses"
  },
  {
    id: 6,
    name: "Fernando López",
    relation: "Hijo de paciente",
    location: "Mérida",
    rating: 5,
    text: "Mamá necesitaba compañía y cuidados básicos después de que papá falleció. La cuidadora que nos asignaron se convirtió en parte de la familia. No solo la ayuda con sus medicamentos y comidas, sino que también la acompaña a sus citas médicas y le hace compañía. Mamá está mucho más animada y nosotros tenemos tranquilidad.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    service: "Cuidado de Compañía",
    duration: "2 años"
  }
];

const stats: Stat[] = [
  { number: "500+", label: "Familias Atendidas" },
  { number: "98%", label: "Satisfacción" },
  { number: "4.9/5", label: "Calificación Promedio" },
  { number: "95%", label: "Recomendaciones" }
];

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Familia Morales",
    service: "Cuidado Post-operatorio",
    thumbnail: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "2:30"
  },
  {
    id: 2,
    name: "Don Miguel",
    service: "Rehabilitación",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "3:15"
  },
  {
    id: 3,
    name: "Familia Jiménez",
    service: "Cuidado de Alzheimer",
    thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "4:20"
  }
];

// Enhanced floating particles
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 6,
      size: 1.5 + Math.random() * 3
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
            scale: [1, 2, 1],
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

// Enhanced stat card component
const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
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
        y: -8,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="text-center p-8 bg-gradient-to-br from-white via-beige-50/50 to-white rounded-3xl border border-beige-200/50 shadow-lg relative overflow-hidden backdrop-blur-sm">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Number with enhanced animation */}
        <motion.div 
          className="text-4xl md:text-5xl font-bold text-gradient mb-3 relative z-10"
          animate={isHovered ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 3, -3, 0] 
          } : {}}
          transition={{ duration: 0.6 }}
        >
          {stat.number}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-beige-400/60 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
        </motion.div>
        
        {/* Label */}
        <motion.div 
          className="text-neutral-dark/70 font-medium relative z-10 group-hover:text-neutral-dark transition-colors duration-300"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {stat.label}
        </motion.div>
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-beige-400/20 to-transparent rounded-bl-2xl rounded-tr-3xl" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
          animate={isHovered ? { x: [-100, 300] } : {}}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced testimonial card component
const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 80
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="bg-gradient-to-br from-white via-beige-50/30 to-white p-8 rounded-3xl border border-beige-200/50 hover:border-blue-serene/30 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
        {/* Background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-serene/3 to-beige-400/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Header with avatar and rating */}
        <div className="flex items-center space-x-4 mb-6 relative z-10">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-2xl object-cover border-3 border-beige-200 group-hover:border-blue-serene/50 transition-colors duration-300"
            />
            <motion.div
              className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-serene to-beige-400 rounded-full flex items-center justify-center"
              animate={isHovered ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360] 
              } : {}}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>
          
          <div className="flex-1">
            <div className="font-bold text-xl text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="text-sm text-neutral-dark/60 mb-2">
              {testimonial.relation}
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <motion.blockquote 
          className="text-neutral-dark/80 italic mb-6 line-clamp-4 leading-relaxed relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "{testimonial.text.substring(0, 180)}..."
        </motion.blockquote>
        
        {/* Footer */}
        <div className="flex items-center justify-between text-sm relative z-10">
          <motion.div
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-blue-serene font-medium border border-blue-serene/20"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-3 h-3 mr-1" />
            {testimonial.service}
          </motion.div>
          <div className="flex items-center text-neutral-dark/60">
            <MapPin className="w-3 h-3 mr-1" />
            {testimonial.location}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl rounded-tr-3xl" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-3xl"
          animate={isHovered ? { x: [-100, 400] } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced video testimonial component
const VideoTestimonialCard = ({ video, index }: { video: VideoTestimonial; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-xl group">
        <img
          src={video.thumbnail}
          alt={video.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"
        />
        
        {/* Play button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
            animate={isHovered ? {
              boxShadow: [
                "0 10px 30px rgba(0,0,0,0.2)",
                "0 20px 60px rgba(59, 130, 246, 0.3)",
                "0 10px 30px rgba(0,0,0,0.2)"
              ]
            } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            <div className="w-0 h-0 border-l-[16px] border-l-blue-serene border-y-[12px] border-y-transparent ml-1" />
          </motion.div>
        </motion.div>
        
        {/* Duration badge */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {video.duration}
        </div>
        
        {/* Content overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-1">{video.name}</h3>
          <p className="text-white/80 text-sm">{video.service}</p>
        </motion.div>
        
        {/* Decorative corner */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-beige-400/20 to-transparent rounded-br-2xl"
          animate={isHovered ? { 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Enhanced animation variants
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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        type: "spring" as const,
        stiffness: 80
      }
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
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
            rotate: [0, 90, 180, 270, 360],
            x: [-160, -120, -160],
            y: [-160, -200, -160],
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
            rotate: [0, -90, -180, -270, -360],
            x: [128, 160, 128],
            y: [128, 80, 128],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-${i % 2 === 0 ? 'blue-serene' : 'beige-400'}/30 rounded-full`}
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto space-y-10"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
            >
              <Heart className="w-4 h-4 mr-2" />
              Testimonios Reales
              <motion.div
                className=" "
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight"
            >
              Historias que{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                inspiran confianza
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-dark/70 leading-relaxed max-w-4xl mx-auto"
            >
              Conoce las experiencias reales de las familias que han confiado en 
              Alivio Vital para el cuidado de sus seres queridos.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center space-x-3"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.5 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Star className="w-7 h-7 text-yellow-400 fill-current" />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="ml-4 flex items-center space-x-4 text-lg font-semibold text-neutral-dark"
              >
                <span>4.9/5</span>
                <div className="w-1 h-6 bg-gradient-to-b from-blue-serene to-beige-400 rounded-full" />
                <span className="text-neutral-dark/60">500+ reseñas</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-3">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5d5b7' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
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
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
              Números que <span className="text-gradient">hablan por sí solos</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Testimonial Carousel */}
      <section className="py-24 bg-gradient-to-br from-beige-50 via-white to-blue-light/5 relative overflow-hidden">
        {/* Enhanced background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-serene/3 to-beige-400/3 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
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
              Testimonios <span className="text-gradient">destacados</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experiencias reales de familias que han transformado sus vidas 
              con nuestros servicios de cuidado domiciliario profesional.
            </motion.p>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              className="bg-gradient-to-br from-white via-beige-50/30 to-white rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden border border-beige-200/50"
            >
              {/* Background decorative effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-serene/2 to-beige-400/2 rounded-3xl"
                animate={{
                  opacity: [0.02, 0.05, 0.02],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative group">
                    <motion.img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-4 border-beige-200 group-hover:border-blue-serene/50 transition-all duration-500 shadow-xl"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-400 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Floating decoration */}
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-beige-400/60 rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
                
                <div className="flex-1 text-center lg:text-left space-y-8">
                  <motion.div 
                    className="flex items-center justify-center lg:justify-start space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.4 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.blockquote 
                    className="text-xl md:text-2xl text-neutral-dark/85 italic leading-relaxed font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.blockquote>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="font-bold text-2xl text-neutral-dark">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-lg text-neutral-dark/60">
                      {testimonials[currentTestimonial].relation} • {testimonials[currentTestimonial].location}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                      <motion.div
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        {testimonials[currentTestimonial].service}
                      </motion.div>
                      
                      <motion.div
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-beige-400/10 to-blue-serene/10 rounded-full text-sm font-medium text-beige-600 border border-beige-400/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {testimonials[currentTestimonial].duration}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-serene/10 to-transparent rounded-tr-3xl rounded-bl-3xl" />
            </motion.div>
            
            {/* Enhanced Navigation */}
            <div className="flex items-center justify-center mt-12 space-x-6">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-dark group-hover:text-blue-serene transition-colors z-10 relative" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-2xl"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-12 h-4 bg-gradient-to-r from-blue-serene to-beige-400'
                        : 'w-4 h-4 bg-neutral-dark/20 hover:bg-neutral-dark/40'
                    }`}
                  >
                    {index === currentTestimonial && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene rounded-full"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <ChevronRight className="w-6 h-6 text-neutral-dark group-hover:text-blue-serene transition-colors z-10 relative" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-2xl"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced All Testimonials Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-serene rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-24 h-24 border-2 border-beige-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-blue-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              Más <span className="text-gradient">testimonios</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cada historia es única, pero todas comparten algo en común: 
              la confianza en nuestro cuidado profesional y dedicado.
            </motion.p>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Video Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-light/3 via-beige-50/50 to-white relative overflow-hidden">
        {/* Enhanced background animation */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5d5b7' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Testimonios en <span className="text-gradient">video</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Escucha directamente de nuestras familias sobre su experiencia 
              transformadora con Alivio Vital Home Care.
            </motion.p>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videoTestimonials.map((video, index) => (
              <VideoTestimonialCard key={video.id} video={video} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Trust Indicators */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background effects */}
        <motion.div
          className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-serene/2 to-beige-400/2 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-beige-500/2 to-blue-light/2 rounded-full"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 8,
                  transition: { duration: 0.6 }
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Beneficios del cuidado domiciliario"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-serene/30 via-transparent to-transparent group-hover:from-blue-serene/20 transition-all duration-500"
                />
                
                {/* Enhanced overlay stats */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="text-white text-center bg-black/20 backdrop-blur-sm rounded-3xl p-8">
                    <motion.div
                      className="text-5xl font-bold mb-3"
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
                    <div className="text-xl">Disponibilidad</div>
                    <div className="text-sm opacity-80 mt-2">Siempre contigo</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced floating decorations */}
              <motion.div 
                className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-beige-400/80 to-beige-500/80 rounded-3xl rotate-12 opacity-80 shadow-lg"
                animate={{
                  rotate: [12, 25, 12],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-light/80 to-blue-serene/80 rounded-3xl -rotate-12 opacity-80 shadow-lg"
                animate={{
                  rotate: [-12, -25, -12],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Enhanced pulsing elements */}
              <motion.div
                className="absolute top-1/3 left-8 w-4 h-4 bg-beige-400/80 rounded-full shadow-lg"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/3 right-12 w-3 h-3 bg-blue-serene/80 rounded-full shadow-lg"
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div
                className="absolute top-2/3 left-1/4 w-2 h-2 bg-beige-500/80 rounded-full shadow-lg"
                animate={{
                  scale: [1, 3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Confianza que <span className="text-gradient">nos respalda</span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-neutral-dark/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Nuestros testimonios reflejan años de dedicación, profesionalismo 
                  y compromiso inquebrantable con la excelencia en el cuidado domiciliario.
                </motion.p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "500+ Familias Atendidas",
                    subtitle: "En toda la República Mexicana",
                    color: "from-blue-serene to-blue-light"
                  },
                  {
                    icon: Award,
                    title: "Certificaciones Profesionales",
                    subtitle: "Personal altamente calificado",
                    color: "from-beige-400 to-beige-500"
                  },
                  {
                    icon: Star,
                    title: "98% de Satisfacción",
                    subtitle: "Calificación promedio de 4.9/5",
                    color: "from-blue-serene to-beige-400"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 12, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className="flex items-center space-x-6 p-6 bg-gradient-to-r from-white via-beige-50/30 to-white rounded-3xl border border-beige-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-2xl"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-bold text-xl text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
                          {item.title}
                        </div>
                        <div className="text-neutral-dark/60 mt-1">{item.subtitle}</div>
                      </div>
                      
                      {/* Hover effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-serene/3 to-beige-400/3 rounded-3xl"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"
                        animate={{ x: [-100, 400] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 1.5
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-serene to-beige-500 text-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
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
          className="absolute top-16 left-16 w-24 h-24 border-2 border-white/20 rounded-3xl"
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
          className="absolute bottom-16 right-16 w-20 h-20 border-2 border-white/20 rounded-2xl"
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
        
        {/* Multiple floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold leading-tight"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ¿Listo para ser parte de nuestras 
              <br />
              <span className="text-beige-100">historias de éxito?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl opacity-90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Únete a las cientos de familias que han confiado en nosotros. 
              Contáctanos hoy para una consulta gratuita personalizada.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Button className="bg-white text-blue-serene hover:bg-beige-50 px-10 py-4 text-lg font-semibold relative overflow-hidden shadow-2xl rounded-2xl">
                  <Phone className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">Consulta Gratuita</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-100 to-blue-50 rounded-2xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-10 py-4 text-lg font-semibold relative overflow-hidden shadow-2xl rounded-2xl backdrop-blur-sm">
                  <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">WhatsApp</span>
                  <motion.div
                    className="absolute inset-0 bg-white rounded-2xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Shield, text: "Certificado" },
                { icon: Clock, text: "24/7" },
                { icon: Users, text: "+500 Familias" },
                { icon: Star, text: "4.9★ Rating" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.text}</span>
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