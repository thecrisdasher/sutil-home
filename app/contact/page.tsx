"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Heart,
  Shield,
  Users,
  Star,
  Calendar,
  Headphones,
  Sparkles,
  UserCheck,
  Activity
} from "lucide-react";

// Type definitions
interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface ContactInfo {
  icon: any;
  title: string;
  value: string;
  description: string;
  action: string;
  color: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface EmergencyStep {
  step: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Teléfono Principal",
    value: "+52 55 1234 5678",
    description: "Disponible 24/7 para emergencias",
    action: "tel:+525512345678",
    color: "from-blue-serene to-blue-light"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+52 55 1234 5678",
    description: "Respuesta inmediata",
    action: "https://wa.me/525512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Alivio%20Vital.",
    color: "from-beige-400 to-beige-500"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@aliviovital.com",
    description: "Respuesta en 24 horas",
    action: "mailto:info@aliviovital.com",
    color: "from-blue-light to-beige-400"
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    value: "Ciudad de México",
    description: "Cobertura nacional",
    action: "#ubicacion",
    color: "from-beige-500 to-blue-serene"
  }
];

const serviceAreas = [
  "Ciudad de México",
  "Guadalajara", 
  "Monterrey",
  "Puebla",
  "Tijuana",
  "León",
  "Juárez",
  "Zapopan",
  "Mérida",
  "San Luis Potosí",
  "Aguascalientes",
  "Hermosillo"
];

const faqs: FAQ[] = [
  {
    question: "¿Cómo puedo solicitar una consulta gratuita?",
    answer: "Puedes contactarnos por teléfono, WhatsApp o completar nuestro formulario. Un especialista se comunicará contigo en menos de 2 horas para programar una evaluación gratuita en tu domicilio."
  },
  {
    question: "¿Qué incluye la consulta inicial?",
    answer: "La consulta incluye evaluación médica del paciente, análisis de necesidades familiares, explicación detallada de servicios, plan de cuidado personalizado y cotización sin compromiso."
  },
  {
    question: "¿Tienen cobertura las 24 horas?",
    answer: "Sí, ofrecemos servicios las 24 horas del día, los 7 días de la semana. Tenemos personal disponible para emergencias y cuidados continuos según las necesidades del paciente."
  },
  {
    question: "¿En qué ciudades brindan servicio?",
    answer: "Tenemos cobertura en las principales ciudades de México. Contáctanos para confirmar disponibilidad en tu área específica."
  },
  {
    question: "¿Cuánto tiempo toma iniciar el servicio?",
    answer: "Después de la evaluación inicial, podemos comenzar el servicio en 24-48 horas, dependiendo del tipo de cuidado requerido y la disponibilidad de nuestro personal especializado."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y débito. También ofrecemos planes de pago flexibles adaptados a las necesidades de cada familia."
  }
];

const emergencySteps: EmergencyStep[] = [
  {
    step: "1",
    title: "Llama Inmediatamente",
    description: "Contacta nuestro número de emergencia 24/7",
    icon: Phone,
    color: "from-red-500 to-red-600"
  },
  {
    step: "2",
    title: "Evaluación Rápida",
    description: "Nuestro equipo evalúa la situación por teléfono",
    icon: Headphones,
    color: "from-orange-500 to-red-500"
  },
  {
    step: "3",
    title: "Respuesta Inmediata",
    description: "Personal especializado se dirige a tu domicilio",
    icon: Users,
    color: "from-red-600 to-orange-500"
  },
  {
    step: "4",
    title: "Atención Profesional",
    description: "Brindamos la atención médica necesaria",
    icon: Heart,
    color: "from-red-500 to-red-700"
  }
];

// Enhanced floating particles animation
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
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

// Enhanced Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-br from-blue-serene to-beige-400 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-neutral-dark mb-2">¡Mensaje Enviado!</h3>
          <p className="text-neutral-dark/70">Nos comunicaremos contigo en menos de 2 horas.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-neutral-dark">
            Nombre Completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-beige-200 focus:border-blue-serene focus:ring-4 focus:ring-blue-serene/10 transition-all duration-300"
            placeholder="Tu nombre completo"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-neutral-dark">
            Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-beige-200 focus:border-blue-serene focus:ring-4 focus:ring-blue-serene/10 transition-all duration-300"
            placeholder="+52 55 1234 5678"
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-neutral-dark">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-beige-200 focus:border-blue-serene focus:ring-4 focus:ring-blue-serene/10 transition-all duration-300"
          placeholder="tu@email.com"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-neutral-dark">
          Servicio de Interés
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-beige-200 focus:border-blue-serene focus:ring-4 focus:ring-blue-serene/10 transition-all duration-300"
        >
          <option value="">Selecciona un servicio</option>
          <option value="enfermeria">Cuidado de Enfermería</option>
          <option value="postoperatorio">Cuidado Post-Operatorio</option>
          <option value="rehabilitacion">Rehabilitación y Fisioterapia</option>
          <option value="acompanamiento">Acompañamiento y Cuidado Personal</option>
          <option value="otro">Otro servicio</option>
        </select>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-neutral-dark">
          Mensaje
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-beige-200 focus:border-blue-serene focus:ring-4 focus:ring-blue-serene/10 transition-all duration-300 resize-none"
          placeholder="Cuéntanos sobre tus necesidades específicas..."
        />
      </motion.div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-serene to-beige-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
              />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensaje
            </>
          )}
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </form>
  );
};

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Contacto - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contáctanos para una consulta gratuita. Estamos disponibles 24/7 para brindarte información sobre nuestros servicios de cuidado domiciliario.');
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
        staggerChildren: 0.15,
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
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <FloatingParticles />
        
        {/* Enhanced animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
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
              <Phone className="w-4 h-4 mr-2" />
              Contacto Directo
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
              Estamos aquí para{" "}
              <motion.span 
                className="text-gradient relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ayudarte
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
              Contáctanos para una consulta gratuita y descubre cómo podemos 
              mejorar la calidad de vida de tu ser querido con nuestro cuidado domiciliario profesional.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="tel:+525512345678"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden group"
              >
                <button className="btn-primary relative z-10 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </button>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-beige-400 to-blue-serene"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a 
                href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20los%20servicios%20de%20Alivio%20Vital."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden group"
              >
                <button className="btn-secondary relative z-10 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </button>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-serene to-beige-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
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
              Múltiples formas de <span className="text-gradient">contacto</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elige la forma que más te convenga para comunicarte con nosotros. 
              Estamos disponibles 24/7 para atenderte.
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
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-3xl shadow-xl border border-beige-200 hover:shadow-2xl transition-all duration-500 text-center space-y-6 group cursor-pointer relative overflow-hidden"
                >
                  {/* Background gradient animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 relative overflow-hidden shadow-lg`}
                    whileHover={{ 
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                  >
                    <Icon className="w-10 h-10 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={isHovered ? { 
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0]
                      } : {}}
                      transition={{ 
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-blue-serene transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <div className="text-lg font-semibold text-blue-serene mb-2">{contact.value}</div>
                    <div className="text-sm text-neutral-dark/60 mb-4">{contact.description}</div>
                    
                    <motion.a 
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-blue-serene hover:text-beige-500 transition-colors font-medium group/link"
                      whileHover={{ scale: 1.05 }}
                    >
                      Contactar
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Send className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.a>
                  </div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={isHovered ? { x: [-100, 400] } : {}}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-beige-400/10 to-transparent rounded-bl-3xl" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                  Solicita tu <span className="text-gradient">consulta gratuita</span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-neutral-dark/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Completa el formulario y nos comunicaremos contigo en menos de 2 horas 
                  para programar una evaluación gratuita en tu domicilio.
                </motion.p>
                
                {/* Decorative line */}
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Evaluación Gratuita",
                    description: "Sin compromiso ni costo",
                    color: "from-blue-serene to-beige-500"
                  },
                  {
                    icon: Clock,
                    title: "Respuesta Rápida", 
                    description: "Contacto en menos de 2 horas",
                    color: "from-beige-400 to-blue-light"
                  },
                  {
                    icon: Shield,
                    title: "Información Confidencial",
                    description: "Tus datos están protegidos",
                    color: "from-blue-light to-beige-400"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-beige-50/50 hover:to-blue-serene/5 transition-all duration-300 group"
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-neutral-dark text-lg group-hover:text-blue-serene transition-colors">
                          {item.title}
                        </div>
                        <div className="text-neutral-dark/60">{item.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-serene/10 to-beige-400/10 p-8 rounded-3xl border border-blue-serene/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                  </motion.div>
                  <span className="font-bold text-neutral-dark text-xl">Garantía de Satisfacción</span>
                </div>
                <p className="text-neutral-dark/70 leading-relaxed">
                  Si no estás completamente satisfecho con nuestro servicio en los primeros 
                  7 días, te devolvemos el 100% de tu dinero.
                </p>
                
                {/* Background decoration */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-beige-400/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full"
                animate={{
                  rotate: [0, 180, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-beige-400/10 to-blue-light/10 rounded-full"
                animate={{
                  rotate: [0, -180, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <div className="relative z-10">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Emergency Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full"
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
          className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergencias 24/7
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              ¿Necesitas atención <span className="text-red-600">inmediata</span>?
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nuestro equipo de emergencias está disponible las 24 horas para 
              situaciones que requieren atención médica inmediata en el hogar.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {emergencySteps.map((step, index) => {
              const Icon = step.icon;
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center space-y-6 group"
                >
                  <div className="relative mx-auto w-fit">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-lg relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(220, 38, 127, 0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-10 h-10 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={isHovered ? { 
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.5, 0]
                        } : {}}
                        transition={{ 
                          duration: 2,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-red-600 border-2 border-red-500 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-dark/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-neutral-dark mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Línea de Emergencias 24/7
                </motion.h3>
                
                <motion.div 
                  className="text-4xl font-bold text-red-600 mb-6"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  +52 55 1234 5678
                </motion.div>
                
                <p className="text-neutral-dark/70 mb-8 leading-relaxed">
                  Para situaciones que requieren atención médica inmediata. 
                  Nuestro equipo de emergencias responde en menos de 30 minutos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a 
                    href="tel:+525512345678"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group"
                  >
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold relative z-10 shadow-lg">
                      <Phone className="w-5 h-5 mr-2 inline" />
                      Llamar Emergencia
                    </button>
                    <motion.div
                      className="absolute inset-0 bg-red-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  <motion.a 
                    href="https://wa.me/525512345678?text=EMERGENCIA:%20Necesito%20atención%20médica%20inmediata%20en%20domicilio."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group"
                  >
                    <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold relative z-10 shadow-lg">
                      <MessageCircle className="w-5 h-5 mr-2 inline" />
                      WhatsApp Emergencia
                    </button>
                    <motion.div
                      className="absolute inset-0 bg-red-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 border-2 border-blue-serene rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 border-2 border-beige-400 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
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
              Preguntas <span className="text-gradient">frecuentes</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Resolvemos las dudas más comunes sobre nuestros servicios 
              de cuidado domiciliario.
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-serene to-beige-400 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-3xl border border-beige-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-serene/5 to-beige-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-start justify-between mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-neutral-dark pr-4 group-hover:text-blue-serene transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-gradient-to-br from-blue-serene to-beige-400 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <motion.div
                        className="w-4 h-0.5 bg-white rounded-full"
                        animate={{ 
                          rotate: expandedFAQ === index ? 90 : 0,
                          scale: expandedFAQ === index ? 0.8 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="w-0.5 h-4 bg-white rounded-full absolute"
                        animate={{ 
                          opacity: expandedFAQ === index ? 0 : 1,
                          scale: expandedFAQ === index ? 0 : 1
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFAQ === index ? "auto" : 0,
                      opacity: expandedFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.p 
                      className="text-neutral-dark/70 leading-relaxed"
                      initial={{ y: -20 }}
                      animate={{ y: expandedFAQ === index ? 0 : -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={expandedFAQ === index ? { x: [-100, 400] } : {}}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Service Areas */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(229, 213, 183, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(229, 213, 183, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(229, 213, 183, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
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
              Áreas de <span className="text-gradient">cobertura</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Brindamos nuestros servicios en las principales ciudades de México. 
              ¿No ves tu ciudad? Contáctanos para confirmar disponibilidad.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceAreas.map((city, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl border border-beige-200 text-center hover:shadow-xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-serene/5 to-beige-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="w-8 h-8 text-blue-serene mx-auto mb-3" />
                  </motion.div>
                  
                  <div className="font-semibold text-neutral-dark group-hover:text-blue-serene transition-colors duration-300">
                    {city}
                  </div>
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
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
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/40 rounded-full"
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
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ¿Listo para <span className="relative">
                comenzar
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              No esperes más. Contáctanos ahora y descubre cómo podemos 
              mejorar la calidad de vida de tu ser querido.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="tel:+525512345678"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <button className="bg-white text-blue-serene hover:bg-white/90 px-10 py-4 text-lg font-semibold relative overflow-hidden rounded-xl shadow-lg">
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-100 to-blue-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20los%20servicios%20de%20Alivio%20Vital."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-10 py-4 text-lg font-semibold relative overflow-hidden rounded-xl shadow-lg">
                  <span className="relative z-10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </motion.a>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div
              className="flex items-center justify-center flex-wrap gap-8 mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Shield, text: "Certificado", delay: 0 },
                { icon: Clock, text: "24/7", delay: 0.2 },
                { icon: Users, text: "+500 Familias", delay: 0.4 },
                { icon: Heart, text: "Cuidado Profesional", delay: 0.6 }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-3 group cursor-default"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="p-2 bg-white/10 rounded-full backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-sm opacity-90 font-medium group-hover:opacity-100 transition-opacity">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Additional decorative elements */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="flex space-x-2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}