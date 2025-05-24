"use client";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full  bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://www.innergy.ro/wp-content/uploads/2023/06/Innergy-Slideshow-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Wavy bottom transition */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 z-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,224C840,213,960,203,1080,213.3C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className={`text-4xl md:text-6xl font-bold uppercase tracking-wide ${playfair.className}`}
        >
          Echilibrul începe din interior
        </h1>
        <p className={`"mt-4 text-lg md:text-xl max-w-2xl" ${inter.className}`}>
          Mai multă energie. Mai multă stare de bine.
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-14 mt-10 text-white animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            fill="none" // ✅ explicitly no fill here
          />
        </svg>
      </div>
    </section>
  );
}
