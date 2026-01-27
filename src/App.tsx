import { useState } from 'react'
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import './App.css'

function App() {
  const [projectsViewed, setProjectsViewed] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Projects />
        {/* depois vem Projects, About, etc */}
      </div>
    </>
  )
}

export default App
