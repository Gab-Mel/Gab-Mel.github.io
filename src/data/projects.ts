export type Project = {
  title: string
  description: string
  tech: string[]
  linkGithub: string
  linkSite: string | null
  image: string
}

export const projects: Project[] = [
  {
    title: "Mapa Interativo de Aves",
    description:
      "Visualização geográfica interativa com filtros por espécie, zoom e brush usando D3.",
    tech: ["React", "D3", "TypeScript"],
    linkGithub: "https://github.com/FGV-VIS-2025/tarefa-4-improving_ebirds_views",
    linkSite: "https://fgv-vis-2025.github.io/tarefa-4-improving_ebirds_views/",
    image: "/projects/birds-map.png"
  },
  {
    title: "Rede de Filmes",
    description:
      "Grafo interativo mostrando relações entre filmes e pessoas com filtros dinâmicos.",
    tech: ["Svelte", "D3", "Graph"],
    linkGithub: "https://github.com/FGV-VIS-2025/final-project-cinedive",
    linkSite: "https://fgv-vis-2025.github.io/final-project-cinedive/",
    image: "/projects/film-network.png"
  },
  {
    title: "Bubble Storm",
    description:
      "Mapa iterativo para visualizar e localizar ocorrências registradas pela COR e algumas estatísticas adicionais.",
    tech: ["HTML", "COR", "AEDV"],
    linkGithub: "https://github.com/Gab-Mel/Bubble-Storm?tab=readme-ov-file",
    linkSite: "https://gab-mel.github.io/Bubble-Storm/",
    image: "/projects/bubble-storm.png"
  }
]
