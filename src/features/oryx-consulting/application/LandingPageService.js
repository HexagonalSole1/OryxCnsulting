/**
 * Servicio de aplicación para la landing page
 * Maneja la lógica de negocio relacionada con formularios y CTAs
 */
export class LandingPageService {
  constructor(formSubmissionService) {
    this.formSubmissionService = formSubmissionService
  }

  /**
   * Procesa el envío del formulario de contacto
   */
  async submitContactForm(formData) {
    // Validación básica
    if (!formData.name || !formData.email) {
      throw new Error('Nombre y correo electrónico son requeridos')
    }

    // Enviar formulario
    return await this.formSubmissionService.submit(formData)
  }

  /**
   * Maneja la descarga de caso de estudio
   */
  async downloadCaseStudy() {
    // En una implementación real, esto podría generar un PDF o redirigir a un recurso
    return { success: true, message: 'Caso de estudio descargado' }
  }

  /**
   * Maneja la solicitud de consulta gratuita
   */
  async requestFreeConsultation(formData) {
    return await this.submitContactForm({
      ...formData,
      type: 'consultation'
    })
  }
}

