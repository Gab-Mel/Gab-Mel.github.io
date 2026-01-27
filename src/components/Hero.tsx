import "./Hero.css"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Gabriel Melo
        </h1>

        <p className="hero-subtitle">
          Desenvolvedor front-end focado em visualização de dados,
          mapas interativos e interfaces claras.
        </p>

        <p className="hero-description">
          Trabalho com React, D3, TypeScript e web moderna para transformar
          dados complexos em experiências compreensíveis.
        </p>

        <div className="hero-links">
          <a href="#projects">Projetos</a>
          <a
            href="https://github.com/Gab-Mel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </section>
  )
}
