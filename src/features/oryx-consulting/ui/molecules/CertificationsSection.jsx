import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import { Cloud, Database, FileSpreadsheet, Award, Shield, Zap } from 'lucide-react'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import Card from '../../../../shared/ui/atoms/Card'
import './CertificationsSection.css'

const certifications = [
  {
    id: 1,
    name: 'AWS Cloud Foundations',
    category: 'Cloud Architecture',
    icon: Cloud,
    description: 'Certificación en arquitectura y fundamentos de AWS. Especialización en infraestructura cloud escalable y segura.',
    level: 'Professional',
    verified: true
  },
  {
    id: 2,
    name: 'SQL / Power BI',
    category: 'Data Analytics',
    icon: Database,
    description: 'Certificación en gestión y análisis de datos. Transformación de datos en insights accionables para decisiones estratégicas.',
    level: 'Advanced',
    verified: true
  },
  {
    id: 3,
    name: 'Excel Total',
    category: 'Business Intelligence',
    icon: FileSpreadsheet,
    description: 'Certificación en análisis financiero avanzado. Modelado de datos y análisis predictivo para finanzas y logística.',
    level: 'Expert',
    verified: true
  },
  {
    id: 4,
    name: 'SAP Business One',
    category: 'ERP Systems',
    icon: Award,
    description: 'Certificación en sistemas empresariales integrados. Implementación y optimización de soluciones ERP para empresas medianas.',
    level: 'Professional',
    verified: true
  }
]

const cloudCertifications = [
  {
    id: 5,
    name: 'AWS Certified',
    category: 'Cloud Provider',
    icon: Cloud,
    description: 'Certificación oficial de Amazon Web Services. Especialización en arquitectura, seguridad y optimización de infraestructura cloud.',
    level: 'Certified',
    verified: true
  },
  {
    id: 6,
    name: 'Azure Certified',
    category: 'Cloud Provider',
    icon: Shield,
    description: 'Certificación oficial de Microsoft Azure. Experiencia en soluciones cloud empresariales y servicios de Microsoft.',
    level: 'Certified',
    verified: true
  },
  {
    id: 7,
    name: 'Google Cloud Certified',
    category: 'Cloud Provider',
    icon: Zap,
    description: 'Certificación oficial de Google Cloud Platform. Dominio en servicios cloud de Google y arquitecturas escalables.',
    level: 'Certified',
    verified: true
  }
]

export default function CertificationsSection() {
  const [certRef, isCertVisible] = useIntersectionObserver({ threshold: 0.2 })
  const [partnerRef, isPartnerVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section id="certifications" variant="light" className="certifications-section">
      <Container>
        <div className="certifications-section__header">
          <h2 className="certifications-section__title">Certificaciones de Alto Nivel</h2>
          <p className="certifications-section__subtitle">
            Credenciales técnicas oficiales que respaldan nuestra experiencia y compromiso con la excelencia
          </p>
        </div>

        {/* Certificaciones Técnicas */}
        <div className="certifications-section__group">
          <h3 className="certifications-section__group-title">Certificaciones Técnicas</h3>
          <div ref={certRef} className={`certifications-section__grid ${isCertVisible ? 'certifications-section__grid--visible' : ''}`}>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card
                  key={cert.id}
                  variant="neumorphic"
                  interactive
                  className="certifications-section__badge"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="certifications-section__badge-header">
                    <div className="certifications-section__badge-icon">
                      <IconComponent size={36} strokeWidth={1.5} />
                    </div>
                    {cert.verified && (
                      <div className="certifications-section__verified-badge">
                        <Shield size={14} />
                        <span>Verificado</span>
                      </div>
                    )}
                  </div>
                  <div className="certifications-section__badge-content">
                    <h3 className="certifications-section__badge-name">{cert.name}</h3>
                    <div className="certifications-section__badge-meta">
                      <span className="certifications-section__badge-category">{cert.category}</span>
                      <span className="certifications-section__badge-level">{cert.level}</span>
                    </div>
                    <p className="certifications-section__badge-description">{cert.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Certificaciones Cloud */}
        <div className="certifications-section__group">
          <h3 className="certifications-section__group-title">Certificaciones Cloud</h3>
          <div ref={partnerRef} className={`certifications-section__grid certifications-section__grid--partners ${isPartnerVisible ? 'certifications-section__grid--visible' : ''}`}>
            {cloudCertifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card
                  key={cert.id}
                  variant="neumorphic"
                  interactive
                  className="certifications-section__badge certifications-section__badge--partner"
                  style={{ animationDelay: `${(certifications.length + index) * 100}ms` }}
                >
                  <div className="certifications-section__badge-header">
                    <div className="certifications-section__badge-icon certifications-section__badge-icon--partner">
                      <IconComponent size={40} strokeWidth={1.5} />
                    </div>
                    {cert.verified && (
                      <div className="certifications-section__verified-badge certifications-section__verified-badge--partner">
                        <Shield size={14} />
                        <span>Certificado</span>
                      </div>
                    )}
                  </div>
                  <div className="certifications-section__badge-content">
                    <h3 className="certifications-section__badge-name">{cert.name}</h3>
                    <div className="certifications-section__badge-meta">
                      <span className="certifications-section__badge-category">{cert.category}</span>
                      <span className="certifications-section__badge-level">{cert.level}</span>
                    </div>
                    <p className="certifications-section__badge-description">{cert.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

