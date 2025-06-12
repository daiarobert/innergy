import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3B62AC] text-white border-t-2 border-white/10 mt-auto rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2  gap-8 text-sm">
        {/* Logo + descriere */}
        <div className="flex flex-col gap-3 justify-center items-center sm:items-start text-center sm:text-left">
          <Image
            src="/logo-innergy-white.png"
            alt="Innergy Logo"
            width={180}
            height={40}
            priority
          />
          <p className="text-white/80">
            Suplimente inovatoare pentru echilibrul intestinal, digestiv și
            imunitar.
          </p>
        </div>

        {/* Linkuri */}
        <div className="wrapper flex justify-around sm:justify-start md:justify-around text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">
              Politică și termeni
            </h4>
            <ul className="space-y-2 text-white/90">
              <li>Politica de confidentialitate</li>
              <li>Termeni si conditii</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Mail className="inline-block w-4 h-4" /> contact@innergy.ro
              </li>
              <li>București, România</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
      </div>
      <div className="text-center text-xs text-white/60 py-4">
        © 2025 Innergy. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
