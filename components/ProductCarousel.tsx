"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Anton, Inter } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "600" });

const products = [
  {
    name: "ATOPRIN",
    price: "$1.9",
    color: "text-orange-500",
    image: "/atoprin.png",
    colorBg: "rgba(0, 196, 193, 0.10)",
    details: [
      {
        title: "Compozitie",
        content:
          "1 capsula ATOPRIN® contine (minim) 2×109 UFC Lactobacillus paracasei LP-33, Lactobacillus paracasei GMNL-133 si 5mcg (200UI) vitamina D3",
      },
      {
        title: "Mecanism de actiune",
        content:
          "Combinatie unica de tulpini probiotice patentate, selectate pentru capacitatea de modulare a raspunsului imun in alergii.\n\nMicrobiota intestinala interactioneaza cu sistemul imun local GALT si moduleaza raspunsul imun. Sistemul imun de tip GALT este un tesutul limfoid asociat tractului gastrointestinal si reprezinta aprox 70% din sistemul imun.\nRinita alergica apare ca urmare a interactiunii dintre raspunsul imun mediat IgE si o retea complexa de celule, mediatori si cytokine. IgE este implicat in inflamatia alergica declansata de un dezechilibru intre raportul celulelor Th1 si Th2 ale imunitatii.\nStudiile clinice au aratat ca Lactobacillus paracasei LP-33 si Lactobacillus paracasei GMNL-133 pot stimula raspunsul imun Th1 si reduc sinteza IgE.",
      },
      {
        title: "Recomandare",
        content:
          "Datele din literatura de specialitate sustin eficienta tulpinilor de Lactobacillus paracasei LP-33 si Lactobacillus paracasei GMNL-133 in:\n\nSuport in reducerea manifestarilor asociate rinitei alergice\nEchilibrarea raspunsului imun prin imbunatatirea raportului Th2/ Th1",
      },
      {
        title: "Mod de administrare",
        content:
          "1 capsula/ zi, utilizare pe termen lung, minimum 30 de zile. Pentru copii mai mari de 6 luni si adulti",
      },
      {
        title: "Precautii",
        content:
          "Pentru copii, continutul capsulei se poate dizolva in alimente si lichide la temperatura ambientala. Se administreaza cu precautie la pacientii imunocompromisi",
      },
    ],
  },
  {
    name: "Bifido Baby®",
    price: "$1.9",
    color: "text-purple-600",
    image: "/bifido-baby-1-300x300.png",
    colorBg: "rgba(255, 94, 147, 0.10)",
    details: [
      { title: "Compozitie", content: "Probiotics, Prebiotics, etc." },
      {
        title: "Mecanism de actiune",
        content: "Mix 1 sachet with water or milk.",
      },
      { title: "Recomandare", content: "Supports gut health for babies." },
    ],
  },
  {
    name: "Bifido Plus®",
    price: "$1.9",
    color: "text-red-500",
    image: "/bifido-plus-2-300x300.png",
    colorBg: "rgba(140, 180, 32, 0.10)",
    details: [
      { title: "Compozitie", content: "Probiotics, Fiber, etc." },
      {
        title: "Mecanism de actiune",
        content: "Take 1 capsule daily with water.",
      },
      { title: "Recomandare", content: "Improves digestion and immunity." },
    ],
  },
];

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[number] | null
  >(null); // Track the selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

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
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel); // Update the current slide index
    },
  });

  interface ProductDetail {
    title: string;
    content: string;
  }

  interface Product {
    name: string;
    price: string;
    color: string;
    image: string;
    colorBg: string;
    details: ProductDetail[];
  }

  const openModal = (product: Product): void => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-white text-black py-8 px-4">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-md p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <span
              className={`inline-block bg-[#3B62ACFF] text-white text-sm font-bold px-3 py-1 rounded-full tracking-wide mb-2 ${inter.className}`}
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
          <div className="hidden md:flex gap-4">
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
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product, i) => (
              <div
                key={i}
                className="keen-slider__slide rounded-xl p-6 text-center relative group"
                style={{
                  backgroundColor: product.colorBg,
                  boxShadow: `0 4px 14px ${product.colorBg}`,
                }}
                onClick={() => openModal(product)} // Open modal on click
              >
                {/* Info Icon */}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <Info className="text-black" size={20} />
                </div>

                {/* Glowing Effect */}
                <div
                  className="absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: product.colorBg,
                  }}
                ></div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 mx-auto h-52 object-contain mb-6"
                />
                <h3
                  className={`text-lg font-bold uppercase tracking-wide relative z-10 ${anton.className}`}
                >
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6">
            {/* Modal Header */}
            <div
              className="rounded-t-xl"
              style={{
                backgroundColor: selectedProduct.colorBg,
              }}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="mx-auto h-40 object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <h3
                className={`text-xl font-bold uppercase mb-4 ${anton.className}`}
              >
                {selectedProduct.name}
              </h3>
              {selectedProduct.details.map((detail, index) => (
                <details
                  key={index}
                  className="mb-4 border-b border-gray-200 pb-2"
                >
                  <summary className="font-semibold cursor-pointer">
                    {detail.title}
                  </summary>
                  <p className="text-sm text-gray-600 mt-2">{detail.content}</p>
                </details>
              ))}
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-[#3B62ACFF] text-white font-semibold rounded-full hover:scale-105 transition"
              >
                Inchide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
