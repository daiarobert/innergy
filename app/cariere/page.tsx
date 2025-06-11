// app/cariere/page.tsx
"use client";

import Link from "next/link";
import Hero from "@/components/Hero";

const jobs = [
  {
    id: "operator-date",
    title: "Operator Date",
    location: "Constanța",
    link: "/cariere/operator-date",
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/accounting-clerk.jpeg",
  },
  {
    id: "contabil-junior",
    title: "Contabil Junior",
    location: "Constanța",
    link: "/cariere/contabil-junior",
    image:
      "https://outoftheboxtechnology.com/wp-content/uploads/2023/08/15-types-accountants.png",
  },
];

export default function CareersPage() {
  return (
    <section>
      {/* Hero Section */}
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "https://kronosexperience.com/wp-content/uploads/2021/12/Team-building-promotes-teamwork-which-fosters-success-in-a-business.-Here-is-how-and-why-you-should-be-implementing-team-building..jpeg",
        }}
        text="Hai in echipa!"
      />
      <div className="max-w-6xl mx-auto text-center min-h-screen bg-white md:px-12">
        <h1 className="text-4xl font-bold text-[#3B62ACFF] mb-6">
          Joburi Disponibile
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Vino să faci parte dintr-o echipă tânără, dinamică și implicată.
          Aplică la unul dintre posturile disponibile mai jos.
        </p>

        {/* JOB CARDS */}
        <div className="grid gap-4 grid-cols-2 m-4 mb-12">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={job.link}
              className="relative h-52 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 flex flex-col justify-end p-6">
                  <h2 className="text-white text-2xl font-semibold mb-1">
                    {job.title}
                  </h2>
                  <p className="text-white/80 text-sm">
                    Locație: {job.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* VIDEO SECTION */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full m-3 h-80 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/45D5sutT8WA?si=C5a4kHTa7fk6D5NX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
