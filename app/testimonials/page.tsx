"use client";

import { motion } from "framer-motion";
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
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Metadata se maneja dinámicamente para Client Components

const testimonials = [
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

const stats = [
  { number: "500+", label: "Familias Atendidas" },
  { number: "98%", label: "Satisfacción" },
  { number: "4.9/5", label: "Calificación Promedio" },
  { number: "95%", label: "Recomendaciones" }
];

const videoTestimonials = [
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

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Testimonios - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lee las experiencias reales de nuestras familias. Testimonios auténticos sobre nuestros servicios de cuidado domiciliario profesional.');
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              <Heart className="w-4 h-4 mr-2" />
              Testimonios Reales
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Historias que <span className="text-gradient">inspiran confianza</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Conoce las experiencias reales de las familias que han confiado en 
              Alivio Vital para el cuidado de sus seres queridos.
            </p>
            
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-neutral-dark">4.9/5</span>
              <span className="text-neutral-dark/60">• 500+ reseñas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Featured Testimonial Carousel */}
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
              Testimonios <span className="text-gradient">destacados</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Experiencias reales de familias que han transformado sus vidas 
              con nuestros servicios de cuidado domiciliario.
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-beige-200"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-serene to-beige-500 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-neutral-dark/80 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-bold text-xl text-neutral-dark">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-neutral-dark/60">
                      {testimonials[currentTestimonial].relation} • {testimonials[currentTestimonial].location}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene">
                      {testimonials[currentTestimonial].service} • {testimonials[currentTestimonial].duration}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-beige-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-dark" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-blue-serene'
                        : 'bg-neutral-dark/20 hover:bg-neutral-dark/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-beige-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-neutral-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
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
              Más <span className="text-gradient">testimonios</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Cada historia es única, pero todas comparten algo en común: 
              la confianza en nuestro cuidado profesional.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-beige-50 to-white p-6 rounded-2xl border border-beige-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-neutral-dark">{testimonial.name}</div>
                    <div className="text-sm text-neutral-dark/60">{testimonial.relation}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-neutral-dark/80 italic mb-4 line-clamp-4">
                  "{testimonial.text.substring(0, 150)}..."
                </blockquote>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-serene font-medium">{testimonial.service}</span>
                  <span className="text-neutral-dark/60">{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
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
              Testimonios en <span className="text-gradient">video</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Escucha directamente de nuestras familias sobre su experiencia 
              con Alivio Vital Home Care.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={video.thumbnail}
                    alt={video.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-blue-serene border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-neutral-dark">{video.name}</h3>
                  <p className="text-sm text-neutral-dark/60">{video.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Confianza que <span className="text-gradient">nos respalda</span>
                </h2>
                <p className="text-lg text-neutral-dark/70">
                  Nuestros testimonios reflejan años de dedicación, profesionalismo 
                  y compromiso con la excelencia en el cuidado domiciliario.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">500+ Familias Atendidas</div>
                    <div className="text-neutral-dark/60">En toda la República Mexicana</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Certificaciones Profesionales</div>
                    <div className="text-neutral-dark/60">Personal altamente calificado</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-beige-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">98% de Satisfacción</div>
                    <div className="text-neutral-dark/60">Calificación promedio de 4.9/5</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
              ¿Listo para ser parte de nuestras historias de éxito?
            </h2>
            <p className="text-xl opacity-90">
              Únete a las cientos de familias que han confiado en nosotros. 
              Contáctanos hoy para una consulta gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </Button>
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Alivio%20Vital%20después%20de%20leer%20los%20testimonios."
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