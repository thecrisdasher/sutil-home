# Configuración del Backend - Sistema de Formularios

## Descripción

Este proyecto ahora incluye un backend completo para procesar los formularios de contacto y carrera usando Next.js API Routes y Nodemailer.

## Características Implementadas

✅ **Endpoint Unificado**: `/api/forms` procesa ambos formularios automáticamente
✅ **Detección Automática**: El sistema identifica qué formulario se está enviando
✅ **Nodemailer con Gmail**: Configurado con clave de aplicación
✅ **Procesamiento de Archivos**: Soporte para CV y carta de presentación
✅ **Emails HTML**: Plantillas profesionales para cada tipo de formulario
✅ **Validación con Zod**: Validación robusta de datos
✅ **Manejo de Errores**: Respuestas claras para el frontend

## Configuración Requerida

### 1. Variables de Entorno

Edita el archivo `.env.local` y configura:

```env
# Configuración de Gmail para Nodemailer
GMAIL_USER=tu-email@gmail.com
GMAIL_APP_PASSWORD=nijzwelikfksqqhb
EMAIL_TO=destinatario@gmail.com

# Configuración del servidor
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**IMPORTANTE**: 
- Reemplaza `tu-email@gmail.com` con tu cuenta de Gmail
- Reemplaza `destinatario@gmail.com` con el email donde quieres recibir los formularios
- La clave `nijzwelikfksqqhb` ya está configurada como solicitaste

### 2. Configuración de Gmail

Para usar la clave de aplicación proporcionada:

1. La cuenta de Gmail debe tener habilitada la verificación en 2 pasos
2. La clave `nijzwelikfksqqhb` debe estar configurada como "Contraseña de aplicación"
3. Asegúrate de que la cuenta tenga permisos para enviar emails

## Estructura del Sistema

### Formularios Detectados

1. **Formulario de Contacto**:
   - Campos: name, email, phone, service, message, urgency
   - Envío: JSON via POST
   - Detección: Presencia de campos `service` y `urgency`

2. **Formulario de Carrera**:
   - Campos: name, email, phone, position, education, availability, motivation, references
   - Archivos: CV (requerido), Carta de presentación (opcional)
   - Envío: FormData via POST
   - Detección: Presencia de campos `position` y `motivation`

### API Endpoint

**URL**: `POST /api/forms`

**Respuestas**:
- ✅ Éxito: `{ success: true, message: "...", formType: "contact|career" }`
- ❌ Error: `{ error: "...", details?: [...] }`

## Funcionalidades del Email

### Formulario de Contacto
- Asunto: `Nuevo contacto de [Nombre] - [Servicio]`
- Contenido HTML con secciones organizadas
- Información del cliente, detalles del servicio, mensaje
- Reply-to configurado al email del cliente

### Formulario de Carrera
- Asunto: `Nueva aplicación de carrera de [Nombre] - [Posición]`
- Contenido HTML con información personal y profesional
- Archivos adjuntos (CV y carta de presentación)
- Reply-to configurado al email del aplicante

## Pruebas

Para probar el sistema:

1. Inicia el servidor de desarrollo: `npm run dev`
2. Ve a las páginas con formularios
3. Completa y envía los formularios
4. Verifica que lleguen los emails
5. Revisa la consola del navegador para logs de depuración

## Logs y Depuración

El sistema incluye logs detallados:
- Frontend: Logs en consola del navegador
- Backend: Logs en consola del servidor Next.js
- Errores de validación con detalles específicos

## Seguridad

- Validación de tipos de archivo (PDF, DOC, DOCX)
- Límite de tamaño de archivos (5MB)
- Validación de datos con Zod
- Variables de entorno para credenciales
- Sanitización de contenido HTML

## Migración desde Formspree

Los formularios han sido actualizados para usar el nuevo backend:
- ❌ Removidas dependencias de Formspree
- ✅ Configurado endpoint local `/api/forms`
- ✅ Mantenida toda la funcionalidad existente
- ✅ Mejorado manejo de errores

## Soporte

Si encuentras problemas:
1. Verifica las variables de entorno
2. Revisa los logs del servidor
3. Confirma la configuración de Gmail
4. Verifica que los puertos estén disponibles