"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Sidebar({ session }: { session: Session }) {
  const user = session.user;

  return (
    <aside className="w-64 h-screen bg-base-200 flex flex-col justify-between p-4 shadow-md">
      <div>
        <div className="flex items-center gap-3 mb-6">
          {user?.image && (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-bold">{user?.name}</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        <nav className="flex flex-col space-y-2 h-full">
          <Link
            href="/dashboard/produse"
            className="btn btn-ghost justify-start w-full"
          >
            🛒 Produse
          </Link>
          <Link
            href="/dashboard/articole"
            className="btn btn-ghost justify-start w-full"
          >
            📰 Articole
          </Link>
        </nav>
      </div>

      <button
        className="btn btn-outline btn-error mt-6 w-full"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </button>
    </aside>
  );
}
