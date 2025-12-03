import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import ServiceCard from '../molecules/ServiceCard'
import './ServicesGrid.css'

export default function ServicesGrid({ services }) {
  return (
    <Section id="services" variant="default" className="services-grid-section">
      <Container>
        <div className="services-grid-section__header">
          <h2 className="services-grid-section__title">
            Soluciones que Transforman
          </h2>
          <p className="services-grid-section__subtitle">
            Servicios diseñados para maximizar eficiencia y ROI
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

