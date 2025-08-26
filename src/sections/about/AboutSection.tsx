'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Heart, Award } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Nosotros
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos una empresa dedicada al cuidado profesional en casa, comprometidos con brindar 
              servicios de calidad que mejoren la vida de nuestros pacientes y sus familias.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <FadeIn delay={0.2}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Garantizar el bienestar integral de los pacientes mediante un acompañamiento profesional 
                  que promueva la estabilidad emocional y física, brindando servicios de atención domiciliaria 
                  de la más alta calidad con calidez humana y excelencia técnica.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Visión */}
          <FadeIn delay={0.4}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ser la empresa líder en servicios de atención domiciliaria de salud, reconocida por 
                  nuestra excelencia en el cuidado, innovación en tratamientos y compromiso inquebrantable 
                  con la dignidad y bienestar de cada persona que atendemos.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Valores */}
        <FadeIn delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Valores</h3>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.8}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Cariño</h4>
              <p className="text-gray-600">
                Tratamos a cada paciente con el amor y cuidado que merecen, 
                como si fueran parte de nuestra propia familia.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1.0}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Profesionalismo</h4>
              <p className="text-gray-600">
                Contamos con personal altamente capacitado y certificado, 
                comprometido con la excelencia en cada servicio.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Respeto</h4>
              <p className="text-gray-600">
                Valoramos la dignidad, autonomía y derechos de cada persona, 
                respetando sus decisiones y preferencias.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
