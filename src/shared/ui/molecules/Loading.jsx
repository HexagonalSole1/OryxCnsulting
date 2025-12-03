import './Loading.css'

export default function Loading({ size = 'medium', variant = 'spinner' }) {
  if (variant === 'skeleton') {
    return (
      <div className="loading-skeleton">
        <div className="loading-skeleton__line loading-skeleton__line--title" />
        <div className="loading-skeleton__line loading-skeleton__line--text" />
        <div className="loading-skeleton__line loading-skeleton__line--text" />
      </div>
    )
  }

  return (
    <div className={`loading loading--${size}`} role="status" aria-label="Cargando">
      <div className="loading__spinner" />
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

