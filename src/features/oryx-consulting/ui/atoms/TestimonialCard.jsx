import Card from '../../../../shared/ui/atoms/Card'
import './TestimonialCard.css'

export default function TestimonialCard({ testimonial }) {
  const stars = '⭐'.repeat(testimonial.rating || 5)
  
  return (
    <Card variant="elevated" className="testimonial-card">
      <div className="testimonial-card__rating">{stars}</div>
      <p className="testimonial-card__content">"{testimonial.content}"</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__author-info">
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__position">
            {testimonial.position}, {testimonial.company}
          </div>
        </div>
      </div>
    </Card>
  )
}

