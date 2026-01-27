export type Project = {
  title: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: "Mapa Interativo de Aves",
    description:
      "Visualização geográfica interativa com filtros por espécie, zoom e brush usando D3.",
    tech: ["React", "D3", "TypeScript"],
    link: "https://github.com/Gab-Mel"
  },
  {
    title: "Rede de Filmes",
    description:
      "Grafo interativo mostrando relações entre filmes e pessoas com filtros dinâmicos.",
    tech: ["Svelte", "D3", "Graph"],
    link: "https://github.com/Gab-Mel"
  },
  {
    title: "Visualização Estatística",
    description:
      "Exploração de dados estatísticos com foco em clareza e storytelling.",
    tech: ["React", "DataViz"],
    link: "https://github.com/Gab-Mel"
  }
]
