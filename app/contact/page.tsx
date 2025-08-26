"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
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
  Headphones
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import Link from "next/link";

// Metadata se maneja dinámicamente para Client Components

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono Principal",
    value: "+52 55 1234 5678",
    description: "Disponible 24/7 para emergencias",
    action: "tel:+525512345678"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+52 55 1234 5678",
    description: "Respuesta inmediata",
    action: "https://wa.me/525512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Alivio%20Vital."
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@aliviovital.com",
    description: "Respuesta en 24 horas",
    action: "mailto:info@aliviovital.com"
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    value: "Ciudad de México",
    description: "Cobertura nacional",
    action: "#ubicacion"
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

const faqs = [
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

const emergencySteps = [
  {
    step: "1",
    title: "Llama Inmediatamente",
    description: "Contacta nuestro número de emergencia 24/7",
    icon: Phone
  },
  {
    step: "2",
    title: "Evaluación Rápida",
    description: "Nuestro equipo evalúa la situación por teléfono",
    icon: Headphones
  },
  {
    step: "3",
    title: "Respuesta Inmediata",
    description: "Personal especializado se dirige a tu domicilio",
    icon: Users
  },
  {
    step: "4",
    title: "Atención Profesional",
    description: "Brindamos la atención médica necesaria",
    icon: Heart
  }
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contacto - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contáctanos para una consulta gratuita. Estamos disponibles 24/7 para brindarte información sobre nuestros servicios de cuidado domiciliario.');
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
              <Phone className="w-4 h-4 mr-2" />
              Contacto Directo
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Estamos aquí para <span className="text-gradient">ayudarte</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Contáctanos para una consulta gratuita y descubre cómo podemos 
              mejorar la calidad de vida de tu ser querido con nuestro cuidado domiciliario profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+525512345678">
                <Button className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a 
                href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20los%20servicios%20de%20Alivio%20Vital."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Múltiples formas de <span className="text-gradient">contacto</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Elige la forma que más te convenga para comunicarte con nosotros. 
              Estamos disponibles 24/7 para atenderte.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-2xl border border-beige-200 hover:shadow-lg transition-all duration-300 text-center space-y-4 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">{contact.title}</h3>
                    <div className="text-lg font-semibold text-blue-serene mb-1">{contact.value}</div>
                    <div className="text-sm text-neutral-dark/60">{contact.description}</div>
                  </div>
                  <a 
                    href={contact.action}
                    target={contact.action.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-blue-serene hover:text-beige-500 transition-colors font-medium"
                  >
                    Contactar
                    <Send className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Solicita tu <span className="text-gradient">consulta gratuita</span>
                </h2>
                <p className="text-lg text-neutral-dark/70">
                  Completa el formulario y nos comunicaremos contigo en menos de 2 horas 
                  para programar una evaluación gratuita en tu domicilio.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Evaluación Gratuita</div>
                    <div className="text-neutral-dark/60">Sin compromiso ni costo</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Respuesta Rápida</div>
                    <div className="text-neutral-dark/60">Contacto en menos de 2 horas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Información Confidencial</div>
                    <div className="text-neutral-dark/60">Tus datos están protegidos</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-serene/10 to-beige-400/10 p-6 rounded-2xl border border-blue-serene/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="font-semibold text-neutral-dark">Garantía de Satisfacción</span>
                </div>
                <p className="text-neutral-dark/70">
                  Si no estás completamente satisfecho con nuestro servicio en los primeros 
                  7 días, te devolvemos el 100% de tu dinero.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              <Phone className="w-4 h-4 mr-2" />
              Emergencias 24/7
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              ¿Necesitas atención <span className="text-red-600">inmediata</span>?
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Nuestro equipo de emergencias está disponible las 24 horas para 
              situaciones que requieren atención médica inmediata en el hogar.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {emergencySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-red-600 border-2 border-red-500">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-dark mb-2">{step.title}</h3>
                    <p className="text-neutral-dark/70">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                Línea de Emergencias 24/7
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-4">
                +52 55 1234 5678
              </div>
              <p className="text-neutral-dark/70 mb-6">
                Para situaciones que requieren atención médica inmediata. 
                Nuestro equipo de emergencias responde en menos de 30 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+525512345678">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Emergencia
                  </Button>
                </a>
                <a 
                  href="https://wa.me/525512345678?text=EMERGENCIA:%20Necesito%20atención%20médica%20inmediata%20en%20domicilio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Emergencia
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios 
              de cuidado domiciliario.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-beige-50 to-white p-6 rounded-2xl border border-beige-200"
              >
                <h3 className="text-lg font-bold text-neutral-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
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
              Áreas de <span className="text-gradient">cobertura</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Brindamos nuestros servicios en las principales ciudades de México. 
              ¿No ves tu ciudad? Contáctanos para confirmar disponibilidad.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl border border-beige-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-blue-serene mx-auto mb-2" />
                <div className="font-semibold text-neutral-dark">{city}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl opacity-90">
              No esperes más. Contáctanos ahora y descubre cómo podemos 
              mejorar la calidad de vida de tu ser querido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+525512345678">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a 
                href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20los%20servicios%20de%20Alivio%20Vital."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-8 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
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