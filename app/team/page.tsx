"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { 
  Heart, 
  Stethoscope, 
  Award, 
  GraduationCap,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Shield,
  Coffee,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CareerForm } from "@/components/forms/career-form";
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

interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  color: string;
  image: string;
}

interface Stat {
  number: string;
  label: string;
  icon: any;
  color: string;
}

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  features: string[];
}

// Enhanced job positions with more visual elements
const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'enfermera-registrada',
    title: "Enfermera/o Registrada/o",
    department: "Cuidados Clínicos",
    type: "Tiempo Completo",
    location: "Domicilio del Paciente",
    description: "Únete a nuestro equipo de enfermeras especializadas en cuidados domiciliarios. Brinda atención médica de calidad en un ambiente familiar y reconfortante.",
    requirements: ["Licencia de enfermería vigente", "2+ años de experiencia clínica", "Disponibilidad de horarios flexibles", "Vehículo propio", "Excelente comunicación"],
    benefits: ["Salario competitivo $3,500-4,500", "Capacitación continua especializada", "Flexibilidad horaria total", "Seguro médico completo", "Bonos por desempeño"],
    color: "from-blue-serene to-blue-light",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'fisioterapeuta',
    title: "Fisioterapeuta",
    department: "Rehabilitación",
    type: "Medio Tiempo / Completo",
    location: "Domicilio del Paciente",
    description: "Especialista en rehabilitación para diseñar y ejecutar programas personalizados de recuperación en el hogar del paciente.",
    requirements: ["Título en Fisioterapia", "Experiencia en rehabilitación domiciliaria", "Vehículo propio", "Equipos de trabajo propios", "Enfoque humanizado"],
    benefits: ["Horarios 100% flexibles", "Desarrollo profesional continuo", "Equipo de trabajo incluido", "Autonomía en tratamientos", "Casos diversos y desafiantes"],
    color: "from-beige-400 to-beige-500",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'cuidador-profesional',
    title: "Cuidador/a Profesional",
    description: "Acompañantes profesionales para brindar cuidados personales y apoyo emocional a pacientes y sus familias.",
    department: "Cuidados Personales",
    type: "Turnos Rotativos",
    location: "Domicilio del Paciente",
    requirements: ["Certificación en cuidados", "Experiencia con adultos mayores", "Paciencia y empatía excepcionales", "Referencias verificables", "Disponibilidad nocturna"],
    benefits: ["Capacitación gratuita certificada", "Ambiente de trabajo familiar", "Crecimiento profesional garantizado", "Turnos bien remunerados", "Apoyo psicológico incluido"],
    color: "from-blue-serene to-beige-400",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'psicologo-clinico',
    title: "Psicólogo/a Clínico/a",
    department: "Salud Mental",
    type: "Por Horas",
    location: "Domicilio del Paciente",
    description: "Profesional en salud mental para brindar apoyo emocional y terapia especializada a pacientes y familias en procesos de cuidado.",
    requirements: ["Título en Psicología Clínica", "Especialización en salud", "Experiencia en terapia domiciliaria", "Enfoque sistémico familiar", "Certificaciones vigentes"],
    benefits: ["Honorarios competitivos $80-120/hora", "Autonomía profesional total", "Casos clínicos diversos", "Formación continua incluida", "Red de interconsulta"],
    color: "from-beige-500 to-blue-light",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const ENHANCED_STATS: Stat[] = [
  { number: "15+", label: "Posiciones Abiertas", icon: Briefcase, color: "from-blue-serene to-blue-light" },
  { number: "50+", label: "Profesionales Activos", icon: Users, color: "from-beige-400 to-beige-500" },
  { number: "95%", label: "Satisfacción Laboral", icon: Heart, color: "from-blue-serene to-beige-400" },
  { number: "24/7", label: "Apoyo Continuo", icon: Clock, color: "from-beige-500 to-blue-light" }
];

const ENHANCED_VALUES: Value[] = [
  {
    icon: Heart,
    title: "Propósito Significativo",
    description: "Forma parte de una misión que transforma vidas y brinda esperanza a familias completas.",
    color: "from-blue-serene to-blue-light",
    features: ["Impacto real en vidas", "Reconocimiento social", "Propósito diario"]
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Acelerado",
    description: "Oportunidades únicas de desarrollo profesional con capacitación continua y certificaciones internacionales.",
    color: "from-beige-400 to-beige-500",
    features: ["Capacitación internacional", "Mentorías personalizadas", "Promociones internas"]
  },
  {
    icon: Shield,
    title: "Estabilidad Premium",
    description: "Beneficios integrales, salarios competitivos y la seguridad de pertenecer a una empresa líder.",
    color: "from-blue-light to-beige-400",
    features: ["Salarios por encima del mercado", "Seguro médico familiar", "Estabilidad garantizada"]
  },
  {
    icon: Coffee,
    title: "Ambiente Excepcional",
    description: "Únete a un equipo que valora el equilibrio vida-trabajo y fomenta relaciones auténticas.",
    color: "from-beige-500 to-blue-serene",
    features: ["Flexibilidad total", "Team building regular", "Cultura de bienestar"]
  }
];

// Enhanced floating particles with healthcare theme
const MedicalFloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 6,
      size: 3 + Math.random() * 5
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
            opacity: [0, 1, 0],
            scale: [1, 1.8, 1],
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
interface EnhancedStatCardProps {
  stat: Stat;
  index: number;
}

const EnhancedStatCard: React.FC<EnhancedStatCardProps> = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="text-center p-8 bg-gradient-to-br from-white via-beige-50/50 to-white rounded-3xl border border-beige-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
        {/* Background gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Icon container */}
        <motion.div
          className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-lg`}
          whileHover={{ 
            scale: 1.2, 
            rotate: 10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="w-10 h-10 text-white relative z-10" />
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={isHovered ? { scale: [1, 2], opacity: [0, 0.5, 0] } : {}}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Number with enhanced animation */}
        <motion.div 
          className="text-4xl md:text-5xl font-bold text-gradient mb-3 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {stat.number}
          <motion.div
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          />
        </motion.div>
        
        <div className="text-neutral-dark/70 font-semibold text-lg">
          {stat.label}
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={isHovered ? { x: [-100, 400] } : {}}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced job position card
interface EnhancedJobCardProps {
  position: JobPosition;
  index: number;
}

const EnhancedJobCard: React.FC<EnhancedJobCardProps> = ({ position, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleApplyClick = useCallback(() => {
    document.getElementById('aplicar')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 80,
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
        type: "spring",
        stiffness: 80
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      rotateY: 3,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-gray-100">
        {/* Enhanced gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}
        />
        
        {/* Image header */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={position.image}
            alt={position.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}
          />
          
          {/* Department badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={`px-4 py-2 bg-gradient-to-r ${position.color} text-white text-sm rounded-full font-semibold shadow-lg backdrop-blur-sm`}>
              {position.department}
            </span>
          </motion.div>
          
          {/* Type badge */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm rounded-full font-medium border border-white/30">
              {position.type}
            </span>
          </motion.div>
          
          {/* Overlay title */}
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {position.title}
            </h3>
            <p className="text-white/90 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {position.location}
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 relative z-10">
          <motion.p 
            className="text-neutral-dark/70 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {position.description}
          </motion.p>
          
          <div className="space-y-6">
            {/* Requirements */}
            <div>
              <motion.h4 
                className="text-lg font-bold text-neutral-dark mb-4 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Target className="w-5 h-5 mr-2 text-blue-serene" />
                Requisitos:
              </motion.h4>
              <div className="space-y-3">
                {position.requirements.map((req: string, reqIndex: number) => (
                  <motion.div
                    key={reqIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + reqIndex * 0.1 
                    }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-serene/5 hover:to-transparent transition-all duration-300 group/item"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-serene mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <span className="text-neutral-dark/80 group-hover/item:text-neutral-dark transition-colors font-medium">
                      {req}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div>
              <motion.h4 
                className="text-lg font-bold text-neutral-dark mb-4 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 mr-2 text-beige-400" />
                Beneficios:
              </motion.h4>
              <div className="space-y-3">
                {position.benefits.map((benefit: string, benefitIndex: number) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + benefitIndex * 0.1 
                    }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-beige-400/5 hover:to-transparent transition-all duration-300 group/item"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Star className="w-5 h-5 text-beige-500 mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <span className="text-neutral-dark/80 group-hover/item:text-neutral-dark transition-colors font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced apply button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={handleApplyClick}
                className="w-full btn-primary relative overflow-hidden group shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Aplicar Ahora
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          animate={isHovered ? { x: [-100, 500] } : {}}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced value card component
interface EnhancedValueCardProps {
  value: Value;
  index: number;
}

const EnhancedValueCard: React.FC<EnhancedValueCardProps> = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = value.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -12, 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.4, type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="h-full bg-gradient-to-br from-white to-beige-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-beige-200/50 relative overflow-hidden transition-all duration-500">
        {/* Background gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}
        />
        
        <div className="relative z-10 space-y-6 h-full flex flex-col">
          {/* Enhanced icon */}
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg`}
            whileHover={{ 
              scale: 1.2, 
              rotate: 12,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="w-10 h-10 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={isHovered ? { 
                scale: [1, 1.5, 1],
                opacity: [0, 0.5, 0]
              } : {}}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          {/* Content */}
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-bold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
              {value.title}
            </h3>
            
            <p className="text-neutral-dark/70 leading-relaxed">
              {value.description}
            </p>
            
            {/* Features list */}
            <div className="space-y-2">
              {value.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + featureIndex * 0.1 
                  }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-2 text-sm text-neutral-dark/60 group/feature"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"></div>
                  </motion.div>
                  <span className="group-hover/feature:text-neutral-dark/80 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl" />
        
        {/* Enhanced shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          animate={isHovered ? { x: [-100, 400] } : {}}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

export default function EnhancedCareersPage() {
  const [activeSection, setActiveSection] = useState(0);

  // Enhanced metadata and intersection observer
  useEffect(() => {
    document.title = "Trabaja con Nosotros - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Únete a nuestro equipo de profesionales en cuidado domiciliario. Oportunidades de carrera en enfermería, fisioterapia, cuidados y más.');
    }

    // Enhanced intersection observer
    const observers: IntersectionObserver[] = [];
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Memoized handlers
  const handleViewPositions = useCallback(() => {
    document.getElementById('posiciones')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const whatsappUrl = useMemo(() => 
    "https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20las%20oportunidades%20de%20trabajo%20en%20Alivio%20Vital%20Home%20Care.",
    []
  );

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
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <MedicalFloatingParticles />
        
        {/* Enhanced geometric shapes with healthcare theme */}
        <motion.div 
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-serene/8 to-beige-400/8 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
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
            rotate: [0, -180, -360],
            x: [128, 150, 128],
            y: [128, 100, 128],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Medical theme floating elements */}
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 bg-blue-serene/15 rounded-2xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-8 h-8 bg-beige-400/25 rounded-xl"
          animate={{
            x: [0, 20, 0],
            rotate: [0, -15, 0],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-lg font-semibold text-blue-serene border border-blue-serene/20 backdrop-blur-sm relative overflow-hidden group shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Briefcase className="w-5 h-5 mr-3" />
              </motion.div>
              Únete a Nuestro Equipo
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark leading-tight"
            >
              Transforma{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                vidas
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-serene via-beige-400 to-blue-light rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
              </motion.span>
              {" "}con propósito
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-dark/70 leading-relaxed max-w-4xl mx-auto"
            >
              Forma parte de una organización líder en cuidado domiciliario. 
              Buscamos profesionales apasionados que quieran hacer la diferencia 
              en la vida de las personas cada día.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button onClick={handleViewPositions} className="btn-primary relative overflow-hidden group shadow-xl px-10 py-4 text-lg">
                  <span className="relative z-10 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Ver Oportunidades
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-secondary relative overflow-hidden group shadow-xl px-10 py-4 text-lg">
                    <span className="relative z-10 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Conoce la Empresa
                    </span>
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

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237fb3d3' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Nuestros <span className="text-gradient">números</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cifras que reflejan nuestro compromiso con la excelencia 
              y el crecimiento profesional de nuestro equipo.
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ENHANCED_STATS.map((stat, index) => (
              <EnhancedStatCard key={`stat-${index}`} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Job Positions */}
      <section id="posiciones" className="py-24 bg-gradient-to-br from-beige-50 to-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-serene/4 to-beige-400/4 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 120, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-beige-500/4 to-blue-light/4 rounded-full"
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, -120, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Oportunidades <span className="text-gradient">profesionales</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre posiciones que van más allá del trabajo tradicional. 
              Únete a un equipo que marca la diferencia en la vida de las personas 
              y crece profesionalmente en un ambiente de excelencia.
            </motion.p>
            
            {/* Enhanced decorative elements */}
            <motion.div
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-3 h-3 bg-blue-serene/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-2 h-2 bg-beige-400/80 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="w-4 h-4 bg-blue-light/50 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {JOB_POSITIONS.map((position, index) => (
              <EnhancedJobCard key={position.id} position={position} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-serene rounded-full"></div>
          <div className="absolute top-60 right-32 w-32 h-32 border-2 border-beige-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-blue-light rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-beige-500 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Por qué elegir <span className="text-gradient">trabajar con nosotros</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre los valores y beneficios que hacen de Alivio Vital 
              el lugar ideal para desarrollar tu carrera en el cuidado de la salud.
            </motion.p>
            
            {/* Enhanced decorative line */}
            <motion.div
              className="w-40 h-2 bg-gradient-to-r from-blue-serene via-beige-400 to-blue-light mx-auto mt-8 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ENHANCED_VALUES.map((value, index) => (
              <EnhancedValueCard key={`value-${index}`} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Certifications & Training */}
      <section className="py-24 bg-gradient-to-br from-blue-light/5 to-beige-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(127, 179, 213, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(229, 213, 183, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(127, 179, 213, 0.05) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

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
                  className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Certificaciones y{" "}
                  <motion.span 
                    className="text-gradient relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    capacitación
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-serene to-beige-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </motion.span>
                  {" "}continua
                </motion.h2>
                <motion.p 
                  className="text-xl text-neutral-dark/70 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Nuestro equipo mantiene las más altas credenciales profesionales 
                  y se capacita constantemente para brindar el mejor cuidado posible.
                </motion.p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: GraduationCap,
                    title: "Certificaciones Internacionales",
                    description: "Todos nuestros profesionales cuentan con certificaciones vigentes y reconocidas internacionalmente en sus áreas de especialización.",
                    color: "from-blue-serene to-blue-light"
                  },
                  {
                    icon: Award,
                    title: "Educación Continua Avanzada",
                    description: "Participamos en programas de educación continua de las mejores instituciones para mantenernos a la vanguardia.",
                    color: "from-beige-500 to-beige-400"
                  },
                  {
                    icon: Stethoscope,
                    title: "Experiencia Comprobada",
                    description: "Nuestro equipo cuenta con años de experiencia especializada en cuidado domiciliario y atención médica de alta calidad.",
                    color: "from-blue-light to-beige-400"
                  }
                ].map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -50, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.3 + itemIndex * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-beige-50/30 rounded-2xl border border-beige-200/50 shadow-sm hover:shadow-lg transition-all duration-400 group relative overflow-hidden"
                    >
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 12,
                          boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <ItemIcon className="w-8 h-8 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: itemIndex * 0.5
                          }}
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-blue-serene transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-neutral-dark/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Hover background effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl`}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: -5,
                  transition: { duration: 0.6 }
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipo de profesionales en capacitación"
                  width={700}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={false}
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-serene/30 via-transparent to-transparent group-hover:from-blue-serene/40 transition-all duration-300"
                />
                
                {/* Enhanced overlay content */}
                <motion.div
                  className="absolute inset-0 flex items-end p-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-white">
                    <h4 className="text-2xl font-bold mb-3">Capacitación Continua</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-current" />
                        <span>Certificación Internacional</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-beige-400 to-beige-500 rounded-3xl rotate-12 opacity-80"
                animate={{
                  rotate: [12, 28, 12],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-light to-blue-serene rounded-3xl -rotate-12 opacity-80"
                animate={{
                  rotate: [-12, -28, -12],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              
              {/* Enhanced floating accents */}
              <motion.div
                className="absolute top-1/4 left-8 w-6 h-6 bg-beige-400/60 rounded-xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 45, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/3 right-12 w-4 h-4 bg-blue-serene/80 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Form Section */}
      <section id="aplicar" className="py-24 bg-gradient-to-br from-beige-50 via-white to-blue-light/5 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237fb3d3' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-2xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-blue-serene font-semibold mb-8 backdrop-blur-sm border border-blue-serene/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 mr-2" />
              </motion.div>
              Proceso de Aplicación
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comienza tu{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                carrera
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-serene via-beige-400 to-blue-light rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </motion.span>
              {" "}hoy
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Completa el formulario y adjunta tu CV. Nuestro equipo de recursos humanos 
              se pondrá en contacto contigo en menos de 48 horas.
            </motion.p>
            
            {/* Process steps */}
            <motion.div
              className="flex justify-center space-x-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "1", text: "Aplica" },
                { number: "2", text: "Entrevista" },
                { number: "3", text: "Integración" }
              ].map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  className="flex flex-col items-center space-y-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(127, 179, 213, 0.3)",
                        "0 8px 30px rgba(229, 213, 183, 0.4)",
                        "0 4px 20px rgba(127, 179, 213, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: stepIndex * 0.5
                    }}
                  >
                    {step.number}
                  </motion.div>
                  <span className="text-sm font-medium text-neutral-dark/70">
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-beige-200/50 relative overflow-hidden">
              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-serene/5 to-transparent rounded-bl-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <CareerForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-serene via-beige-400 to-blue-light text-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%)",
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
          className="absolute top-16 left-16 w-24 h-24 border-2 border-white/25 rounded-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-16 right-16 w-20 h-20 border-2 border-white/25 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Multiple pulsing elements */}
        {[
          { top: "20%", left: "15%", delay: 0 },
          { top: "60%", right: "20%", delay: 1 },
          { bottom: "30%", left: "25%", delay: 2 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/40 rounded-full"
            style={pos}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pos.delay
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ¿Listo para unirte a una misión que transforma vidas?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.95 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contáctanos para conocer más sobre nuestros profesionales y 
              descubrir cómo puedes formar parte de nuestro equipo excepcional.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button className="bg-white text-blue-serene hover:bg-white/95 px-12 py-5 text-lg font-bold relative overflow-hidden shadow-2xl">
                    <span className="relative z-10 flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      Contáctanos Ahora
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-100 to-blue-50"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                  <Button className="border-3 border-white text-white hover:bg-white hover:text-blue-serene px-12 py-5 text-lg font-bold relative overflow-hidden shadow-2xl">
                    <span className="relative z-10 flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      WhatsApp Directo
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Shield, text: "Empresa Certificada", delay: 0 },
                { icon: Clock, text: "Respuesta 24-48h", delay: 0.2 },
                { icon: Users, text: "+500 Familias Atendidas", delay: 0.4 },
                { icon: Award, text: "Reconocimiento Nacional", delay: 0.6 }
              ].map((item, itemIndex) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + item.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ItemIcon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call-to-action emphasis */}
            <motion.div
              className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4">¿Tienes preguntas sobre el proceso?</h3>
              <p className="text-lg opacity-90 mb-6">
                Nuestro equipo de recursos humanos está disponible para resolver 
                todas tus dudas sobre posiciones, beneficios y oportunidades de crecimiento.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Llamadas directas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Respuesta rápida</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}