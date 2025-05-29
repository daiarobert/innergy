import Image from "next/image"; // Import Image from Next.js
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });

const reviews = [
  {
    name: "Alex Popescu",
    text: " Ca mama, am cautat intotdeauna cele mai bune optiuni pentru sanatatea si binele bebelusului meu. In cautarea mea, am descoperit Prebioticele de la Innergy si am ales sa le incerc pentru a sprijini digestia si sistemul imunitar al bebelusului meu. Sunt incantata sa spun ca am observat o imbunatatire semnificativa in confortul intestinal al bebelusului meu si nu numai, tranzitul s-a reglat, scaunele sunt zilnice. Recomand cu incredere Bifido Baby oricarei mame care cauta sa sprijine sanatatea copilului sau.",
    rating: 5,
  },
  {
    name: "Ioana Dobre",
    text: "Cand am mers in vacanta cu copilul meu, nu m-am asteptat sa se confrunte cu probleme de sanatate. Dar, din pacate,fiind in vacanta la mare, copilul meu a dezvoltat o enterocolita, ceea ce a dus la o multime de necazuri si ingrijorari. Dupa consultarea cu medicul pediatru, am inceput sa-i administrez probioticul recomandat si intr-un timp scurt am observat imbunatatiri semnificative in starea lui, scaunele normalizandu-se rapid. Sunt extrem de recunoscatoare medicului pediatru care ne-a recomandat Levurin. Recomand cu incredere produsele lor, iar de acum nu vor lipsi niciodata nici din trusa noastra de vacanta!",
    rating: 5,
  },
  {
    name: "Mihai Ionescu",
    text: "Ca medic endocrinolog si specialist nutritionist, am recomandat cu succes suplimentele prebiotice cu inulina de la Innergy pacientilor mei, stiind ca vor ajuta la sustinerea sanatatii intestinale, la scaderea nivelului de colosterol si pentru a ajuta la reglarea senzatiei de satietate in acelasi timp. Am vazut imbunatatiri semnificative in ceea ce priveste digestia si tranzitul intestinal, precum si in ceea ce priveste nivelul de energie al pacientilor mei. In plus, senzatia de foame a devenit mai usor de controlat, iar poftele s-au redus.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <h2
        className={`text-3xl font-bold text-center text-gray-800 uppercase tracking-wide mb-10 relative ${anton.className}`}
        style={{ fontSize: "40px" }}
      >
        <span className="inline-block relative">
          <span className="z-10 relative ">Recenzii Clienți</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#3b62ac] rounded-full -z-10"></span>
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/floare.svg" // Path to your SVG in the public folder
                  alt="floare"
                  width={40} // Adjust the size as needed
                  height={40}
                />
              ))}
            </div>
            <p className={"text-gray-700 mb-4 italic"}>"{review.text}"</p>
            <p className="text-sm font-semibold text-gray-900">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
