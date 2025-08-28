"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useCallback } from "react";
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
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CareerForm } from "@/components/forms/career-form";
import Link from "next/link";

// Definición de tipos
interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Constantes movidas fuera del componente para evitar recreación
const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'enfermera-registrada',
    title: "Enfermera/o Registrada/o",
    department: "Cuidados Clínicos",
    type: "Tiempo Completo",
    location: "Domicilio del Paciente",
    description: "Buscamos enfermeras registradas con experiencia en cuidados domiciliarios para brindar atención médica especializada.",
    requirements: ["Licencia de enfermería vigente", "2+ años de experiencia", "Disponibilidad de horarios"],
    benefits: ["Salario competitivo", "Capacitación continua", "Flexibilidad horaria"]
  },
  {
    id: 'fisioterapeuta',
    title: "Fisioterapeuta",
    department: "Rehabilitación",
    type: "Medio Tiempo / Completo",
    location: "Domicilio del Paciente",
    description: "Profesional en fisioterapia para programas de rehabilitación y recuperación en el hogar del paciente.",
    requirements: ["Título en Fisioterapia", "Experiencia en rehabilitación", "Vehículo propio"],
    benefits: ["Horarios flexibles", "Desarrollo profesional", "Equipo de trabajo"]
  },
  {
    id: 'cuidador-profesional',
    title: "Cuidador/a Profesional",
    department: "Cuidados Personales",
    type: "Turnos Rotativos",
    location: "Domicilio del Paciente",
    description: "Cuidadores profesionales para acompañamiento y asistencia en actividades de la vida diaria.",
    requirements: ["Certificación en cuidados", "Experiencia con adultos mayores", "Paciencia y empatía"],
    benefits: ["Capacitación gratuita", "Ambiente familiar", "Crecimiento profesional"]
  },
  {
    id: 'psicologo-clinico',
    title: "Psicólogo/a Clínico/a",
    department: "Salud Mental",
    type: "Por Horas",
    location: "Domicilio del Paciente",
    description: "Psicólogo clínico para apoyo emocional y terapia a pacientes y familias en situaciones de cuidado.",
    requirements: ["Título en Psicología", "Especialización clínica", "Experiencia en salud"],
    benefits: ["Honorarios competitivos", "Autonomía profesional", "Casos diversos"]
  }
];

const STATS: Stat[] = [
  { number: "15+", label: "Posiciones Disponibles" },
  { number: "50+", label: "Profesionales en Nuestro Equipo" },
  { number: "95%", label: "Satisfacción Laboral" },
  { number: "24/7", label: "Apoyo y Capacitación" }
];

const VALUES: Value[] = [
  {
    icon: Heart,
    title: "Propósito Significativo",
    description: "Forma parte de una misión que transforma vidas y brinda esperanza a familias."
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Profesional",
    description: "Oportunidades de desarrollo, capacitación continua y avance en tu carrera."
  },
  {
    icon: Shield,
    title: "Estabilidad Laboral",
    description: "Beneficios completos, salarios competitivos y seguridad en el empleo."
  },
  {
    icon: Coffee,
    title: "Ambiente Familiar",
    description: "Únete a un equipo que valora el equilibrio vida-trabajo y el bienestar."
  }
];

// Variantes de animación optimizadas y reutilizables
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

// Componente optimizado para las estadísticas
interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => (
  <motion.div
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200"
  >
    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 hover:scale-110 transition-transform duration-300">
      {stat.number}
    </div>
    <div className="text-neutral-dark/70 font-medium">
      {stat.label}
    </div>
  </motion.div>
);

// Componente optimizado para las posiciones de trabajo
interface JobPositionCardProps {
  position: JobPosition;
  index: number;
}

const JobPositionCard: React.FC<JobPositionCardProps> = ({ position, index }) => {
  const handleApplyClick = useCallback(() => {
    document.getElementById('aplicar')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group p-8"
    >
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-blue-serene/10 text-blue-serene text-sm rounded-full font-medium">
              {position.department}
            </span>
            <span className="px-3 py-1 bg-beige-400/10 text-beige-500 text-sm rounded-full font-medium">
              {position.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-neutral-dark mb-2">
            {position.title}
          </h3>
          <p className="text-sm text-neutral-dark/60 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {position.location}
          </p>
        </div>
        
        <p className="text-neutral-dark/70 leading-relaxed">
          {position.description}
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-neutral-dark mb-2">Requisitos:</h4>
            <ul className="space-y-1">
              {position.requirements.map((req: string, reqIndex: number) => (
                <li key={reqIndex} className="text-sm text-neutral-dark/70 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-neutral-dark mb-2">Beneficios:</h4>
            <ul className="space-y-1">
              {position.benefits.map((benefit: string, benefitIndex: number) => (
                <li key={benefitIndex} className="text-sm text-neutral-dark/70 flex items-start gap-2">
                  <Star className="w-4 h-4 text-beige-500 mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button 
          onClick={handleApplyClick}
          className="w-full btn-primary group-hover:scale-105 transition-transform"
        >
          Aplicar Ahora
        </Button>
      </div>
    </motion.div>
  );
};

// Componente optimizado para los valores
interface ValueCardProps {
  value: Value;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const Icon = value.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center space-y-4 p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200 hover:shadow-xl hover:scale-[1.03] hover:border-blue-serene/30 transition-all duration-300 cursor-default"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center mx-auto hover:rotate-12 hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-neutral-dark">{value.title}</h3>
      <p className="text-neutral-dark/70">{value.description}</p>
    </motion.div>
  );
};

export default function CareersPage() {
  // Optimización del useEffect con callback memoizado
  const updateMetadata = useCallback(() => {
    document.title = "Trabaja con Nosotros - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Únete a nuestro equipo de profesionales en cuidado domiciliario. Oportunidades de carrera en enfermería, fisioterapia, cuidados y más.');
    }
  }, []);

  useEffect(() => {
    updateMetadata();
  }, [updateMetadata]);

  // Handlers memoizados para evitar recreación
  const handleViewPositions = useCallback(() => {
    document.getElementById('aplicar')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const whatsappUrl = useMemo(() => 
    "https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20equipo%20de%20Alivio%20Vital%20Home%20Care.",
    []
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-beige-500/10 to-blue-light/10 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20">
              <Briefcase className="w-4 h-4 mr-2" />
              Trabaja con Nosotros
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Únete a nuestro <span className="text-gradient hover:bg-gradient-to-r hover:from-blue-serene hover:via-beige-400 hover:to-blue-light hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">equipo</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Forma parte de una organización que transforma vidas. Buscamos profesionales 
              apasionados por el cuidado domiciliario y comprometidos con la excelencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleViewPositions} className="btn-primary">
                Ver Posiciones
              </Button>
              <Link href="/about">
                <Button className="btn-secondary">
                  Conoce la Empresa
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <StatCard key={`stat-${index}`} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Posiciones <span className="text-gradient hover:bg-gradient-to-r hover:from-beige-500 hover:via-blue-serene hover:to-beige-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">disponibles</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Descubre las oportunidades de carrera que tenemos para ti. 
              Únete a un equipo que marca la diferencia en la vida de las personas.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {JOB_POSITIONS.map((position, index) => (
              <JobPositionCard key={position.id} position={position} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Nuestros <span className="text-gradient hover:bg-gradient-to-r hover:from-blue-light hover:via-beige-500 hover:to-blue-serene hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">valores</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen la calidad 
              de nuestro cuidado.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <ValueCard key={`value-${index}`} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-gradient-to-br from-blue-light/5 to-beige-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Certificaciones y <span className="text-gradient hover:bg-gradient-to-r hover:from-blue-serene hover:via-beige-400 hover:to-blue-light hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">capacitación continua</span>
                </h2>
                <p className="text-lg text-neutral-dark/70">
                  Nuestro equipo mantiene las más altas credenciales profesionales 
                  y se capacita constantemente para brindar el mejor cuidado.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-blue-light rounded-xl flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Certificaciones Profesionales</h3>
                    <p className="text-neutral-dark/70">Todos nuestros profesionales cuentan con certificaciones vigentes y reconocidas en sus áreas de especialización.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-beige-500 to-beige-400 rounded-xl flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Capacitación Continua</h3>
                    <p className="text-neutral-dark/70">Participamos regularmente en programas de educación continua para mantenernos actualizados con las mejores prácticas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-light to-beige-400 rounded-xl flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Experiencia Comprobada</h3>
                    <p className="text-neutral-dark/70">Nuestro equipo cuenta con años de experiencia en cuidado domiciliario y atención médica especializada.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipo de profesionales en capacitación"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent group-hover:from-blue-serene/30 transition-all duration-300"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl rotate-12 opacity-80 hover:rotate-45 hover:scale-110 transition-all duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-light to-blue-serene rounded-xl -rotate-12 opacity-80 hover:-rotate-45 hover:scale-110 transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="aplicar" className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Aplica <span className="text-gradient hover:bg-gradient-to-r hover:from-beige-400 hover:via-blue-serene hover:to-beige-500 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">ahora</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo pronto.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <CareerForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-serene to-beige-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Quieres conocer más sobre nuestro equipo?
            </h2>
            <p className="text-xl opacity-90">
              Contáctanos para conocer más sobre nuestros profesionales y 
              cómo pueden ayudarte a ti y a tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  Contáctanos
                </Button>
              </Link>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-8 py-3">
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}