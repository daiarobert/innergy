"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export default function LoginSuper() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* Image section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-indigo-500 to-[#3b62ac]">
        <img
          src="/login-image.png"
          alt="Login Illustration"
          
        />
      </div>

      {/* Login section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500">Sign in to access your dashboard</p>

          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" className="w-15 h-9" />
            <span className="font-medium text-gray-700">Sign in with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}
