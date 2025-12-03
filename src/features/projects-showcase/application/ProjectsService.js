import { Project } from '../domain/Project'

/**
 * Servicio de aplicación para gestionar proyectos
 */
export class ProjectsService {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository
  }

  /**
   * Obtiene todos los proyectos
   */
  async getAllProjects() {
    const projectsData = await this.projectsRepository.findAll()
    return projectsData.map(data => new Project(data))
  }

  /**
   * Obtiene un proyecto por ID
   */
  async getProjectById(id) {
    const projectData = await this.projectsRepository.findById(id)
    return projectData ? new Project(projectData) : null
  }

  /**
   * Obtiene proyectos destacados
   */
  async getFeaturedProjects() {
    const allProjects = await this.getAllProjects()
    return allProjects.filter(project => project.featured)
  }

  /**
   * Obtiene proyectos por categoría
   */
  async getProjectsByCategory(category) {
    const allProjects = await this.getAllProjects()
    return allProjects.filter(project => project.category === category)
  }
}

