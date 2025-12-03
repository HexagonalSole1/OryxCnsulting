import ProjectCard from '../molecules/ProjectCard'
import './ProjectsGrid.css'

export default function ProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="projects-grid__empty">
        <p>No hay proyectos para mostrar</p>
      </div>
    )
  }

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

