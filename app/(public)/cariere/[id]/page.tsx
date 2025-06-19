"use client";
import { useParams, useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import { Briefcase, FileText, List, Gift } from "lucide-react"; // Import iconițe

const jobs = [
  {
    id: "operator-date",
    title: "Operator Date",
    location: "Constanța",
    candidate: [
      "Studii medii sau superioare",
      "Cunoștințe operare și introducere date (Excel, Word)",
      "Abilități foarte bune de comunicare, sociabil, convingător",
      "Organizare, gândire analitică",
      "Atenție la detalii",
      "Loialitate, onestitate",
      "Seriozitate și stabilitate profesională",
    ],
    description: [
      "Operare date, facturare, gestionare, manipulare și livrare mărfuri",
    ],
    responsibilities: [
      "Asistență telefonică a clienților și preluare comenzi",
      "Introducerea datelor noilor clienți în programul de facturare",
      "Întocmirea facturilor",
      "Procesarea și livrarea comenzilor",
      "Manipularea mărfii și pregătirea coletelor",
      "Întocmire rapoarte",
      "Recepționarea mărfii și aranjarea în depozit",
      "Inventarierea mărfii",
    ],
    benefits: [
      "Se oferă un pachet salarial atractiv compus din salariu fix, bonuri de masă și bonusuri ocazionale",
      "Mediu de lucru plăcut în care competențele sunt apreciate",
    ],
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/accounting-clerk.jpeg",
  },
  {
    id: "contabil-junior",
    title: "Contabil Junior",
    location: "Constanța",
    candidate: [
      "Studii superioare",
      "Minim 3 ani experiență pe un job similar",
      "Cunoștințe operare și introducere date (Excel, Word)",
      "Abilități foarte bune de comunicare, sociabil",
      "Organizare, gândire analitică",
      "Atenție la detalii",
      "Loialitate, onestitate",
      "Seriozitate și stabilitate profesională",
    ],
    description: ["Contabilitate"],
    responsibilities: [
      "Înregistrare cronologică documente, înregistrare extrase bancare, registru de casă, deconturi etc",
      "Înregistrare corectă operațiuni financiar-contabile prin respectarea planului de conturi",
      "Verificare corectitudinii și legalității documentelor fiscale",
      "Întocmirea situațiilor și rapoartelor financiare",
      "Arhivarea corectă a documentelor",
      "Verificarea corectitudinii documentelor contabile primite de la furnizori, clienți, colaboratori",
      "Înregistrarea facturilor de furnizori de marfă",
      "Urmărire solduri clienți/furnizori",
    ],
    benefits: [
      "Se oferă un pachet salarial atractiv compus din salariu fix, bonuri de masă și bonusuri ocazionale",
      "Mediu de lucru plăcut în care competențele sunt apreciate",
    ],
    image:
      "https://outoftheboxtechnology.com/wp-content/uploads/2023/08/15-types-accountants.png",
  },
];

const JobDetailsPage = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const router = useRouter(); // For navigation
  const job = jobs.find((job) => job.id === id); // Find the job by ID

  if (!job) {
    return <div className="p-10 text-center">Jobul nu a fost găsit.</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: job.image,
        }}
        text={job.title}
      />

      {/* Job Details Section */}
      <div className="max-w-4xl mx-auto px-4  bg-white">
        <p className="text-lg text-[#3B62ACFF]  mb-4">
          <span className="font-semibold">Locație:</span> {job.location}
        </p>

        {/* Candidate Section */}
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-[#3B62ACFF] w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#3B62ACFF]">
              Candidatul Ideal
            </h3>
          </div>
          <ul className="list-disc pl-6 text-gray-800">
            {job.candidate.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Description Section */}
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-[#3B62ACFF] w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#3B62ACFF]">
              Descrierea Jobului
            </h3>
          </div>
          <ul className="list-disc pl-6 text-gray-800">
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities Section */}
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <List className="text-[#3B62ACFF] w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#3B62ACFF]">
              Atribuții
            </h3>
          </div>
          <ul className="list-disc pl-6 text-gray-800">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="text-[#3B62ACFF] w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#3B62ACFF]">
              Beneficii
            </h3>
          </div>
          <ul className="list-disc pl-6 text-gray-800">
            {job.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Final Message */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">
            Hai în echipa noastră! Trimite CV-ul tău la adresa{" "}
            <span className="font-semibold text-[#3B62ACFF]">
              info@innergy.ro
            </span>
          </p>
        </div>

        {/* Go Back Button */}
        <button
          onClick={() => router.back()} // Go back to the previous page
          className="mt-6 bg-[#3B62ACFF] text-white px-4 py-2 rounded hover:bg-[#3B62ACFF]-800"
        >
          ← Înapoi
        </button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
