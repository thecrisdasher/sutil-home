# Guía de Solución de Problemas - Formspree

## Problemas Comunes y Soluciones

### 1. Los correos no se están enviando

#### Verificaciones necesarias:

1. **Verificar endpoints en Formspree:**
   - Formulario de contacto: `mvgbdqle`
   - Formulario de carreras: `xbjezqko`

2. **Verificar configuración en Formspree.io:**
   - Acceder a https://formspree.io/forms
   - Verificar que ambos formularios estén activos
   - Confirmar que el email de destino esté configurado
   - Verificar que no haya restricciones de dominio

3. **Verificar en la consola del navegador:**
   - Abrir DevTools (F12)
   - Ir a la pestaña Console
   - Enviar un formulario y verificar los logs:
     - `Response status: 200` (éxito)
     - `Success response: {ok: true}`
   - Si hay errores, verificar el mensaje específico

### 2. Problemas con archivos PDF

#### Para el formulario de carreras:
- Verificar que el endpoint `xbjezqko` esté configurado para aceptar archivos
- Límite de tamaño: 5MB por archivo
- Tipos permitidos: PDF, DOC, DOCX

### 3. Configuración de CORS

Si hay errores de CORS:
1. Verificar que el dominio esté permitido en Formspree
2. Para desarrollo local, agregar `localhost:3000`, `localhost:3001`, `localhost:3002`

### 4. Verificar configuración de email

1. **En Formspree:**
   - Verificar que el email de destino esté confirmado
   - Revisar la carpeta de spam
   - Verificar configuración de notificaciones

2. **Campos requeridos:**
   - `name`: Nombre del contacto
   - `email`: Email del contacto
   - `_subject`: Asunto personalizado

### 5. Debugging paso a paso

1. **Abrir la consola del navegador**
2. **Llenar y enviar el formulario**
3. **Verificar los logs:**
   ```
   Response status: 200
   Response headers: Headers {}
   Success response: {ok: true}
   ```

4. **Si el status no es 200:**
   - 400: Error en los datos enviados
   - 403: Problema de permisos/CORS
   - 422: Error de validación
   - 500: Error del servidor de Formspree

### 6. Contacto con soporte

Si los problemas persisten:
1. Documentar los logs de la consola
2. Verificar la configuración en Formspree.io
3. Contactar soporte de Formspree con los detalles específicos

## Endpoints Actuales

- **Contacto:** https://formspree.io/f/mvgbdqle
- **Carreras:** https://formspree.io/f/xbjezqko

## Archivos Modificados

- `components/forms/contact-form.tsx`
- `components/forms/career-form.tsx`
- `lib/formspree-config.ts`