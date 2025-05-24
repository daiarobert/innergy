"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#3B62AC] text-white overflow-hidden">
      {/* Wavy bottom transition */}
      <svg
        className="absolute top-0 left-0 w-full h-32 z-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,224C840,213,960,203,1080,213.3C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      {/* Wave deasupra */}
      <div className="absolute top-[-60px] left-0 w-full rotate-180 z-10">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.59,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#3B62AC" }}
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20 relative items-start text-sm">
        {/* Logo + descriere */}
        <div className="flex flex-col gap-3">
          <Image src="/logo.svg" alt="Innergy Logo" width={120} height={40} />
          <p className="text-white/80">
            Suplimente inovatoare pentru echilibrul intestinal, digestiv și
            imunitar.
          </p>
        </div>

        {/* Linkuri */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigare</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="#" className="hover:underline">
                Despre noi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Produse
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beneficii
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contacte + Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Mail className="inline-block w-4 h-4 mr-2" /> contact@innergy.ro
            </li>
            <li>București, România</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white/60 py-4">
        © {new Date().getFullYear()} Innergy. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
