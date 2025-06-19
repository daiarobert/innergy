"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import {
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
  PackageCheck,
  ScrollText,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Ingrediente de calitate premium",
    content:
      "Produse concepute după o atentă selecție de tulpini probiotice și formule prebiotice, susținute de studii științifice, pentru rezultate dovedite clinic.",
    icon: <CheckCircle2 className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Biodisponibilitate & eficiență dovedită",
    content:
      "Dezvoltarea de probiotice și prebiotice utilizând resurse bazate pe suport științific, pentru a asigura viabilitatea tulpinilor și eficiența acestora.",
    icon: <FlaskConical className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Ambalare ce garantează calitatea",
    content:
      "Tipul de ambalare de înaltă precizie garantează stabilitatea, viabilitatea și eficacitatea produselor pe termen lung.",
    icon: <PackageCheck className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Formule unice, patentate și certificate",
    content:
      "Selecție atentă și riguroasă de tulpini probiotice susținute științific, cât și prebiotice cu efecte benefice demonstrate clinic.",
    icon: <ScrollText className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Etică, integritate și responsabilitate",
    content:
      "Comunicăm transparent, respectăm legislația în vigoare și punem pacientul în centrul fiecărei decizii. Ne asumăm responsabilitatea pentru calitatea produselor oferite.",
    icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
  },
];

export default function DespreNoiPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "/despre-noi.jpg",
        }}
        text="Despre noi"
      />

      <main className=" bg-white text-black px-4">
        <div className="max-w-4xl mx-auto ">
          <h1 className="font-anton text-[#3B62AC] text-4xl mb-6 text-center">
            Cine suntem?
          </h1>
          <p className=" text-lg leading-8 mb-6 text-justify">
            Innergy este mai mult decât un brand de suplimente — este un
            angajament față de sănătatea ta. Am pornit cu o misiune clară: să
            oferim produse inovatoare, susținute științific, care contribuie la
            echilibrul și buna funcționare a organismului.
          </p>

          <h2 className="font-anton text-[#3B62AC] text-2xl  mt-10 mb-4">
            De ce existăm
          </h2>
          <p className="text-base leading-7 mb-6 text-justify">
            Într-o lume agitată și plină de factori de stres, credem că
            sănătatea începe din interior. De aceea, am ales să ne concentrăm pe
            probiotice și soluții naturale care susțin sistemul digestiv,
            imunitar și echilibrul general.
          </p>

          <h2 className="font-anton text-[#3B62AC] text-2xl  mt-10 mb-4">
            Ce ne diferențiază
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
            <li className="bg-gray-50 p-4 rounded-lg shadow flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
              <span>Formule create pe baza studiilor clinice</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
              <span>Ingrediente atent selecționate și testate</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
              <span>Producție realizată în laboratoare certificate</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
              <span>Transparență totală în ceea ce oferim</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
              <span>Respect pentru client și nevoile lui reale</span>
            </li>
          </ul>

          <h2 className="font-anton text-[#3B62AC] text-2xl  mt-10 mb-4">
            Viziunea noastră
          </h2>
          <p className="text-base leading-7 text-justify">
            Ne dorim o lume în care fiecare om are acces la produse eficiente,
            sigure și naturale. Credem că viitorul aparține brandurilor care pun
            sănătatea și educația pe primul loc.
          </p>
        </div>

        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-anton text-[#3B62AC] text-3xl  mb-10 text-center">
              Valorile Innergy
            </h2>
            <div className="relative border-l-2 border-blue-500 space-y-8">
              {values.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left text-xl  text-black flex items-center justify-between"
                  >
                    {item.title}
                    <span className="text-blue-500 text-2xl ml-2">
                      {openIndex === index ? "–" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-3 text-gray-600 transition-all duration-300">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
