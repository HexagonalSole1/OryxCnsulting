import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      type="button"
    >
      <div className="theme-toggle__track">
        <div className={`theme-toggle__thumb ${isDark ? 'theme-toggle__thumb--dark' : ''}`}>
          <div className="theme-toggle__icon-container">
            <Sun 
              className={`theme-toggle__icon theme-toggle__icon--sun ${!isDark ? 'theme-toggle__icon--active' : ''}`}
              size={18}
              strokeWidth={2.5}
            />
            <Moon 
              className={`theme-toggle__icon theme-toggle__icon--moon ${isDark ? 'theme-toggle__icon--active' : ''}`}
              size={18}
              strokeWidth={2.5}
            />
          </div>
        </div>
        <div className="theme-toggle__background">
          <div className="theme-toggle__stars"></div>
          <div className="theme-toggle__rays"></div>
        </div>
      </div>
    </button>
  )
}

