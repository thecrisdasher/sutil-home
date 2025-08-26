"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
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
  Bandage,
  UserCheck,
  Home,
  Phone,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Metadata se maneja dinámicamente para Client Components

const mainServices = [
  {
    icon: Stethoscope,
    title: "Cuidado de Enfermería",
    description: "Atención médica profesional con enfermeras certificadas para administración de medicamentos, curaciones y monitoreo de signos vitales.",
    features: [
      "Administración de medicamentos",
      "Control de signos vitales",
      "Curaciones y vendajes",
      "Inyecciones y sueros",
      "Monitoreo de condiciones crónicas"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Activity,
    title: "Cuidado Post-Operatorio",
    description: "Recuperación segura en casa después de cirugías con seguimiento médico especializado y cuidados personalizados.",
    features: [
      "Cuidado de heridas quirúrgicas",
      "Manejo del dolor",
      "Fisioterapia básica",
      "Seguimiento médico",
      "Prevención de complicaciones"
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Brain,
    title: "Rehabilitación y Fisioterapia",
    description: "Programas de rehabilitación personalizados para recuperar movilidad, fuerza y independencia en la comodidad del hogar.",
    features: [
      "Fisioterapia personalizada",
      "Ejercicios de movilidad",
      "Terapia ocupacional",
      "Rehabilitación neurológica",
      "Fortalecimiento muscular"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Heart,
    title: "Acompañamiento y Cuidado Personal",
    description: "Asistencia en actividades diarias con cuidadores capacitados que brindan apoyo emocional y físico.",
    features: [
      "Asistencia en higiene personal",
      "Ayuda con alimentación",
      "Acompañamiento médico",
      "Apoyo emocional",
      "Actividades recreativas"
    ],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const additionalServices = [
  {
    icon: Pill,
    title: "Gestión de Medicamentos",
    description: "Control y administración segura de medicamentos con seguimiento médico."
  },
  {
    icon: Thermometer,
    title: "Monitoreo de Salud",
    description: "Seguimiento continuo de signos vitales y condiciones de salud."
  },
  {
    icon: Bandage,
    title: "Cuidado de Heridas",
    description: "Tratamiento especializado de heridas y curaciones profesionales."
  },
  {
    icon: UserCheck,
    title: "Cuidado de Adultos Mayores",
    description: "Atención especializada para personas de la tercera edad."
  },
  {
    icon: Home,
    title: "Adaptación del Hogar",
    description: "Asesoría para hacer el hogar más seguro y accesible."
  },
  {
    icon: Phone,
    title: "Consultas Telefónicas",
    description: "Disponibilidad 24/7 para consultas y emergencias."
  }
];

const benefits = [
  "Atención personalizada en tu hogar",
  "Personal certificado y experimentado",
  "Disponibilidad 24 horas, 7 días a la semana",
  "Coordinación con médicos tratantes",
  "Planes de cuidado individualizados",
  "Apoyo emocional para toda la familia",
  "Costos más accesibles que hospitalización",
  "Mayor comodidad y privacidad"
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Servicios - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre nuestros servicios de cuidado domiciliario: enfermería, cuidado post-operatorio, rehabilitación, acompañamiento y más. Atención 24/7.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-beige-500/10 to-blue-light/10 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20">
              <Stethoscope className="w-4 h-4 mr-2" />
              Nuestros Servicios
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Cuidado integral <span className="text-gradient">en tu hogar</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de salud domiciliarios diseñados 
              para satisfacer las necesidades únicas de cada paciente y familia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary">
                  Solicitar Información
                </Button>
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20los%20servicios%20de%20Alivio%20Vital%20Home%20Care."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary">
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Servicios <span className="text-gradient">Principales</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Nuestros servicios especializados están diseñados para brindar 
              el mejor cuidado médico en la comodidad de tu hogar.
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-neutral-dark/70 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-dark">Incluye:</h4>
                      <div className="grid gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-serene flex-shrink-0" />
                            <span className="text-neutral-dark/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="btn-primary">
                        Más Información
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl rotate-12 opacity-80`}></div>
                    <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-16 h-16 bg-gradient-to-br from-blue-light to-blue-serene rounded-xl -rotate-12 opacity-80`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Servicios <span className="text-gradient">Adicionales</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Complementamos nuestros servicios principales con atención 
              especializada para cubrir todas tus necesidades de salud.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark">{service.title}</h3>
                  <p className="text-neutral-dark/70">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beneficios del cuidado domiciliario"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-light to-blue-serene rounded-xl -rotate-12 opacity-80"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Beneficios del <span className="text-gradient">cuidado en casa</span>
                </h2>
                <p className="text-lg text-neutral-dark/70">
                  Descubre por qué cada vez más familias eligen el cuidado 
                  domiciliario como la mejor opción para sus seres queridos.
                </p>
              </div>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-beige-50 to-white rounded-xl border border-beige-200"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-serene flex-shrink-0" />
                    <span className="text-neutral-dark/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-serene to-beige-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Necesitas más información sobre nuestros servicios?
            </h2>
            <p className="text-xl opacity-90">
              Contáctanos para una consulta gratuita y descubre cómo podemos 
              ayudarte a ti y a tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  Consulta Gratuita
                </Button>
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20los%20servicios%20de%20Alivio%20Vital%20Home%20Care."
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