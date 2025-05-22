"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Sidebar({ session }: { session: Session }) {
  const user = session.user;

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
          className="size-9"
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
          className="size-9"
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
          className="size-9"
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
    <aside className="w-64 h-screen bg-base-200 flex flex-col justify-between p-4 shadow-md bg-[#005eb1da]">
      <div>
        <div className="logo">
          <Image
            src="/logo-innergy-white.png"
            width={180}
            height={180}
            alt="logo"
            priority
            className="ml-auto mr-auto mb-6 mt-6"
          />
        </div>
        <div className="flex flex-col items-center gap-3 mb-6">
          {user?.image && (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={60}
              height={60}
              className="rounded-full"
              loading="lazy"
            />
          )}

          <div>
            <p className="font-bold text-white">{user?.name}</p>
            <p className="text-xs text-white text-center">Admin</p>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center space-y-4  ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`icons btn btn-circle  hover:bg-gray-300"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
            </Link>
          ))}
        </nav>
      </div>

      <button
        className="icons btn btn-circle btn-error mt-6 h-16 w-16 ml-auto mr-auto flex items-center justify-center align-middle text-white"
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
    </aside>
  );
}
