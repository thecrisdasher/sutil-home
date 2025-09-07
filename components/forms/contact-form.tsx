"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FORMSPREE_ENDPOINTS, JSON_FORM_CONFIG } from "@/lib/formspree-config";

// Schema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  urgency: z.enum(["low", "medium", "high"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      urgency: "medium",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        urgency: data.urgency,
        _subject: `Nuevo contacto de ${data.name} - ${data.service}`,
      };

      console.log('Enviando formulario a:', FORMSPREE_ENDPOINTS.CONTACT);
      console.log('Datos del formulario:', formData);

      // Integración con Formspree - Formulario de Contacto
      const response = await fetch(FORMSPREE_ENDPOINTS.CONTACT, {
        ...JSON_FORM_CONFIG,
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setSubmitStatus('success');
        reset();
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        console.error('Response status:', response.status);
        throw new Error(`Error en el envío del formulario: ${response.status}`);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const urgencyValue = watch("urgency");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${className} px-4 sm:px-6 md:px-0`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        {/* Nombre */}
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Tu nombre completo"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="tu@email.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+1 234 567 8900"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Servicio */}
        <div className="space-y-2">
          <Label htmlFor="service">Servicio requerido *</Label>
          <Select onValueChange={(value: string) => setValue("service", value)}>
            <SelectTrigger className={errors.service ? "border-red-500" : ""}>
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enfermeria">Enfermería a domicilio</SelectItem>
              <SelectItem value="postoperatorio">Cuidados postoperatorios</SelectItem>
              <SelectItem value="rehabilitacion">Rehabilitación</SelectItem>
              <SelectItem value="acompanamiento">Acompañamiento</SelectItem>
              <SelectItem value="medicamentos">Administración de medicamentos</SelectItem>
              <SelectItem value="monitoreo">Monitoreo de salud</SelectItem>
              <SelectItem value="curaciones">Curaciones</SelectItem>
              <SelectItem value="adulto-mayor">Cuidado del adulto mayor</SelectItem>
              <SelectItem value="adaptacion">Adaptación del hogar</SelectItem>
              <SelectItem value="consulta">Consulta telefónica</SelectItem>
              <SelectItem value="otro">Otro servicio</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Urgencia */}
        <div className="space-y-2">
          <Label htmlFor="urgency">Nivel de urgencia</Label>
          <Select 
            defaultValue="medium" 
            onValueChange={(value: string) => setValue("urgency", value as "low" | "medium" | "high")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Baja - Consulta general</SelectItem>
              <SelectItem value="medium">Media - Necesito atención pronto</SelectItem>
              <SelectItem value="high">Alta - Es urgente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Describe tu situación y necesidades específicas..."
            rows={4}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Estado del envío */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
          >
            <CheckCircle className="h-5 w-5" />
            <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
          >
            <AlertCircle className="h-5 w-5" />
            <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
          </motion.div>
        )}

        {/* Botón de envío */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 sm:h-12 text-base sm:text-lg"
          size="lg"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Enviar validación gratuita
            </>
          )}
        </Button>

        {/* Información adicional */}
        <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Respuesta en menos de 2 horas
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Consulta inicial gratuita
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Atención 24/7 para emergencias
          </p>
        </div>
      </form>
    </motion.div>
  );
}