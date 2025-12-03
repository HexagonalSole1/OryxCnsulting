import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import { Cloud, Database, FileSpreadsheet, Award } from 'lucide-react'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import './CertificationsSection.css'

const certifications = [
  {
    id: 1,
    name: 'AWS Cloud Foundations',
    category: 'Cloud',
    icon: Cloud,
    description: 'Arquitectura y fundamentos de AWS'
  },
  {
    id: 2,
    name: 'SQL / Power BI',
    category: 'Data Analytics',
    icon: Database,
    description: 'Gestión y análisis de datos'
  },
  {
    id: 3,
    name: 'Excel Total',
    category: 'Business Intelligence',
    icon: FileSpreadsheet,
    description: 'Análisis financiero avanzado'
  },
  {
    id: 4,
    name: 'SAP Business One',
    category: 'ERP',
    icon: Award,
    description: 'Sistemas empresariales integrados'
  }
]

export default function CertificationsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section id="certifications" variant="default" className="certifications-section">
      <Container>
        <div className="certifications-section__header">
          <h2 className="certifications-section__title">Certificaciones de Alto Nivel</h2>
          <p className="certifications-section__subtitle">
            Credenciales técnicas que respaldan nuestra experiencia y compromiso con la excelencia
          </p>
        </div>

        <div ref={ref} className={`certifications-section__grid ${isVisible ? 'certifications-section__grid--visible' : ''}`}>
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={cert.id}
                className="certifications-section__badge"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="certifications-section__badge-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <div className="certifications-section__badge-content">
                  <h3 className="certifications-section__badge-name">{cert.name}</h3>
                  <p className="certifications-section__badge-category">{cert.category}</p>
                  <p className="certifications-section__badge-description">{cert.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

