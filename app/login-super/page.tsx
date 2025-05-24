"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginSuper() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to /dashboard if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      {status === "loading" ? (
        <div className="flex justify-center items-center h-screen">
          <img
            src="/floare.svg"
            alt="Loading..."
            className="w-20 h-20 animate-spin"
          />
        </div>
      ) : session ? (
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
