import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import ProcessStep from '../atoms/ProcessStep'
import './ProcessSection.css'

export default function ProcessSection({ processData }) {
  return (
    <Section id="process" variant="default" className="process-section">
      <Container>
        <div className="process-section__header">
          <h2 className="process-section__title">{processData.title}</h2>
          <p className="process-section__subtitle">{processData.subtitle}</p>
        </div>

        <div className="process-section__steps">
          {processData.steps.map((step, index) => (
            <div key={step.id} className="process-section__step-wrapper">
              <ProcessStep step={step} />
              {index < processData.steps.length - 1 && (
                <div className="process-section__connector">
                  <div className="process-section__connector-line" />
                  <div className="process-section__connector-arrow">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

