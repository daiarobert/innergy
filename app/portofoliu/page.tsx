// filepath: /c:/Users/daiar/Desktop/innergy/your-project-name/app/produse/page.tsx
"use client";
import Hero from "@/components/Hero";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";
import PartnerCarousel from "@/components/PartnersCarousel";
import Newsletter from "@/components/Newsletter";
import FeaturedArticles from "@/components/FeaturedArticles";

const products = [
  {
    name: "ATOPRIN",
    price: "$1.9",
    image: "/28.png",
    color: "text-orange-500",
    details: [
      {
        title: "Compozitie",
        content:
          "1 capsula ATOPRIN® contine (minim) 2×10⁹ UFC Lactobacillus paracasei LP-33, GMNL-133 și 5mcg vitamina D3.",
      },
      {
        title: "Mecanism de actiune",
        content:
          "Combinatie unica de tulpini probiotice patentate, selectate pentru modularea răspunsului imun în alergii.",
      },
    ],
  },
  {
    name: "Bifido Baby®",
    price: "$1.9",
    image: "/27.png",
    color: "text-purple-600",
    details: [
      { title: "Compozitie", content: "Probiotics, Prebiotics, etc." },
      {
        title: "Mecanism de actiune",
        content: "Mix 1 sachet with water or milk.",
      },
    ],
  },
  {
    name: "Bifido Plus®",
    price: "$1.9",
    image: "/29.png",
    color: "text-red-500",
    details: [
      { title: "Compozitie", content: "Probiotics, Fiber, etc." },
      {
        title: "Mecanism de actiune",
        content: "Take 1 capsule daily with water.",
      },
    ],
  },
];

export default function ProdusePage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "/bifido-baby-hero.png",
        }}
        text="produse"
      />

      <main className="min-h-screen bg-white text-black  px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            Produsele Noastre
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => openModal(product)}
                className="cursor-pointer border border-gray-200 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <p className={`text-md font-medium ${product.color}`}>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PartnerCarousel />
        <Newsletter />
        <FeaturedArticles />
      </main>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
}
