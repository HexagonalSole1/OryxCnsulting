import { useState } from 'react'
import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import TestimonialCard from '../atoms/TestimonialCard'
import Button from '../../../../shared/ui/atoms/Button'
import './TestimonialCarousel.css'

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // No usar carrusel automático - solo manual

  return (
    <Section id="testimonials" variant="gradient" className="testimonial-carousel-section">
      <Container>
        <div className="testimonial-carousel-section__header">
          <h2 className="testimonial-carousel-section__title">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="testimonial-carousel-section__subtitle">
            Empresas que han transformado sus operaciones con nosotros
          </p>
        </div>

        <div className="testimonial-carousel">
          <button 
            className="testimonial-carousel__nav testimonial-carousel__nav--prev"
            onClick={prevTestimonial}
            aria-label="Testimonio anterior"
          >
            ‹
          </button>
          
          <div className="testimonial-carousel__container">
            <div 
              className="testimonial-carousel__track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-carousel__slide">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="testimonial-carousel__nav testimonial-carousel__nav--next"
            onClick={nextTestimonial}
            aria-label="Siguiente testimonio"
          >
            ›
          </button>
        </div>

        <div className="testimonial-carousel__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-carousel__indicator ${index === currentIndex ? 'testimonial-carousel__indicator--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonial-carousel-section__cta">
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => {
              alert('Descargando caso de estudio...')
            }}
          >
            Descargar Caso de Estudio: Reducción de Costos en Logística
          </Button>
        </div>
      </Container>
    </Section>
  )
}

