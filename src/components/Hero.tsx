import "./Hero.css"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/me.jpg" alt="Minha foto" />
        </div>

        <h1>Gabriel de Melo Lima</h1>

        <p className="hero-subtitle">
          Desenvolvedor front-end focado em visualização de dados,
          mapas interativos e interfaces claras.
        </p>

        <p className="hero-description">
          Trabalho com React, TypeScript e D3 para transformar
          dados complexos em experiências compreensíveis.
        </p>

        <div className="hero-links">
          <a
            href="https://github.com/Gab-Mel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielmeli-04b781205"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href="mailto:gabrielmelo.void@gmail.com"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>

  )
}
