// Configuración de endpoints de Getform
export const GETFORM_ENDPOINTS = {
  // Formulario de contacto general
  CONTACT: 'https://getform.io/f/bzygqwoa',
  
  // Formulario de carreras con archivos (necesitarás crear otro endpoint en Getform)
  CAREER: 'https://getform.io/f/bzygqwoa', // Temporal - usar el mismo endpoint por ahora
} as const;

// Configuración común para las peticiones
export const GETFORM_CONFIG = {
  headers: {
    'Accept': 'application/json',
  },
  method: 'POST',
} as const;

// Configuración específica para formularios JSON
export const JSON_FORM_CONFIG = {
  ...GETFORM_CONFIG,
  headers: {
    ...GETFORM_CONFIG.headers,
    'Content-Type': 'application/json',
  },
} as const;