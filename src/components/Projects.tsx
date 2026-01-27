import { projects } from "../data/projects"
import "./Projects.css"

export function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-item"
          >
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul>
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <span className="arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
