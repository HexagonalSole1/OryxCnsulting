import './ProcessStep.css'

export default function ProcessStep({ step }) {
  return (
    <div className="process-step">
      <div className="process-step__number">{step.number}</div>
      <div className="process-step__content">
        <h3 className="process-step__title">{step.title}</h3>
        <p className="process-step__description">{step.description}</p>
      </div>
    </div>
  )
}

