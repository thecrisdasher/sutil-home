"use client";

import { motion } from "framer-motion";
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
  Phone
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

// Metadata se maneja dinámicamente para Client Components

const mainBenefits = [
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
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const additionalBenefits = [
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Atención disponible las 24 horas del día, los 7 días de la semana."
  },
  {
    icon: Shield,
    title: "Seguridad y Confianza",
    description: "Personal certificado y verificado con amplia experiencia."
  },
  {
    icon: Users,
    title: "Apoyo Familiar",
    description: "Involucra a la familia en el proceso de cuidado y recuperación."
  },
  {
    icon: Star,
    title: "Calidad Garantizada",
    description: "Servicios de alta calidad con seguimiento continuo."
  },
  {
    icon: Smile,
    title: "Bienestar Emocional",
    description: "Mejora significativa en el estado de ánimo y calidad de vida."
  },
  {
    icon: Award,
    title: "Excelencia Profesional",
    description: "Equipo multidisciplinario de profesionales especializados."
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

export default function BenefitsPage() {
  useEffect(() => {
    document.title = "Beneficios - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre los beneficios del cuidado domiciliario: comodidad, ahorro, atención personalizada, recuperación más rápida y bienestar familiar.');
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
              <Star className="w-4 h-4 mr-2" />
              Beneficios del Cuidado Domiciliario
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Ventajas que <span className="text-gradient">transforman vidas</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Descubre por qué el cuidado domiciliario es la mejor opción para 
              la recuperación, bienestar y calidad de vida de tus seres queridos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary">
                  Consulta Gratuita
                </Button>
              </Link>
              <Link href="/services">
                <Button className="btn-secondary">
                  Ver Servicios
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
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-dark/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits */}
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
              Principales <span className="text-gradient">beneficios</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Conoce las ventajas más importantes que ofrece el cuidado 
              domiciliario para pacientes y familias.
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {mainBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                        {benefit.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-neutral-dark/70 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-dark">Ventajas específicas:</h4>
                      <div className="grid gap-2">
                        {benefit.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-serene flex-shrink-0" />
                            <span className="text-neutral-dark/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
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

      {/* Additional Benefits */}
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
              Beneficios <span className="text-gradient">adicionales</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Más razones por las que el cuidado domiciliario es la mejor 
              opción para tu familia.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-2xl border border-beige-200 hover:shadow-lg transition-all duration-300 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark">{benefit.title}</h3>
                  <p className="text-neutral-dark/70">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-blue-light/5 to-beige-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Comparación de <span className="text-gradient">opciones de cuidado</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Ve cómo el cuidado domiciliario se compara con otras opciones 
              de atención médica.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-serene to-beige-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspecto</th>
                    <th className="px-6 py-4 text-center font-semibold">Cuidado en Casa</th>
                    <th className="px-6 py-4 text-center font-semibold">Hospital</th>
                    <th className="px-6 py-4 text-center font-semibold">Residencia</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-beige-50/50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-neutral-dark">
                        {comparison.category}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {comparison.homecare}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                          {comparison.hospital}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          {comparison.nursing}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
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
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Familia feliz con cuidado domiciliario"
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
                  Lo que dicen nuestras <span className="text-gradient">familias</span>
                </h2>
                <blockquote className="text-xl text-neutral-dark/80 italic leading-relaxed">
                  "Elegir el cuidado domiciliario fue la mejor decisión que pudimos tomar. 
                  Mi madre se recuperó mucho más rápido en casa, rodeada de amor y en 
                  un ambiente familiar. El equipo de Alivio Vital fue excepcional."
                </blockquote>
                <div className="mt-6">
                  <div className="font-bold text-neutral-dark">María González</div>
                  <div className="text-neutral-dark/60">Hija de paciente</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-neutral-dark/70">5.0 de 5 estrellas</span>
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
              ¿Listo para experimentar estos beneficios?
            </h2>
            <p className="text-xl opacity-90">
              Contáctanos hoy mismo para una consulta gratuita y descubre 
              cómo el cuidado domiciliario puede transformar tu vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </Button>
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20los%20beneficios%20del%20cuidado%20domiciliario%20de%20Alivio%20Vital."
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