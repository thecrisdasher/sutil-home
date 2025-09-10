import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Esquemas de validación
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(5),
  urgency: z.enum(['low', 'medium', 'high']),
  formType: z.literal('contact').optional(),
});

const careerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  position: z.string().min(2),
  education: z.string().min(2),
  availability: z.string().min(10).max(200),
  motivation: z.string().min(20),
  references: z.string().optional(),
  formType: z.literal('career').optional(),
});

// Configuración de Nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Función para detectar el tipo de formulario automáticamente
function detectFormType(data: any): 'contact' | 'career' | null {
  // Si viene explícitamente definido
  if (data.formType) {
    return data.formType;
  }
  
  // Detectar por campos únicos del formulario de contacto
  if (data.service && data.urgency && data.message && !data.position) {
    return 'contact';
  }
  
  // Detectar por campos únicos del formulario de carrera
  if (data.position && data.education && data.availability && data.motivation) {
    return 'career';
  }
  
  return null;
}

// Función para procesar formulario de contacto
async function processContactForm(data: any, transporter: nodemailer.Transporter) {
  const validatedData = contactSchema.parse(data);
  
  const urgencyLabels = {
    low: 'Baja - Consulta general',
    medium: 'Media - Necesita atención pronto',
    high: 'Alta - Es urgente'
  };
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        Nuevo Contacto - Solicitud de Servicio
      </h2>
      
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Información del Cliente</h3>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Teléfono:</strong> ${validatedData.phone}</p>
      </div>
      
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #92400e; margin-top: 0;">Detalles del Servicio</h3>
        <p><strong>Servicio Solicitado:</strong> ${validatedData.service}</p>
        <p><strong>Nivel de Urgencia:</strong> ${urgencyLabels[validatedData.urgency]}</p>
      </div>
      
      <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #065f46; margin-top: 0;">Mensaje del Cliente</h3>
        <p style="white-space: pre-wrap;">${validatedData.message}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          Este mensaje fue enviado desde el formulario de contacto del sitio web.
        </p>
      </div>
    </div>
  `;
  
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Nuevo contacto de ${validatedData.name} - ${validatedData.service}`,
    html: htmlContent,
    replyTo: validatedData.email,
  };
  
  await transporter.sendMail(mailOptions);
}

// Función para procesar formulario de carrera
async function processCareerForm(formData: FormData, transporter: nodemailer.Transporter) {
  // Extraer datos del formulario
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    position: formData.get('position') as string,
    education: formData.get('education') as string,
    availability: formData.get('availability') as string,
    motivation: formData.get('motivation') as string,
    references: formData.get('references') as string || '',
  };
  
  const validatedData = careerSchema.parse(data);
  
  // Procesar archivos adjuntos
  const cvFile = formData.get('cv') as File;
  const coverLetterFile = formData.get('coverLetter') as File;
  
  const attachments: any[] = [];
  
  if (cvFile && cvFile.size > 0) {
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
    attachments.push({
      filename: cvFile.name,
      content: cvBuffer,
      contentType: cvFile.type,
    });
  }
  
  if (coverLetterFile && coverLetterFile.size > 0) {
    const coverBuffer = Buffer.from(await coverLetterFile.arrayBuffer());
    attachments.push({
      filename: coverLetterFile.name,
      content: coverBuffer,
      contentType: coverLetterFile.type,
    });
  }
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #059669; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        Nueva Aplicación de Carrera
      </h2>
      
      <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #065f46; margin-top: 0;">Información Personal</h3>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Teléfono:</strong> ${validatedData.phone}</p>
      </div>
      
      <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">Información Profesional</h3>
        <p><strong>Posición de Interés:</strong> ${validatedData.position}</p>
        <p><strong>Educación:</strong> ${validatedData.education}</p>
        <p><strong>Disponibilidad:</strong> ${validatedData.availability}</p>
      </div>
      
      <div style="background-color: #fef7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #7c2d12; margin-top: 0;">Motivación</h3>
        <p style="white-space: pre-wrap;">${validatedData.motivation}</p>
      </div>
      
      ${validatedData.references ? `
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #475569; margin-top: 0;">Referencias</h3>
          <p style="white-space: pre-wrap;">${validatedData.references}</p>
        </div>
      ` : ''}
      
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #991b1b; margin-top: 0;">Archivos Adjuntos</h3>
        <p><strong>CV:</strong> ${cvFile ? cvFile.name : 'No adjuntado'}</p>
        <p><strong>Carta de Presentación:</strong> ${coverLetterFile ? coverLetterFile.name : 'No adjuntada'}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          Esta aplicación fue enviada desde el formulario de carreras del sitio web.
        </p>
      </div>
    </div>
  `;
  
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Nueva aplicación de carrera de ${validatedData.name} - ${validatedData.position}`,
    html: htmlContent,
    replyTo: validatedData.email,
    attachments: attachments,
  };
  
  await transporter.sendMail(mailOptions);
}

export async function POST(request: NextRequest) {
  try {
    // Verificar variables de entorno
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.EMAIL_TO) {
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 }
      );
    }
    
    const contentType = request.headers.get('content-type') || '';
    let formType: string | null = null;
    let data: any = null;
    
    // Crear transporter
    const transporter = createTransporter();
    
    if (contentType.includes('application/json')) {
      // Formulario de contacto (JSON)
      data = await request.json();
      formType = detectFormType(data);
      
      if (formType === 'contact') {
        await processContactForm(data, transporter);
      } else {
        return NextResponse.json(
          { error: 'Tipo de formulario no reconocido' },
          { status: 400 }
        );
      }
    } else if (contentType.includes('multipart/form-data')) {
      // Formulario de carrera (FormData con archivos)
      const formData = await request.formData();
      
      // Convertir FormData a objeto para detección
      const formObject: any = {};
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          formObject[key] = value;
        }
      });
      
      formType = detectFormType(formObject);
      
      if (formType === 'career') {
        await processCareerForm(formData, transporter);
      } else {
        return NextResponse.json(
          { error: 'Tipo de formulario no reconocido' },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Tipo de contenido no soportado' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: `Formulario de ${formType === 'contact' ? 'contacto' : 'carrera'} enviado exitosamente`,
        formType 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error procesando formulario:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Datos del formulario inválidos',
          details: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}