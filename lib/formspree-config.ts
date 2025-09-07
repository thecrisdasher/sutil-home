// Configuración de endpoints de Formspree
export const FORMSPREE_ENDPOINTS = {
  // Formulario de contacto general
  CONTACT: 'https://formspree.io/f/mvgbdqle',
  
  // Formulario de carreras con archivos
  CAREER: 'https://formspree.io/f/xldwalaw',
} as const;

// Configuración común para las peticiones
export const FORMSPREE_CONFIG = {
  headers: {
    'Accept': 'application/json',
  },
  method: 'POST',
} as const;

// Configuración específica para formularios JSON
export const JSON_FORM_CONFIG = {
  ...FORMSPREE_CONFIG,
  headers: {
    ...FORMSPREE_CONFIG.headers,
    'Content-Type': 'application/json',
  },
} as const;