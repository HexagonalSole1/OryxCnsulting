# Template de EmailJS Listo para Copiar y Pegar

## 📧 Template Completo para EmailJS

Copia y pega este contenido exactamente en el editor de EmailJS:

### Asunto (Subject):
```
Consulta desde OryxCnsulting - {{from_name}}
```

### Contenido del Email (Content):
```
Nueva consulta recibida desde el formulario de contacto de OryxCnsulting.

═══════════════════════════════════════════════════════
DATOS DEL CLIENTE
═══════════════════════════════════════════════════════

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Teléfono: {{phone}}

═══════════════════════════════════════════════════════
MENSAJE
═══════════════════════════════════════════════════════

{{message}}

═══════════════════════════════════════════════════════

Este mensaje fue enviado automáticamente desde el formulario de contacto de OryxCnsulting.

Para responder al cliente, simplemente responde a este correo.
El email de respuesta será: {{reply_to}}
```

### Configuración Adicional:

**To Email (Destinatario):**
```
deskrun@gmail.com
```

**From Name (Nombre del Remitente):**
```
{{from_name}}
```

**Reply To (Responder a):**
```
{{reply_to}}
```

---

## 🔍 Dónde Encontrar los IDs

### 1. Service ID (ID del Servicio)

**Ubicación:** Dashboard → Email Services → Tu servicio Gmail

**Cómo encontrarlo:**
1. Ve a **Email Services** en el menú lateral
2. Haz clic en el servicio que creaste (Gmail)
3. Verás el **Service ID** en la parte superior o en la configuración
4. Se ve así: `service_abc123xyz`
5. **Cópialo completo**

### 2. Template ID (ID del Template)

**Ubicación:** Dashboard → Email Templates → Tu template

**Cómo encontrarlo:**
1. Ve a **Email Templates** en el menú lateral
2. Haz clic en el template que creaste
3. Verás el **Template ID** en la parte superior o en la URL
4. Se ve así: `template_abc123xyz`
5. **Cópialo completo**

### 3. Public Key (Clave Pública)

**Ubicación:** Dashboard → Account → General → API Keys

**Cómo encontrarlo:**
1. Haz clic en tu nombre/avatar en la esquina superior derecha
2. Selecciona **Account** o **Settings**
3. Ve a la pestaña **General**
4. Busca la sección **API Keys** o **Public Key**
5. Verás una cadena larga de letras y números
6. **Cópialo completo** (es largo, asegúrate de copiarlo todo)

---

## 📋 Checklist de Configuración

Marca cada paso cuando lo completes:

- [ ] Creé cuenta en EmailJS
- [ ] Configuré servicio Gmail y obtuve Service ID
- [ ] Creé template con el contenido de arriba
- [ ] Configuré "To Email" como `deskrun@gmail.com`
- [ ] Configuré "From Name" como `{{from_name}}`
- [ ] Configuré "Reply To" como `{{reply_to}}`
- [ ] Publiqué el template (no está en draft)
- [ ] Obtuve Template ID
- [ ] Obtuve Public Key desde Account → General
- [ ] Creé archivo `.env` en la raíz del proyecto
- [ ] Agregué las 3 variables al archivo `.env`
- [ ] Reinicié el servidor (`pnpm dev`)
- [ ] Probé el formulario y recibí el correo

---

## ⚠️ Errores Comunes

### "No puedo encontrar el Service ID"
- Asegúrate de haber creado y guardado el servicio
- El Service ID aparece después de guardar el servicio
- Si no lo ves, intenta editar el servicio y guardarlo de nuevo

### "No puedo encontrar el Template ID"
- Asegúrate de haber guardado el template
- El Template ID aparece en la URL cuando editas el template
- También aparece en la lista de templates

### "No puedo encontrar la Public Key"
- Ve a Account → General (no Settings)
- Busca la sección "API Keys" o "Public Key"
- Si no la ves, puede que necesites verificar tu cuenta primero

### "El template no envía correos"
- Verifica que el template esté **Published** (Publicado), no en Draft
- Revisa que "To Email" sea exactamente `deskrun@gmail.com`
- Verifica que todos los campos del template usen la sintaxis `{{campo}}`

---

## 🎯 Ejemplo de Archivo .env Final

Tu archivo `.env` debería verse así (con tus valores reales):

```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz123456
```

**IMPORTANTE:**
- No uses comillas
- No dejes espacios alrededor del `=`
- Cada variable en una línea separada
- Reemplaza los valores de ejemplo con tus valores reales

---

## ✅ Verificación Final

Después de configurar todo:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Envía el formulario
4. Deberías ver un mensaje de éxito
5. Revisa `deskrun@gmail.com` - deberías recibir el correo

Si ves errores en la consola, cópialos y revisa la sección de solución de problemas en `GUIA_EMAILJS_PASO_A_PASO.md`.

