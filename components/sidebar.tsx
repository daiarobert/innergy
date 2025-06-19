"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useState } from "react";

export default function Sidebar({ session }: { session: Session }) {
  const user = session.user;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      href: "/dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      label: "Dashboard",
    },
    {
      href: "/dashboard/produse",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M3 8h18M5 12h14M7 16h10M9 20h6"
          />
        </svg>
      ),
      label: "Produse",
    },
    {
      href: "/dashboard/articole",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
      label: "Articole",
    },
  ];

  return (
    <>
      {/* Hamburger button on mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 btn btn-circle btn-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 inset-0 backdrop-blur-lg left-0 h-full w-64 bg-[#005eb1da] p-4 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:flex`}
      >
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <Image
              src="/logo-innergy-white.png"
              width={180}
              height={180}
              alt="logo"
              className="mx-auto mt-6 mb-6"
              priority
            />

            <div className="flex flex-col items-center gap-3 mb-6">
              {user?.image && (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              )}
              <div className="text-center text-white">
                <p className="font-bold">{user?.name}</p>
                <p className="text-xs">Admin</p>
              </div>
            </div>

            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="icons btn btn-circle hover:bg-white hover:text-[#005eb1da]"
                  onClick={() => setIsOpen(false)} // close on mobile click
                >
                  <span className="text-xl">{link.icon}</span>
                </Link>
              ))}
            </nav>
          </div>

          <button
            className="icons btn btn-circle btn-error mt-6 h-16 w-16 mx-auto text-white"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
              />
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
}
