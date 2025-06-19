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
    <div className="w-full flex justify-center my-10 overflow-hidden relative">
      <div className="max-w-[1100px] w-full bg-[#005eb1]/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden relative">
        <div className="marquee">
          <div className="track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[150px] px-6 py-4"
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
      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
        }

        .track {
          display: flex;
          width: fit-content;
          animation: scroll-left linear infinite;
          animation-duration: 15s; /* adjust this to change speed */
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
