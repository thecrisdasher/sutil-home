'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { HoverCard } from '@/components/animations/HoverCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../../components/ui/button'
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Brain, 
  Waves, 
  Shield 
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Cuidado Domiciliario Integral',
    description: 'Atención médica completa en la comodidad del hogar, incluyendo administración de medicamentos, control de signos vitales y cuidados básicos de enfermería.',
    features: ['Enfermeras certificadas', 'Atención 24/7', 'Seguimiento médico'],
    gradient: 'from-red-400 to-pink-500'
  },
  {
    icon: Users,
    title: 'Acompañamiento Emocional',
    description: 'Apoyo psicológico y emocional para pacientes y familias, promoviendo el bienestar mental y la estabilidad emocional durante procesos de recuperación.',
    features: ['Psicólogos especializados', 'Terapia familiar', 'Apoyo continuo'],
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    icon: Stethoscope,
    title: 'Asistencia Posoperatoria',
    description: 'Cuidados especializados post-quirúrgicos, manejo de heridas, rehabilitación y seguimiento médico para una recuperación óptima y segura.',
    features: ['Cuidado de heridas', 'Rehabilitación', 'Monitoreo especializado'],
    gradient: 'from-green-400 to-blue-500'
  },
  {
    icon: Brain,
    title: 'Atención a Pacientes Terminales',
    description: 'Cuidados paliativos con enfoque en el confort, dignidad y calidad de vida, brindando apoyo integral al paciente y su familia.',
    features: ['Cuidados paliativos', 'Manejo del dolor', 'Apoyo familiar'],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Waves,
    title: 'Masajes de Drenaje Linfático',
    description: 'Terapias especializadas para mejorar la circulación, reducir inflamación y promover la recuperación mediante técnicas de drenaje linfático manual.',
    features: ['Fisioterapeutas certificados', 'Técnicas especializadas', 'Tratamiento personalizado'],
    gradient: 'from-teal-400 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Monitoreo Médico Continuo',
    description: 'Supervisión constante del estado de salud del paciente, con reportes regulares al médico tratante y respuesta inmediata ante emergencias.',
    features: ['Monitoreo 24/7', 'Reportes médicos', 'Respuesta inmediata'],
    gradient: 'from-indigo-400 to-purple-500'
  }
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios de atención domiciliaria, 
              diseñados para satisfacer las necesidades específicas de cada paciente y familia.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <HoverCard className="h-full">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Incluye:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full mt-4 border-blue-200 text-blue-600 hover:bg-blue-50"
                        onClick={scrollToContact}
                      >
                        Solicitar información
                      </Button>
                    </CardContent>
                  </Card>
                </HoverCard>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Necesitas un servicio personalizado?
              </h3>
              <p className="text-gray-600 mb-6">
                Cada paciente es único. Trabajamos contigo para crear un plan de cuidados 
                que se adapte perfectamente a tus necesidades específicas.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                Consulta personalizada gratuita
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}