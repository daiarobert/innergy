// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full px-6 py-4 flex flex-col transition-all duration-300 lg:top-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[85%] lg:rounded-2xl ${
        isOpen ? "rounded-b-2xl" : "rounded-b-2xl"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(8px)",
      }}
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

      {isOpen && (
        <div className="w-full mt-4 flex flex-col items-center gap-4 py-6 text-white text-sm font-semibold uppercase tracking-wide border-t border-white/20">
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
            <button className="mt-4 flex items-center bg-[#3b62ac] text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition">
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
      )}
    </div>
  );
}
