import { skillGroups } from "../data/skills"
import "./Skills.css"

export function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillGroups.map(group => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>

            <ul>
              {group.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
