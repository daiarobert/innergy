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
      descriere: `
Microbiomul intestinal
Microbiota intestinala umana este alcatuita din peste 1000 de specii bacteriene. Fiecare dintre noi gazduieste peste 200 de specii, insa fiecare individ detine o combinatie unica de specii bacteriene. Chiar daca microbiota este diferita de la persoana la persoana, flora intestinala indeplineste aceleasi roluri la orice individ sanatos.

Studiile recente concluzioneza ca, in functie de populatiile bacteriene din intestin, oamenii se pot imparti in trei categorii. Asemenea descoperirii celor patru grupe sangvine, care a schimbat esential practica medicala, clasificarea in functie de ecosistemul bacterian predominant la nivelul intestinului ar putea modifica abordarea medicala, de la medicamentele prescrise pana la metode alternative pentru terapia cu antibiotic.

Categoriile de populatii bacteriene intestinale, denumite in literatura de specialitate enterotipuri, au fost identificate in cadrul cercetarilor ce vizau descoperirea unor corelatii intre bacteriile intestinale si afectiunile tractului gastro-intestinal.

Chiar daca s-au stabilit 3 clase bacteriene predominante la nivel intestinal, cercetatorii nu au concluzionat in privinta factorilor care determina dezvoltarea cu precadere a unei clase bacteriene specifice. S-au emis mai mult ipoteze, niciuna nefiind suficient argumentata cu dovezi stiintifice.

Initial s-a crezut ca ecosistemele bacteriene sunt determinate de tipul grupei sangvine. O alta teorie pune in lumina implicarea metabolismului bacterian, mai specific procesele diferite prin care indivizii elimina gazul ce se formeaza in intestin in timpul fermentarii alimentelor, iar flora bacteriana intestinala ar fi direct implicata in aceste procese. Bacteriile cu care intram in contact la inceputul vietii ar putea modela enterotipul fiecaruia, sustine o a treia teorie.

Numele celor 3 clase de enterotipuri sunt date de speciile dominante de bacterii si sunt urmatoarele:

– Bacteroides: bacteriile de acest tip contribuie la descompunerea carbohidratilor astfel incat e posibil ca persoanele ce se incadreaza in aceasta categorie sa aiba probleme de greutatea, sustine Peer Bork, membru al Laboratorului European de biologie moleculara si coautor al studiului

– Prevotella: bacteriile de acest tip au potentialul de a degrada mucoasa intestinala, care are rol de protectie, ceea ce ar putea cauza dureri ale regiunii respective. Acestea produc insa enzimele necesare pentru formarea vitaminei B1.

– Ruminococcus: bacteriile din cea de a treia categorie ajuta la absorbtia glucidelor contribuind la cresterea nivelului glucozei din sange.

Cercetatorii sunt tot mai interesati de studierea microbiomului intestinal deoarece se considera ca genomul florei intestinale cuprinde de 150 de ori mai multe gene decat ADN-ul uman. Daca, pana in anii 80 nu se cunosteau in detaliu aspecte legate de microorganismele gazduite in colon si importanta lor, recent, tot mai multi cercetatori sunt interesati sa exploreze acest domeniu si se descopera implicarea microbiomului in tot mai multe patologii.

Directiile de cercetare vizeaza identificarea dezechilibrelor microbiene care determina aparitia unor patologii severe precum si metodele de manipulare a compozitiei microbiomului.

O patologie careia i se acorda o atentie deosebita este obezitatea, denumita si ” boala secolului”, care afecteaza un numar din ce in ce mai mare de indivizi la nivel mondial si este insotita de complicatii: boli cardiace, diabet, boli metabolice, cancer etc. Tot mai multe studii evidentiaza ca microbiomul pacientului obez se afla in dezechilibru, speciile patogene dominand structura microbiana. Chimistul Dusko Ehrlich afirma ca, in urma studiilor, echipa de cercetare poate sa diagnosticheze cu o acuratete de 80-85% obezitatea, analizand bacteriile intestinale. Pe baza concluziilor studiului, cercetatorii preconizeaza ca, in viitor, medicii vor avea posibilitatea sa abordeze diferite afectiuni ale tractului gastro-intestinal prin manipularea microflorei intestinale. Cercetarile vor aduce din ce in ce mai multe dovezi in acest sens, dar in prezent preocuparea fiecarui individ poate fi aceea de a identifica o solutie eficienta pentru echilibrarea microflorei intestinale.
`,
      imagine: "https://www.nutrific.ro/blog/wp-content/uploads/2023/09/probioticele.png",
      data: "2025-05-15",
      autor: "Mihai Iliescu",
    },
    {
      id: "3",
      titlu: "Simbiotice: combinația ideală pentru un sistem imunitar puternic",
      descriere:
        "Combinația de probiotice și prebiotice poate aduce beneficii duble. Descoperă cum funcționează și cui sunt recomandate.",
      imagine: "https://www.drmax.ro/_i/1811829167.webp?path=https%3A%2F%2Fbackend.drmax.ro%2Fmedia%2Famasty%2Fblog%2FCancer_de_colon.jpg&format=webp",
      data: "2025-05-05",
      autor: "Dr. Elena Mureșan",
    },
    {
      id: "4",
      titlu: "Cum afectează stresul flora intestinală",
      descriere:
        "Stresul cronic are un impact major asupra echilibrului microbiomului intestinal. Învață cum să te protejezi.",
      imagine: "https://dr-olaru.ro/wp-content/uploads/2018/01/dieta-fibre-alimentare-1024x642.jpg",
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
