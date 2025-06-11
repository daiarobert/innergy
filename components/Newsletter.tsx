"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add subscription logic
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="flex justify-center items-center py-4 px-4 bg-transparent">
      <div className="max-w-xl w-full text-center backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-lg border border-white/20">
        <h2 className="text-white text-3xl font-bold mb-4">
          Abonează-te la Newsletter
        </h2>
        <p className="text-white/80 mb-6">
          Primește ultimele noutăți și oferte direct pe email.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Emailul tău"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white/90 text-black placeholder:text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#387780] text-white font-semibold hover:bg-[#2f5f64] transition"
          >
            Abonează-te
          </button>
        </form>
      </div>
    </section>
  );
}
