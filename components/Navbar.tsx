"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.15) {
        setIsScrolled(true);
        controls.start({ backgroundColor: "rgba(0, 0, 0, 0.7)" });
      } else {
        setIsScrolled(false);
        controls.start({ backgroundColor: "rgba(0, 0, 0, 0.4)" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      className={`fixed top-0 left-0 z-50 w-full px-6 py-4 backdrop-blur-md flex flex-col transition-all duration-300 rounded-none sm:top-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-[85%] sm:rounded-2xl rounded-b-2xl`}
    >
      {/* Top Navbar Section */}
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Image
          src={"/logo-innergy-white.png"}
          alt="Logo Innergy"
          width={150}
          height={150}
        />

        {/* Desktop Navigation */}
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

        {/* Medici/Farmacisti Button for Desktop */}
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

        {/* Hamburger Menu for Mobile */}
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

      {/* Dropdown Menu */}
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

          {/* Medici/Farmacisti Button for Mobile */}
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
        </div>
      )}
    </motion.div>
  );
}
