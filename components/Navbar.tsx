"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full px-6 py-3 flex flex-col 
    lg:top-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[85%] 
    lg:rounded-2xl transition-all duration-500 ease-in-out backdrop-blur-md bg-black/40
    ${!isOpen ? "rounded-b-2xl" : ""}`}
    >
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-innergy-white.png"
            alt="Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4 text-white text-sm font-semibold uppercase tracking-wide">
          <Link href="/portofoliu">Portofoliu</Link>
          <span>/</span>
          <Link href="/despre-noi">Despre Noi</Link>
          <span>/</span>
          <Link href="/articole">Articole</Link>
          <span>/</span>
          <Link href="/cariere">Cariere</Link>
          <span>/</span>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link href="/medici-farmacisti">
          <button className="hidden lg:flex items-center bg-[#3b62ac] text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition">
            Medici/Farmacisti
            <span className="ml-2 bg-red-600 text-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <span className="text-xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center gap-4 text-white text-sm font-semibold uppercase tracking-wide border-t border-white/20
          ${isOpen ? "max-h-[1000px] opacity-100 scale-100 py-6" : "max-h-0 opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <Link href="/portofoliu" onClick={() => setIsOpen(false)}>
          Portofoliu
        </Link>
        <Link href="/despre-noi" onClick={() => setIsOpen(false)}>
          Despre Noi
        </Link>
        <Link href="/articole" onClick={() => setIsOpen(false)}>
          Articole
        </Link>
        <Link href="/cariere" onClick={() => setIsOpen(false)}>
          Cariere
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>

        <Link href="/medici-farmacisti">
          <button onClick={() => setIsOpen(!isOpen)} className="mt-4 flex items-center bg-[#3b62ac] text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition">
            Medici/Farmacisti
            <span className="ml-2 bg-red-600 text-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
