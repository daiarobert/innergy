import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3B62AC] text-white border-t-2 border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        {/* Logo + descriere */}
        <div className="flex flex-col gap-3">
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
        <div>
          <h4 className="text-white font-semibold mb-3">Navigare</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="#" className="hover:underline">
                Despre noi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Produse
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beneficii
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Mail className="inline-block w-4 h-4 mr-2" /> contact@innergy.ro
            </li>
            <li>București, România</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white/60 py-4">
        © 2025 Innergy. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
