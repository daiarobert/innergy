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
    image: "/animal-allergy.jpg",
    href: "/articole/echilibru-mental",
  },
  {
    id: "3",
    title: "7 lucruri esențiale despre sănătatea colonului",
    image: "/images/hero-3.jpg",
    href: "/articole/wellness-definitie",
  },
  {
    id: "4",
    title: "Dieta săracă în fibre: risc pe termen lung",
    image: "/images/hero-2.jpg",
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
    <section className="py-12 px-4 max-w-7xl mx-auto">
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
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <div className="text-white text-lg font-semibold">
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
