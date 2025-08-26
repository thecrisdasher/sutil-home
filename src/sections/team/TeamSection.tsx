'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { HoverCard } from '@/components/animations/HoverCard'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Brain,
  Award,
  Star
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Dra. María González',
    role: 'Enfermera Jefe',
    specialization: 'Cuidados Intensivos',
    experience: '15 años de experiencia',
    icon: Stethoscope,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Especialista en cuidados críticos y manejo de pacientes complejos. Lidera nuestro equipo con dedicación y profesionalismo.'
  },
  {
    name: 'Lic. Carlos Rodríguez',
    role: 'Fisioterapeuta',
    specialization: 'Rehabilitación',
    experience: '12 años de experiencia',
    icon: Heart,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Experto en terapias de rehabilitación y drenaje linfático. Comprometido con la recuperación integral de cada paciente.'
  },
  {
    name: 'Ana Martínez',
    role: 'Auxiliar de Enfermería',
    specialization: 'Cuidado Geriátrico',
    experience: '10 años de experiencia',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Especializada en el cuidado de adultos mayores. Su calidez humana y profesionalismo brindan confort a pacientes y familias.'
  },
  {
    name: 'Psic. Laura Fernández',
    role: 'Psicóloga Clínica',
    specialization: 'Apoyo Emocional',
    experience: '8 años de experiencia',
    icon: Brain,
    gradient: 'from-orange-500 to-red-500',
    description: 'Especialista en apoyo psicológico para pacientes y familias. Facilita procesos de adaptación y bienestar emocional.'
  },
  {
    name: 'Enf. Roberto Silva',
    role: 'Enfermero Especializado',
    specialization: 'Cuidados Paliativos',
    experience: '14 años de experiencia',
    icon: Award,
    gradient: 'from-teal-500 to-blue-500',
    description: 'Experto en cuidados paliativos y manejo del dolor. Comprometido con la dignidad y confort en momentos difíciles.'
  },
  {
    name: 'Lic. Patricia López',
    role: 'Coordinadora de Servicios',
    specialization: 'Gestión de Cuidados',
    experience: '11 años de experiencia',
    icon: Star,
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Coordina y supervisa todos nuestros servicios, asegurando la calidad y continuidad en la atención de cada paciente.'
  }
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Equipo Profesional
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce a los profesionales de la salud que forman parte de nuestro equipo. 
              Cada uno aporta su experiencia y dedicación para brindarte el mejor cuidado.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon
            return (
              <FadeIn key={member.name} delay={index * 0.1}>
                <HoverCard className="h-full">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      {/* Avatar */}
                      <div className="relative mb-6">
                        <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Info */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <div className="space-y-1 mb-4">
                        <p className="text-blue-600 font-semibold">
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-600">
                          {member.specialization}
                        </p>
                        <p className="text-xs text-gray-500">
                          {member.experience}
                        </p>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>

                      {/* Certifications */}
                      <div className="mt-6 flex justify-center space-x-2">
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          Certificado
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Activo
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              </FadeIn>
            )
          })}
        </div>

        {/* Team Values */}
        <FadeIn delay={0.8}>
          <div className="mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comprometidos con la Excelencia
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certificaciones</h4>
                  <p className="text-gray-600 text-sm">Todo nuestro personal cuenta con certificaciones vigentes y formación continua</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vocación de Servicio</h4>
                  <p className="text-gray-600 text-sm">Cada miembro de nuestro equipo tiene una genuina vocación por el cuidado</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trabajo en Equipo</h4>
                  <p className="text-gray-600 text-sm">Colaboramos estrechamente para brindar una atención integral y coordinada</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
