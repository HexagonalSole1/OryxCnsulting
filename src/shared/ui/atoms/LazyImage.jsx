import { useState, useRef, useEffect } from 'react'
import './LazyImage.css'

export default function LazyImage({ 
  src, 
  alt, 
  className = '',
  placeholder = null,
  onLoad,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Cargar 50px antes de que sea visible
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div 
      ref={imgRef} 
      className={`lazy-image ${className} ${isLoaded ? 'lazy-image--loaded' : ''}`}
    >
      {!isLoaded && !hasError && (
        <div className="lazy-image__placeholder">
          {placeholder || <div className="lazy-image__skeleton" />}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`lazy-image__img ${isLoaded ? 'lazy-image__img--loaded' : 'lazy-image__img--loading'}`}
          loading="lazy"
          {...props}
        />
      )}
      {hasError && (
        <div className="lazy-image__error" aria-label="Error al cargar la imagen">
          <span>Imagen no disponible</span>
        </div>
      )}
    </div>
  )
}

