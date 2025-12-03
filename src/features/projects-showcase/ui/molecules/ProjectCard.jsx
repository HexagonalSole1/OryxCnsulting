import Card from '../../../../shared/ui/atoms/Card'
import Button from '../../../../shared/ui/atoms/Button'
import Tag from '../../../../shared/ui/atoms/Tag'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      {project.imageUrl && (
        <div className="project-card__image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}
      
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <Tag variant={project.status === 'completed' ? 'success' : 'warning'}>
            {project.getStatusLabel()}
          </Tag>
        </div>
        
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__technologies">
          {project.technologies.map((tech, index) => (
            <Tag key={index} variant="default">
              {tech}
            </Tag>
          ))}
        </div>
        
        <div className="project-card__actions">
          {project.liveUrl && (
            <Button 
              variant="primary" 
              size="small"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Ver Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              variant="secondary" 
              size="small"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              Código
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

