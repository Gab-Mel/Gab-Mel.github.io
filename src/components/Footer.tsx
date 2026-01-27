import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Gabriel de Melo Lima</span>

        <div className="footer-links">
          <a
            href="https://github.com/Gab-Mel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielmeli-04b781205"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:gabrielmelo.void@gmail.com">
            Email
          </a>
          
        </div>
      </div>
    </footer>
  )
}
