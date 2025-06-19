"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import ProductCarouselHeader from "./ProductCarouselHeader";
import ProductSlide from "./ProductSlide";
import ProductModal from "./ProductModal";

const products = [
  {
    name: "ATOPRIN",
    price: "$1.9",
    color: "text-orange-500",
    image: "/28.png",
    colorBg: "white",
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
    image: "/27.png",
    colorBg: "white",
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
    image: "/29.png",
    colorBg: "white",
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
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1.2, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    dragStarted: () => setIsDragging(true),
    dragEnded: () => setIsDragging(false),
  });

  const openModal = (product: any): void => {
    if (!isDragging) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-white text-[#3b62ac] py-8 px-4">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-md p-8 md:p-12">
        {/* Header */}
        <ProductCarouselHeader instanceRef={instanceRef} />

        {/* Carousel */}
        <div className="relative ">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product, i) => (
              <ProductSlide
                key={i}
                product={product}
                onClick={() => openModal(product)}
                isFirst={i === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
}
