import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#top" className="brand">
          GM
        </a>

        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  )
}
