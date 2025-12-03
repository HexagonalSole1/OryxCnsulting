/**
 * Repositorio de proyectos
 * En una aplicación real, esto haría llamadas a una API
 * Por ahora, retorna datos estáticos
 */
export class ProjectsRepository {
  constructor() {
    // Datos estáticos de proyectos
    this.projects = [
      {
        id: 'probecare',
        title: 'Probecare',
        description: 'Aplicación frontend desarrollada con arquitectura moderna',
        longDescription: 'Proyecto frontend desplegado en Railway, implementando mejores prácticas de desarrollo y arquitectura escalable.',
        imageUrl: 'https://via.placeholder.com/600x400/646cff/ffffff?text=Probecare',
        technologies: ['React', 'Vite', 'Railway', 'Frontend'],
        liveUrl: 'https://probecarefront-dev-production.up.railway.app/',
        githubUrl: null,
        status: 'completed',
        featured: true,
        category: 'web'
      }
      // Aquí puedes agregar más proyectos
    ]
  }

  /**
   * Obtiene todos los proyectos
   */
  async findAll() {
    return Promise.resolve(this.projects)
  }

  /**
   * Obtiene un proyecto por ID
   */
  async findById(id) {
    const project = this.projects.find(p => p.id === id)
    return Promise.resolve(project || null)
  }

  /**
   * Agrega un nuevo proyecto
   */
  async create(projectData) {
    const newProject = { ...projectData, id: Date.now().toString() }
    this.projects.push(newProject)
    return Promise.resolve(newProject)
  }
}

