"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-[85%] px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-between">
      {/* Title */}
      {/* <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-widest">
        RELAX
      </h1> */}
      <Image
        src={"/logo-innergy-white.png"}
        alt={"/logo-innergy-white.png"}
        width={200}
        height={200}
      />

      {/* Navigation Links (Visible on Desktop) */}
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

      {/* Hamburger Menu (Visible on Mobile) */}
      <button
        className="sm:hidden flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="text-xl font-bold">✕</span> // Close icon
        ) : (
          <span className="text-xl font-bold">☰</span> // Hamburger icon
        )}
      </button>

      {/* Dropdown Menu (Visible on Mobile when Hamburger is Open) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md rounded-b-2xl flex flex-col items-center gap-4 py-4 text-white text-sm font-semibold uppercase tracking-wide">
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
        </div>
      )}

      {/* Buy Now Button */}
      <button className="hidden sm:flex items-center bg-[#3b62ac] text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition">
        Medici/Farmacisti
        <span className="ml-2 bg-red-600 text-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
