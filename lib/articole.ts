export type Articol = {
  id: string;
  titlu: string;
  descriere: string;
  imagine: string;
  data: string;
  autor: string;
};

export async function getAllArticles(): Promise<Articol[]> {
  return [
    {
      id: "1",
      titlu: "Puterea probioticelor în echilibrul digestiv",
      descriere:
        "Probioticele joacă un rol esențial în menținerea sănătății intestinale și imunitare. Află cum ajută și de ce sunt importante în viața de zi cu zi.",
      imagine: "/animal-allergy.jpg",
      data: "2025-06-01",
      autor: "Dr. Andreea Popescu",
    },
    {
      id: "2",
      titlu: "Prebioticele: hrana bună pentru bacteriile bune",
      descriere:
        "Prebioticele sunt fibre speciale care stimulează creșterea bacteriilor benefice în intestin. Vezi care sunt cele mai eficiente surse și beneficii.",
      imagine: "/animal-allergy.jpg",
      data: "2025-05-15",
      autor: "Mihai Iliescu",
    },
    {
      id: "3",
      titlu: "Simbiotice: combinația ideală pentru un sistem imunitar puternic",
      descriere:
        "Combinația de probiotice și prebiotice poate aduce beneficii duble. Descoperă cum funcționează și cui sunt recomandate.",
      imagine: "/animal-allergy.jpg",
      data: "2025-05-05",
      autor: "Dr. Elena Mureșan",
    },
    {
      id: "4",
      titlu: "Cum afectează stresul flora intestinală",
      descriere:
        "Stresul cronic are un impact major asupra echilibrului microbiomului intestinal. Învață cum să te protejezi.",
      imagine: "/animal-allergy.jpg",
      data: "2025-04-20",
      autor: "Ioana Dinu",
    },
    {
      id: "5",
      titlu: "Importanța unei alimentații bogate în fibre",
      descriere:
        "Fibrele alimentare ajută la menținerea sănătății intestinale și la echilibrul glicemiei. Iată ce alimente sunt cele mai benefice.",
      imagine: "/animal-allergy.jpg",
      data: "2025-04-01",
      autor: "Dr. Victor Georgescu",
    },
  ];
}
export async function getArticleById(id: string): Promise<Articol | null> {
  const articles = await getAllArticles();
  return articles.find((articol) => articol.id === id) || null;
}
