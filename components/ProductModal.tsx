import Image from "next/image";
import { X } from "lucide-react";

export default function ProductModal({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg max-h-screen overflow-y-auto bg-white rounded-xl shadow-lg m-4 transform scale-95 opacity-0 animate-modal"
      >
        {/* Buton X în colț */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-200 transition"
          aria-label="Închide"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Imagine header */}
        <div
          className="relative w-full h-80 rounded-t-xl"
          style={{
            backgroundColor: product.colorBg,
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-t-xl"
            loading="lazy"
          />
        </div>

        {/* Conținut */}
        <div className="p-6">
          <h3 className="text-xl font-bold uppercase mb-4">{product.name}</h3>
          {product.details.map((detail: any, index: number) => (
            <details key={index} className="mb-4 border-b border-gray-200 pb-2">
              <summary className="font-semibold cursor-pointer">
                {detail.title}
              </summary>
              <p className="text-sm text-gray-600 mt-2">{detail.content}</p>
            </details>
          ))}

          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[#3B62ACFF] text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Închide
          </button>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes modal {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-modal {
          animation: modal 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
