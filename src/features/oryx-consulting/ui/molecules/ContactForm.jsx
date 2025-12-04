import { useState } from 'react'
import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import Button from '../../../../shared/ui/atoms/Button'
import './ContactForm.css'

export default function ContactForm({ contactData }) {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Validación en tiempo real
  const validateField = (id, value, field) => {
    const newErrors = { ...errors }
    
    if (field.required && !value.trim()) {
      newErrors[id] = 'Este campo es requerido'
    } else if (id === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        newErrors[id] = 'Ingrese un correo electrónico válido'
      } else {
        delete newErrors[id]
      }
    } else if (id === 'phone' && value) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/
      if (!phoneRegex.test(value)) {
        newErrors[id] = 'Ingrese un número de teléfono válido'
      } else {
        delete newErrors[id]
      }
    } else {
      delete newErrors[id]
    }
    
    setErrors(newErrors)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    const field = contactData.formFields.find(f => f.id === id)
    
    setFormData(prev => ({ ...prev, [id]: value }))
    
    if (touched[id]) {
      validateField(id, value, field)
    }
  }

  const handleBlur = (e) => {
    const { id, value } = e.target
    const field = contactData.formFields.find(f => f.id === id)
    
    setTouched(prev => ({ ...prev, [id]: true }))
    validateField(id, value, field)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar todos los campos requeridos
    const newErrors = {}
    const newTouched = {}
    contactData.formFields.forEach(field => {
      newTouched[field.id] = true
      if (field.required && !formData[field.id]?.trim()) {
        newErrors[field.id] = 'Este campo es requerido'
      }
    })
    
    setTouched(newTouched)
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length > 0) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Intentar enviar con EmailJS primero (método preferido)
      const emailjsConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
      
      // Si EmailJS está configurado, usarlo
      if (emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey) {
        try {
          const emailjs = await import('@emailjs/browser')
          
          // Preparar los parámetros del template
          const templateParams = {
            from_name: formData.name || 'Cliente',
            from_email: formData.email || 'No proporcionado',
            company: formData.company || 'No proporcionado',
            phone: formData.phone || 'No proporcionado',
            message: formData.message || 'Sin mensaje adicional',
            to_email: 'deskrun@gmail.com',
            to_phone: '+525591392919',
            subject: `Consulta desde OryxCnsulting - ${formData.name || 'Cliente'}`,
            reply_to: formData.email || 'deskrun@gmail.com'
          }
          
          // Enviar el email usando la API de EmailJS
          const response = await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            templateParams,
            emailjsConfig.publicKey
          )
          
          // Si EmailJS funciona, mostrar éxito
          if (response.status === 200) {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({})
            setErrors({})
            setTouched({})
            
            setTimeout(() => {
              setSubmitStatus(null)
            }, 5000)
            return
          }
        } catch (emailjsError) {
          console.error('Error al enviar con EmailJS:', emailjsError)
          // Continuar con mailto como fallback
        }
      }
      
      // Fallback: usar mailto si EmailJS no está configurado o falló
      const emailSubject = encodeURIComponent(`Consulta desde OryxCnsulting - ${formData.name || 'Cliente'}`)
      
      let emailBody = `Hola,\n\nHe completado el formulario de contacto en OryxCnsulting.\n\n`
      emailBody += `Datos de contacto:\n`
      emailBody += `Nombre: ${formData.name || 'No proporcionado'}\n`
      emailBody += `Email: ${formData.email || 'No proporcionado'}\n`
      if (formData.company) emailBody += `Empresa: ${formData.company}\n`
      if (formData.phone) emailBody += `Teléfono: ${formData.phone}\n`
      if (formData.message) {
        emailBody += `\nMensaje:\n${formData.message}\n`
      }
      emailBody += `\n---\nEste mensaje fue enviado desde el formulario de contacto de OryxCnsulting.`
      
      const emailBodyEncoded = encodeURIComponent(emailBody)
      const recipientEmail = 'deskrun@gmail.com'
      
      // Crear el enlace mailto
      const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBodyEncoded}`
      
      // Abrir el cliente de email
      window.location.href = mailtoLink
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({})
      setErrors({})
      setTouched({})
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <Section id="contact" variant="gradient" className="contact-form-section">
      <Container>
        <div className="contact-form-section__header">
          <h2 className="contact-form-section__title">{contactData.title}</h2>
          <p className="contact-form-section__subtitle">{contactData.subtitle}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__grid">
            {contactData.formFields.map(field => (
              <div 
                key={field.id} 
                className={`contact-form__field ${field.type === 'textarea' ? 'contact-form__field--full' : ''}`}
              >
                <label htmlFor={field.id} className="contact-form__label">
                  {field.label}
                  {field.required && <span className="contact-form__required">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <>
                    <textarea
                      id={field.id}
                      className={`contact-form__input contact-form__input--textarea ${errors[field.id] ? 'contact-form__input--error' : ''} ${touched[field.id] && !errors[field.id] && formData[field.id] ? 'contact-form__input--valid' : ''}`}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      aria-invalid={errors[field.id] ? 'true' : 'false'}
                      aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    />
                    {errors[field.id] && (
                      <span id={`${field.id}-error`} className="contact-form__error" role="alert">
                        {errors[field.id]}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <input
                      id={field.id}
                      type={field.type}
                      className={`contact-form__input ${errors[field.id] ? 'contact-form__input--error' : ''} ${touched[field.id] && !errors[field.id] && formData[field.id] ? 'contact-form__input--valid' : ''}`}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors[field.id] ? 'true' : 'false'}
                      aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    />
                    {errors[field.id] && (
                      <span id={`${field.id}-error`} className="contact-form__error" role="alert">
                        {errors[field.id]}
                      </span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {submitStatus === 'success' && (
            <div className="contact-form__success" role="alert">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              ¡Gracias! Tu consulta ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="contact-form__error-message" role="alert">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente a <a href="mailto:deskrun@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>deskrun@gmail.com</a>
            </div>
          )}

          <div className="contact-form__submit">
            <Button 
              type="submit"
              variant="accent" 
              size="large"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  )
}

