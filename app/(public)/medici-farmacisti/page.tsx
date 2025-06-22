
"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { ClipboardEdit, MailCheck, FileText, LogIn } from "lucide-react";

const cards = [
  {
    icon: <ClipboardEdit size={40} className="text-white" />,
    title: "Solicită vizita unui reprezentant Innergy",
    description:
      "Completează formularul pentru a primi vizita unui reprezentant specializat din echipa Innergy.",
    link: "/medici-farmacisti/vizita",
    cta: "Solicită Vizita",
  },
  {
    icon: <MailCheck size={40} className="text-white" />,
    title: "Abonează-te la newsletter dedicat specialiștilor",
    description:
      "Fii la curent cu cele mai recente noutăți din domeniu, direct în inbox-ul tău.",
    link: "/medici-farmacisti/newsletter",
    cta: "Abonează-te",
  },
  {
    icon: <FileText size={40} className="text-white" />,
    title: "Articole",
    description:
      "Explorează articolele medicale și materiale utile pregătite special pentru profesioniști.",
    link: "/medici-farmacisti/articole",
    cta: "Citește Articolele",
  },
  {
    icon: <LogIn size={40} className="text-white" />,
    title: "Accesează Contul",
    description:
      "Autentifică-te în contul tău pentru a accesa resurse exclusive pentru specialiști.",
    link: "/medici-farmacisti/login",
    cta: "Autentifică-te",
  },
];

export default function MediciFarmacistiPage() {
  return (
    <div>
        <Hero
                height="60vh"
                media={{
                  type: "image",
                  src: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg",
                }}
                text="Medici și Farmaciști"
              />
      <h1 className="text-3xl md:text-4xl text-center font-bold font-anton text-[#3b62ac] mb-12">
        Pentru Medici și Farmaciști
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-[#4d72b8db] flex items-center justify-center mb-6 shadow-lg">
              {/* <Image
                src={card.icon}
                alt={card.title}
                width={50}
                height={50}
                className="invert"
              /> */}
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#3b62ac] mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4 px-2">{card.description}</p>
            <Link
              href={card.link}
              className="mt-auto inline-block border border-[#4d72b8db] text-[#3b62ac] px-5 py-2 rounded-lg hover:bg-[#4d72b8db] hover:text-white transition"
            >
              {card.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
