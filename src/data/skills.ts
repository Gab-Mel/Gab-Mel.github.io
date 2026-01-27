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
    title: "Visualização de Dados",
    skills: [
      "D3.js",
      "Mapas Interativos",
      "SVG",
      "Canvas",
      "Scrollytelling"
    ]
  },
  {
    title: "Outros",
    skills: [
      "Git",
      "GitHub Pages",
      "Python",
      "Estatística",
      "LaTeX"
    ]
  }
]
