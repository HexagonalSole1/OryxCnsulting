import { useState, useEffect } from 'react'
import ProjectsGrid from '../organisms/ProjectsGrid'
import { ProjectsService } from '../../application/ProjectsService'
import { ProjectsRepository } from '../../infrastructure/ProjectsRepository'
import './ProjectsPage.css'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        const repository = new ProjectsRepository()
        const service = new ProjectsService(repository)
        const projectsData = await service.getAllProjects()
        setProjects(projectsData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <div className="projects-page">
        <div className="projects-page__loading">
          <p>Cargando proyectos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="projects-page__error">
          <p>Error al cargar proyectos: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-page">
      <header className="projects-page__header">
        <h1 className="projects-page__title">Mis Proyectos</h1>
        <p className="projects-page__subtitle">
          Una colección de proyectos que he desarrollado
        </p>
      </header>
      
      <ProjectsGrid projects={projects} />
    </div>
  )
}

