import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [projectsViewed, setProjectsViewed] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Gabriel Melo</h1>
      <p className="read-the-docs">
        Desenvolvedor Front-end • React • TypeScript • Visualização de Dados
      </p>

      <div className="card">
        <button onClick={() => setProjectsViewed((v) => v + 1)}>
          projetos vistos: {projectsViewed}
        </button>

        <p>
          Este portfólio foi feito com <code>React + Vite + TypeScript</code>
        </p>
      </div>

      <p className="read-the-docs">
        GitHub · LinkedIn · Email
      </p>
    </>
  )
}

export default App
