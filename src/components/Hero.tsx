import "./Hero.css"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/me.jpg" alt="Minha foto" />
        </div>

        <h1>Gabriel Melo</h1>

        <p className="hero-subtitle">
          Desenvolvedor front-end focado em visualização de dados,
          mapas interativos e interfaces claras.
        </p>

        <p className="hero-description">
          Trabalho com React, TypeScript e D3 para transformar
          dados complexos em experiências compreensíveis.
        </p>

        <div className="hero-links">
          <a href="#projects">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#about">Sobre</a>
        </div>
      </div>
    </section>

  )
}
