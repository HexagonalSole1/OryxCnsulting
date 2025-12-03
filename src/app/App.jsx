import { useState } from 'react'
import './App.css'
import ProjectsPage from '../features/projects-showcase/ui/pages/ProjectsPage'
import OryxLandingPage from '../features/oryx-consulting/ui/pages/OryxLandingPage'

function App() {
  const [currentPage, setCurrentPage] = useState('oryx') // 'oryx' o 'portfolio'

  return (
    <div className="app">
      {currentPage === 'oryx' ? (
        <OryxLandingPage />
      ) : (
        <ProjectsPage />
      )}
    </div>
  )
}

export default App

