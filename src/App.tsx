import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      
      <Header />
      <div>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Footer />
        {/* depois vem Projects, About, etc */}
      </div>
    </>
  )
}

export default App
