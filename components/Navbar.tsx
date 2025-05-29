// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full px-6 py-4 flex flex-col transition-all duration-300 sm:top-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-[85%] sm:rounded-2xl ${
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

        <nav className="hidden sm:flex items-center gap-4 text-white text-sm font-semibold uppercase tracking-wide">
          <Link href="/about">Portofoliu</Link>
          <span>/</span>
          <Link href="/shop">Despre Noi</Link>
          <span>/</span>
          <Link href="/testimonial">Articole</Link>
          <span>/</span>
          <Link href="/testimonial">Cariere</Link>
          <span>/</span>
          <Link href="/testimonial">Contact</Link>
        </nav>

        <Link href="/medici-farmacisti">
          <button className="hidden sm:flex items-center bg-[#3b62ac] text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition">
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
          className="sm:hidden flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full shadow"
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
          <Link href="/about" onClick={() => setIsOpen(false)}>
            Portofoliu
          </Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>
            Despre Noi
          </Link>
          <Link href="/testimonial" onClick={() => setIsOpen(false)}>
            Articole
          </Link>
          <Link href="/testimonial" onClick={() => setIsOpen(false)}>
            Cariere
          </Link>
          <Link href="/testimonial" onClick={() => setIsOpen(false)}>
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
