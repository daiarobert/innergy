"use client";

import Image from "next/image";

const logos = [
  "/partners/logo-1.png",
  "/partners/logo-2.png",
  "/partners/logo-3.png",
  "/partners/logo-4.png",
  "/partners/logo-5.jpg",
  "/partners/logo-6.png",
];

export default function PartnerCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Render logos */}
        {logos.map((logo, i: number) => (
          <div key={i} className="carousel-item">
            <Image
              src={logo}
              alt={`Partner ${i + 1}`}
              width={150}
              height={75}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {logos.map((logo, i) => (
          <div key={`duplicate-${i}`} className="carousel-item">
            <Image
              src={logo}
              alt={`Partner ${i + 1}`}
              width={150}
              height={75}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
