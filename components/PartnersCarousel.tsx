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
    <div className="w-full flex justify-center my-8">
      <div className="relative max-w-[1100px] w-full overflow-hidden rounded-xl shadow-lg backdrop-blur-md bg-[#005eb1]/30">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Logos */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 py-4 min-w-[150px]"
            >
              <Image
                src={logo}
                alt={`Partner ${i + 1}`}
                width={150}
                height={75}
                style={{ objectFit: "contain" }}
                className="max-h-[60px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
