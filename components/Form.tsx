"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    oras: "",
    clinica: "",
    specialitate: "",
    telefon: "",
    email: "",
    mesaj: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Trimis cu succes!");
    console.log(formData);
    setFormData({
      nume: "",
      prenume: "",
      oras: "",
      clinica: "",
      specialitate: "",
      telefon: "",
      email: "",
      mesaj: "",
    });
  };

  return (
    <section className="flex justify-center items-center px-4 py-10 bg-transparent">
      <div className="w-full max-w-3xl backdrop-blur-md bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20">
        <h2 className="text-[#3B62AC] text-3xl font-bold mb-8 text-center uppercase font-anton">
          Solicită Vizita Reprezentantului
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: "nume", label: "Nume" },
            { name: "prenume", label: "Prenume" },
            { name: "oras", label: "Oraș" },
            { name: "clinica", label: "Clinică" },
            { name: "specialitate", label: "Specialitate" },
            { name: "telefon", label: "Telefon", type: "tel" },
            { name: "email", label: "Email", type: "email" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name} className="flex flex-col">
              <label htmlFor={name} className="text-sm font-semibold text-[#2a4065] mb-1">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className="rounded-xl px-4 py-3 bg-white/90 text-black placeholder-gray-500 border border-gray-300 focus:border-[#3B62AC] focus:ring-2 focus:ring-[#3B62AC]/40 transition duration-200"
              />
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <label htmlFor="mesaj" className="text-sm font-semibold text-[#2a4065] mb-1">
              Mesaj
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={4}
              value={formData.mesaj}
              onChange={handleChange}
              className="rounded-xl px-4 py-3 bg-white/90 text-black placeholder-gray-500 border border-gray-300 focus:border-[#3B62AC] focus:ring-2 focus:ring-[#3B62AC]/40 transition duration-200 resize-none"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#3B62AC] hover:bg-[#2e4f8e] text-white font-semibold py-3 px-10 rounded-full transition duration-200"
            >
              TRIMITE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
