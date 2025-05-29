"use client";

import { CheckCircle, Info, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Anton, Inter } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const benefits = [
  {
    text: "Contribuie la echilibrul sistemului imunitar*",
    icon: CheckCircle,
  },
  {
    text: "Susține sănătatea tractului respirator superior*",
    icon: CheckCircle,
  },
  {
    text: "Optimizează absorbția nutrienților*",
    icon: CheckCircle,
  },
  {
    text: "Promovează o digestie echilibrată*",
    icon: CheckCircle,
  },
];

export default function IntroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white text-black py-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Titlu */}
        <h2
          className={`"text-3xl font-bold text-center mb-12 uppercase" ${anton.className}`}
          style={{ fontSize: "35px" }}
        >
          BENEFICII CHEIE
        </h2>

        {/* Grid beneficii */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon
                className="mx-auto mb-4 text-[#3B62ACFF]"
                size={36}
              />
              <p
                className={`"text-md font-medium leading-relaxed" ${inter.className}`}
              >
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Despre noi: dropdown pe mobil, deschis pe desktop */}
        <div className="bg-[#3B62ACFF] rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Header vizibil mereu */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-6 py-4 md:cursor-default md:pointer-events-none"
          >
            <div className="flex items-center gap-3">
              <Info className="text-white" size={28} />
              <h3 className={"text-lg font-semibold text-white"}>Despre noi</h3>
            </div>
            <span className="md:hidden">
              {open ? (
                <Minus className="text-white" size={20} />
              ) : (
                <Plus className="text-white" size={20} />
              )}
            </span>
          </button>

          {/* Conținut */}
          <div
            className={`transition-all duration-300 px-6 pb-6 md:pb-8 ${
              open
                ? "max-h-[1000px] opacity-100 block"
                : "max-h-0 opacity-0 hidden"
            } md:max-h-none md:opacity-100`}
          >
            <div
              className={`"flex flex-col md:flex-row items-start gap-6 ${inter.className}"`}
            >
              <div className="flex-shrink-0 hidden md:block">
                <Info className="text-[#3B62ACFF]" size={40} />
              </div>
              <div>
                <p className="text-base leading-relaxed mb-3 text-white">
                  Cu aproape 15 ani de experiență în studiul prebioticelor,
                  probioticelor și simbioticelor, Innergy aduce în România
                  soluții inovatoare pentru echilibrarea microbiotei intestinale
                  și orale. Colaborăm cu lideri globali în biotehnologie pentru
                  a îmbunătăți calitatea vieții celor care se confruntă cu
                  dezechilibre gastrointestinale, metabolice sau imunitare.
                </p>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline transition"
                >
                  Citește mai mult →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
