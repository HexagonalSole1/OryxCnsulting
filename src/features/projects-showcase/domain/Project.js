/**
 * Entidad de dominio: Project
 * Representa un proyecto en el portafolio
 */
export class Project {
  constructor({
    id,
    title,
    description,
    longDescription,
    imageUrl,
    technologies = [],
    liveUrl,
    githubUrl,
    status = 'completed',
    featured = false,
    category = 'web'
  }) {
    this.id = id
    this.title = title
    this.description = description
    this.longDescription = longDescription
    this.imageUrl = imageUrl
    this.technologies = technologies
    this.liveUrl = liveUrl
    this.githubUrl = githubUrl
    this.status = status
    this.featured = featured
    this.category = category
  }

  /**
   * Valida que el proyecto tenga los datos mínimos requeridos
   */
  isValid() {
    return !!(
      this.id &&
      this.title &&
      this.description &&
      (this.liveUrl || this.githubUrl)
    )
  }

  /**
   * Obtiene el estado del proyecto en formato legible
   */
  getStatusLabel() {
    const statusMap = {
      completed: 'Completado',
      inProgress: 'En Progreso',
      planned: 'Planeado'
    }
    return statusMap[this.status] || this.status
  }
}

