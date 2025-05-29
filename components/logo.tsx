"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/logo-innergy-white.png"
        alt="Logo"
        width={150}
        height={50}
        className="cursor-pointer"
      />
      <span className="text-white text-sm">Test Link</span>
    </Link>
  );
}
