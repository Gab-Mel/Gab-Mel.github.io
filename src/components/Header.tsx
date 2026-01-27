import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#top" className="brand">
          GabMel
        </a>

        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#about">Sobre</a>
        </div>
      </nav>
    </header>
  )
}
