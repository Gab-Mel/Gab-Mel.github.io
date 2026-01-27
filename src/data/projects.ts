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
    title: "Visualização Estatística",
    description:
      "Exploração de dados estatísticos com foco em clareza e storytelling.",
    tech: ["React", "DataViz"],
    linkGithub: "https://github.com/Gab-Mel",
    linkSite: "https://gab-mel.github.io/statistical-visualization/",
    image: "/projects/stats-viz.png"
  }
]
