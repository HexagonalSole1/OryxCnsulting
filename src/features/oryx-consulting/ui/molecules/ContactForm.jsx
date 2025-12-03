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

    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({})
      setErrors({})
      setTouched({})
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <Section id="contact" variant="gradient" className="contact-form-section">
      <Container>
        <div className="contact-form-section__header">
          <h2 className="contact-form-section__title">{contactData.title}</h2>
          <p className="contact-form-section__subtitle">{contactData.subtitle}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
            <div className="contact-form__success">
              ✓ ¡Gracias! Nos pondremos en contacto contigo pronto.
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

