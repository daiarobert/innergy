"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

const products = [
  {
    name: "RELAX PEACHFUN",
    price: "$1.9",
    color: "text-orange-500",
    image: "/atoprin.png",
    colorBg: "rgba(0, 196, 193, 0.15)",
  },
  {
    name: "Bifido Baby®",
    price: "$1.9",
    color: "text-purple-600",
    image: "/bifido-baby-1-300x300.png",
    colorBg: "rgba(255, 94, 147, 0.15)",
  },
  {
    name: "Bifido Plus®",
    price: "$1.9",
    color: "text-red-500",
    image: "/bifido-plus-2-300x300.png",
    colorBg: "rgba(140, 180, 32, 0.15)",
  },
];

export default function ProductCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1.1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-md p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <span
              className={`inline-block bg-[#3B62ACFF] text-white text-sm font-bold px-3 py-1 rounded-full tracking-wide mb-2 ${anton.className}`}
            >
              Probiotice & Prebiotice
            </span>
            <h2
              className={`text-3xl md:text-4xl font-extrabold uppercase leading-snug ${anton.className}`}
            >
              Alege ce-i mai bun
              <br />
              pentru echilibrul tău interior
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product, i) => (
            <div
              key={i}
              className="keen-slider__slide rounded-xl p-6 text-center"
              style={{
                backgroundColor: product.colorBg,
                boxShadow: `0 4px 14px ${product.colorBg}`,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-52 object-contain mb-6"
              />
              <h3
                className={`text-lg font-bold uppercase tracking-wide ${anton.className}`}
              >
                {product.name}
              </h3>
              {/* <p className={`text-xl font-extrabold ${product.color}`}>
                {product.price}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
