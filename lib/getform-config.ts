// Configuración de endpoints de Getform
export const GETFORM_ENDPOINTS = {
  // Formulario de contacto general
  CONTACT: 'https://formspree.io/f/mvgbdqle',
  
  // Formulario de carreras con archivos (necesitarás crear otro endpoint en Getform)
  CAREER: 'https://formspree.io/f/xldwalaw', // Temporal - usar el mismo endpoint por ahora
} as const;

// Configuración común para las peticiones con FormData
export const GETFORM_CONFIG = {
  method: 'POST',
  // No incluir Content-Type para que el navegador lo configure automáticamente con FormData
} as const;

// Configuración específica para formularios con archivos
export const GETFORM_FILE_CONFIG = {
  ...GETFORM_CONFIG,
  // FormData maneja automáticamente multipart/form-data
} as const;