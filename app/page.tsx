// app/page.tsx or any component using useSession
"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      {session ? (
        <>
          <h1 className="text-2xl">Welcome, {session.user?.name}</h1>
          <div className="bg-black text-white p-10 text-2xl font-bold rounded-lg shadow-lg">
            ✅ If you see this styled: Tailwind works.
          </div>
          <button className="btn btn-secondary" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={() => signIn("google")}>
          Sign in with Google
        </button>
      )}
    </main>
  );
}
