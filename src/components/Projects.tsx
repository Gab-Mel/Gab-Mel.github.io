import { projects } from "../data/projects"
import "./Projects.css"

export function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>

      <div className="projects-list">
        {projects.map(project => (
          <div key={project.title} className="project-item">
            <div>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-links">
                  <a href={project.linkGithub} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.linkSite && (
                    <a href={project.linkSite} target="_blank" rel="noreferrer">
                      Site
                    </a>
                  )}
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
