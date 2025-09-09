"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// Removido: import { FORMSPREE_ENDPOINTS, FORMSPREE_CONFIG } from "@/lib/formspree-config";

// Schema de validación con Zod
const careerSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  position: z.string().min(2, "Ingresa la posición de tu interés"),
  education: z.string().min(2, "Ingresa tu nivel educativo"),
  availability: z.string().min(1, "Selecciona tu disponibilidad"),
  motivation: z.string().min(20, "La motivación debe tener al menos 20 caracteres"),
  references: z.string().optional(),
});

type CareerFormData = z.infer<typeof careerSchema>;

interface CareerFormProps {
  className?: string;
}

export function CareerForm({ className }: CareerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'coverLetter') => {
    const file = event.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Solo se permiten archivos PDF, DOC o DOCX');
        return;
      }
      
      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('El archivo no puede ser mayor a 5MB');
        return;
      }

      if (type === 'cv') {
        setCvFile(file);
      } else {
        setCoverLetterFile(file);
      }
    }
  };

  const removeFile = (type: 'cv' | 'coverLetter') => {
    if (type === 'cv') {
      setCvFile(null);
    } else {
      setCoverLetterFile(null);
    }
  };

  const onSubmit = async (data: CareerFormData) => {
    if (!cvFile) {
      alert('Por favor, adjunta tu CV');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formData = new FormData();
      
      // Agregar todos los campos del formulario
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Agregar tipo de formulario para detección automática
      formData.append('formType', 'career');
      
      // Agregar archivos
      formData.append('cv', cvFile);
      if (coverLetterFile) {
        formData.append('coverLetter', coverLetterFile);
      }
      
      console.log('Enviando formulario de carrera a API local');
      console.log('Archivos adjuntos:', { cv: cvFile?.name, coverLetter: coverLetterFile?.name });
      
      // Envío a la API local de Next.js
      const res = await fetch('/api/forms', {
        method: 'POST',
        body: formData,
      });
      
      console.log('Career form response status:', res.status);
      console.log('Career form response ok:', res.ok);
      
      if (res.ok) {
        const result = await res.json();
        console.log('Formulario de carrera enviado exitosamente:', result);
        setSubmitStatus('success');
        reset();
        setCvFile(null);
        setCoverLetterFile(null);
      } else {
        const errorData = await res.json().catch(() => ({ error: 'Error desconocido' }));
        console.error('Career form error response:', errorData);
        console.error('Response status:', res.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Career form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Información Personal */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-neutral-dark border-b border-beige-200 pb-2">
            Información Personal
          </h3>
          
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
        </div>

        {/* Información Profesional */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-neutral-dark border-b border-beige-200 pb-2">
            Información Profesional
          </h3>

          {/* Posición */}
          <div className="space-y-2">
            <Label htmlFor="position">Posición de interés *</Label>
            <Input
              id="position"
              {...register("position")}
              placeholder="Ej: Enfermera/o, Fisioterapeuta, Cuidador/a, etc."
              className={errors.position ? "border-red-500" : ""}
            />
            {errors.position && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.position.message}
              </p>
            )}
          </div>

          {/* Educación */}
          <div className="space-y-2">
            <Label htmlFor="education">Nivel educativo *</Label>
            <Input
              id="education"
              {...register("education")}
              placeholder="Ej: Licenciatura en Enfermería, Universidad XYZ"
              className={errors.education ? "border-red-500" : ""}
            />
            {errors.education && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.education.message}
              </p>
            )}
          </div>

          {/* Disponibilidad */}
          <div className="space-y-2">
            <Label htmlFor="availability">Disponibilidad *</Label>
            <Select onValueChange={(value: string) => setValue("availability", value)}>
              <SelectTrigger className={errors.availability ? "border-red-500" : ""}>
                <SelectValue placeholder="Selecciona tu disponibilidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tiempo-completo">Tiempo completo</SelectItem>
                <SelectItem value="medio-tiempo">Medio tiempo</SelectItem>
                <SelectItem value="turnos">Por turnos</SelectItem>
                <SelectItem value="fines-semana">Fines de semana</SelectItem>
                <SelectItem value="nocturno">Turno nocturno</SelectItem>
                <SelectItem value="flexible">Horario flexible</SelectItem>
              </SelectContent>
            </Select>
            {errors.availability && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.availability.message}
              </p>
            )}
          </div>
        </div>

        {/* Documentos */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-neutral-dark border-b border-beige-200 pb-2">
            Documentos
          </h3>

          {/* CV */}
          <div className="space-y-2">
            <Label>Curriculum Vitae (CV) *</Label>
            <div className="border-2 border-dashed border-beige-300 rounded-lg p-6 text-center hover:border-blue-serene transition-colors relative">
              {cvFile ? (
                <div className="flex items-center justify-between bg-beige-50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-serene" />
                    <span className="text-sm font-medium">{cvFile.name}</span>
                    <span className="text-xs text-gray-500">({(cvFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile('cv')}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-beige-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Arrastra tu CV aquí o haz clic para seleccionar</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (máx. 5MB)</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload(e, 'cv')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </>
              )}
            </div>
          </div>

          {/* Carta de Presentación */}
          <div className="space-y-2">
            <Label>Carta de Presentación (Opcional)</Label>
            <div className="border-2 border-dashed border-beige-300 rounded-lg p-6 text-center hover:border-blue-serene transition-colors relative">
              {coverLetterFile ? (
                <div className="flex items-center justify-between bg-beige-50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-serene" />
                    <span className="text-sm font-medium">{coverLetterFile.name}</span>
                    <span className="text-xs text-gray-500">({(coverLetterFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile('coverLetter')}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-beige-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Arrastra tu carta de presentación aquí</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (máx. 5MB)</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload(e, 'coverLetter')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Motivación */}
        <div className="space-y-2">
          <Label htmlFor="motivation">¿Por qué quieres trabajar con nosotros? *</Label>
          <Textarea
            id="motivation"
            {...register("motivation")}
            placeholder="Cuéntanos qué te motiva a formar parte de nuestro equipo y cómo puedes contribuir a nuestra misión de brindar cuidado de calidad..."
            rows={4}
            className={errors.motivation ? "border-red-500" : ""}
          />
          {errors.motivation && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.motivation.message}
            </p>
          )}
        </div>

        {/* Referencias */}
        <div className="space-y-2">
          <Label htmlFor="references">Referencias profesionales (Opcional)</Label>
          <Textarea
            id="references"
            {...register("references")}
            placeholder="Incluye nombres, cargos y datos de contacto de referencias profesionales..."
            rows={3}
          />
        </div>

        {/* Estado del envío */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
          >
            <CheckCircle className="h-5 w-5" />
            <span>¡Aplicación enviada exitosamente! Revisaremos tu información y te contactaremos pronto.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
          >
            <AlertCircle className="h-5 w-5" />
            <span>Error al enviar la aplicación. Por favor, intenta nuevamente.</span>
          </motion.div>
        )}

        {/* Botón de envío */}
        <Button
          type="submit"
          disabled={isSubmitting || !cvFile}
          className="w-full h-12 text-lg"
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
              Enviar aplicación
            </>
          )}
        </Button>

        {/* Información adicional */}
        <div className="text-sm text-gray-600 space-y-2">
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Revisión de aplicaciones en 48 horas
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Proceso de entrevista personalizado
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Oportunidades de crecimiento profesional
          </p>
        </div>
      </form>
    </motion.div>
  );
}