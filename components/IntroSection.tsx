"use client";

import { CheckCircle, Info } from "lucide-react";

const benefits = [
  "Contribuie la echilibrul sistemului imunitar*",
  "Susține sănătatea tractului respirator superior*",
  "Optimizează absorbția nutrienților*",
  "Promovează o digestie echilibrată*",
];

export default function IntroSection() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      {/* GRID CU BENEFICII */}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Beneficii cheie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="text-purple-600 mt-1" />
              <p className="text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* DESPRE NOI */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <div className="flex items-start gap-4">
            <Info className="text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Despre noi</h3>
              <p className="text-base leading-relaxed mb-2">
                Cu aproape 15 ani de experiență în studiul prebioticelor,
                probioticelor și simbioticelor, Innergy aduce în România soluții
                inovatoare pentru echilibrarea microbiotei intestinale și orale.
                Colaborăm cu lideri globali în biotehnologie pentru a îmbunătăți
                calitatea vieții celor care se confruntă cu dezechilibre
                gastrointestinale, metabolice sau imunitare.
              </p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline transition"
              >
                Citește mai mult →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
