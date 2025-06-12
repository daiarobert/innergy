import Image from "next/image";

export default function ProductModal({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full max-h-screen overflow-y-auto p-6 m-6">
        {/* Modal Header */}
        <div
          className="rounded-t-xl relative w-full h-80"
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

        {/* Modal Content */}
        <div className="p-4">
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
            Inchide
          </button>
        </div>
      </div>
    </div>
  );
}
