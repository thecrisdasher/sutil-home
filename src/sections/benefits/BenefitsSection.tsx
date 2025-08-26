'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Home, 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Smile 
} from 'lucide-react'

const benefits = [
  {
    icon: Home,
    title: 'Independencia en Casa',
    description: 'Mantén tu autonomía y comodidad en el entorno familiar que conoces y amas.',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Entorno Familiar',
    description: 'Recibe atención médica rodeado del amor y apoyo de tu familia.',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Monitoreo Constante',
    description: 'Supervisión médica 24/7 con personal especializado siempre disponible.',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Tranquilidad para la Familia',
    description: 'La paz mental de saber que tu ser querido está en las mejores manos.',
    gradient: 'from-purple-400 to-violet-500'
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Cuidados adaptados específicamente a las necesidades individuales.',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    icon: Smile,
    title: 'Mejor Calidad de Vida',
    description: 'Mejora significativa en el bienestar físico, emocional y social.',
    gradient: 'from-teal-400 to-blue-500'
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios del{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Cuidado en Casa
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre por qué el cuidado en casa es la mejor opción para ti y tu familia.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            )
          })}
        </div>

        {/* Statistics */}
        <FadeIn delay={0.8}>
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Resultados que Hablan por Sí Solos
              </h3>
              <p className="text-gray-600 text-lg">
                Nuestros pacientes experimentan mejoras significativas en su calidad de vida
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Satisfacción del paciente</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-600">Disponibilidad</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
                <p className="text-gray-600">Personal certificado</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">5+</div>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
