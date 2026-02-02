export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Python e C++",
      "Rest APIs",
      "SQL, SQLite e MySQL",
      "NoSQL (MongoDB)"
    ]
  },
  {
    title: "Visualização de Dados",
    skills: [
      "D3.js",
      "Mapas Interativos",
      "SVG e Canvas",
      "Ggplot2, Matplotlib e Seaborn",
      "Scrollytelling"
    ]
  },
  {
    title: "Ferramentas",
    skills: [
      "VS Code",
      "Excel",
      "Jupyter Notebooks",
      "Power BI",
      "RStudio"
    ]
  },
  {
    title: "Metodologias",
    skills: [
      "Scrum",
      "Kanban",
      "XP",
      "UML",
      "Code Review"
    ]
  },
  {
    title: "Outros",
    skills: [
      "Git",
      "GitHub Pages",
      "Machine Learning Básico",
      "Foma",
      "LaTeX"
    ]
  }
]
