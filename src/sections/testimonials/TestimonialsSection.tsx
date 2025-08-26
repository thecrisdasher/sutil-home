'use client'

import { useState, useEffect } from 'react'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '../../components/ui/button'
import { 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Quote,
  Heart,
  Users
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'María Elena Vásquez',
    age: '78 años',
    service: 'Cuidado Post-operatorio',
    rating: 5,
    text: 'El cuidado que recibí después de mi cirugía fue excepcional. Las enfermeras fueron muy profesionales y cariñosas. Me sentí segura y bien atendida en todo momento. Recomiendo totalmente sus servicios.',
    location: 'Bogotá, Colombia',
    avatar: '👵🏻'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    age: '65 años',
    service: 'Fisioterapia a Domicilio',
    rating: 5,
    text: 'La fisioterapia en casa me cambió la vida. Después del accidente, pensé que no volvería a caminar bien. Gracias al profesionalismo y dedicación del equipo, he recuperado mi movilidad casi por completo.',
    location: 'Medellín, Colombia',
    avatar: '👨🏻‍🦳'
  },
  {
    id: 3,
    name: 'Ana Sofía Herrera',
    age: '45 años',
    service: 'Cuidado de Familiar',
    rating: 5,
    text: 'Cuando mi madre necesitó cuidados especiales, no sabíamos qué hacer. Alivio Vital nos brindó no solo atención médica profesional, sino también el apoyo emocional que necesitábamos como familia.',
    location: 'Cali, Colombia',
    avatar: '👩🏻'
  },
  {
    id: 4,
    name: 'Roberto Jiménez',
    age: '72 años',
    service: 'Cuidados Paliativos',
    rating: 5,
    text: 'En los momentos más difíciles, el equipo de Alivio Vital nos acompañó con profesionalismo y mucha humanidad. Su apoyo fue fundamental para mantener la dignidad y el confort que mi esposa merecía.',
    location: 'Barranquilla, Colombia',
    avatar: '👨🏻‍🦲'
  },
  {
    id: 5,
    name: 'Lucía Ramírez',
    age: '38 años',
    service: 'Apoyo Psicológico',
    rating: 5,
    text: 'El apoyo psicológico que recibimos durante el tratamiento de mi hijo fue invaluable. La psicóloga nos ayudó a toda la familia a manejar la situación con fortaleza y esperanza.',
    location: 'Bucaramanga, Colombia',
    avatar: '👩🏻‍🦰'
  },
  {
    id: 6,
    name: 'Fernando Castro',
    age: '58 años',
    service: 'Drenaje Linfático',
    rating: 5,
    text: 'Después de mi cirugía, el drenaje linfático fue esencial para mi recuperación. El fisioterapeuta fue muy profesional y los resultados fueron excelentes. Me siento mucho mejor.',
    location: 'Cartagena, Colombia',
    avatar: '👨🏻'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo que Dicen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Nuestros Pacientes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Las experiencias reales de nuestros pacientes y sus familias son nuestro mayor testimonio. 
              Cada historia refleja nuestro compromiso con la excelencia en el cuidado.
            </p>
          </div>
        </FadeIn>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Avatar and Info */}
                      <div className="text-center md:text-left">
                        <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-1">
                          {currentTestimonial.age}
                        </p>
                        <p className="text-blue-600 font-medium text-sm mb-2">
                          {currentTestimonial.service}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {currentTestimonial.location}
                        </p>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1">
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-200" />
                          <blockquote className="text-gray-700 text-lg leading-relaxed italic pl-8">
                            "{currentTestimonial.text}"
                          </blockquote>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center mt-6">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                          <span className="ml-2 text-gray-600 text-sm">
                            {currentTestimonial.rating}/5 estrellas
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        {/* Statistics */}
        <FadeIn delay={0.6}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Números que Hablan por Nosotros
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600 text-sm">Satisfacción del Paciente</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <p className="text-gray-600 text-sm">Familias Atendidas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
                <p className="text-gray-600 text-sm">Calificación Promedio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600 text-sm">Recomendaciones</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}