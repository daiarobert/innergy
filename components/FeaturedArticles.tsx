"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const featured = [
  {
    id: "1",
    title: "Alergii la praf și păr de animale",
    image: "/animal-allergy.jpg",
    href: "/articole/energie-interioara",
  },
  {
    id: "2",
    title: "Probiotice și sănătatea intestinului",
    image:
      "https://www.nutrific.ro/blog/wp-content/uploads/2023/09/probioticele.png",
    href: "/articole/echilibru-mental",
  },
  {
    id: "3",
    title: "7 lucruri esențiale despre sănătatea colonului",
    image:
      "https://www.drmax.ro/_i/1811829167.webp?path=https%3A%2F%2Fbackend.drmax.ro%2Fmedia%2Famasty%2Fblog%2FCancer_de_colon.jpg&format=webp",
    href: "/articole/wellness-definitie",
  },
  {
    id: "4",
    title: "Dieta săracă în fibre: risc pe termen lung",
    image:
      "https://dr-olaru.ro/wp-content/uploads/2018/01/dieta-fibre-alimentare-1024x642.jpg",
    href: "/articole/energie-zilnica",
  },
];

export default function FeaturedArticles() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.5, // Default: 1.5 cards on mobile
      spacing: 16, // Space between cards
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.5, // Show 2.5 cards on tablets
          spacing: 24, // Increase spacing on larger screens
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.5, // Show 3.5 cards on desktop
          spacing: 32, // Increase spacing further on desktop
        },
      },
    },
  });

  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Articole</h2>
        <Link
          href="/articole"
          className="text-[#3B62AC] hover:underline flex items-center"
        >
          Vezi toate →
        </Link>
      </div>
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {featured.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="keen-slider__slide group relative block overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0  flex items-end p-4">
              <div
                className="text-white text-lg font-semibold rounded-3xl px-4 py-2"
                style={{
                  backgroundColor: "#3b62ac6b",
                  backdropFilter: "blur(8px)",
                }}
              >
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
