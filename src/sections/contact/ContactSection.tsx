'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  User,
  Heart
} from 'lucide-react'
import { motion } from 'framer-motion'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  service: z.string().min(1, 'Por favor selecciona un servicio'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  urgency: z.enum(['baja', 'media', 'alta']).describe('Por favor selecciona el nivel de urgencia'),
  required_error: 'Por favor selecciona el nivel de urgencia'
});

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Enfermería a Domicilio',
  'Fisioterapia',
  'Drenaje Linfático',
  'Cuidados Post-operatorios',
  'Cuidados Paliativos',
  'Apoyo Psicológico',
  'Cuidado de Adultos Mayores',
  'Otro'
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-lime-600">
                Hoy Mismo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo 
              en las próximas 24 horas para coordinar el cuidado que necesitas.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Solicita tu Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="mt-1"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Correo Electrónico *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="mt-1"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className="mt-1"
                      placeholder="300 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <Label htmlFor="service" className="text-gray-700 font-medium">
                      Servicio Requerido *
                    </Label>
                    <select
                      id="service"
                      {...register('service')}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Urgency */}
                  <div>
                    <Label className="text-gray-700 font-medium">
                      Nivel de Urgencia *
                    </Label>
                    <div className="mt-2 space-y-2">
                      {[
                        { value: 'baja', label: 'Baja - Consulta general', color: 'green' },
                        { value: 'media', label: 'Media - Necesito atención pronto', color: 'yellow' },
                        { value: 'alta', label: 'Alta - Es urgente', color: 'red' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value={option.value}
                            {...register('urgency')}
                            className="text-blue-600"
                          />
                          <span className={`w-3 h-3 rounded-full bg-${option.color}-500`}></span>
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.urgency && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.urgency.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      className="mt-1"
                      rows={4}
                      placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Enviar Solicitud
                      </div>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
                    >
                      <CheckCircle className="w-5 h-5" />
                      ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Information */}
          <div className="space-y-8">
            <FadeIn delay={0.4}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Información de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Teléfono</p>
                        <p className="text-gray-600">+57 300 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">contacto@aliviovital.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Ubicación</p>
                        <p className="text-gray-600">Bogotá, Colombia</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Horarios de Atención
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lunes - Viernes</span>
                      <span className="font-medium text-gray-900">24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados</span>
                      <span className="font-medium text-gray-900">24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingos</span>
                      <span className="font-medium text-gray-900">24 horas</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-700 text-sm flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Atención de emergencias disponible 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.8}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    ¿Necesitas Atención Inmediata?
                  </h3>
                  <p className="mb-4 text-blue-100">
                    Para emergencias o consultas urgentes, llámanos directamente.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => window.open('tel:+573001234567')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}