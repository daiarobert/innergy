import Image from "next/image";
import { Info } from "lucide-react";

export default function ProductSlide({
  product,
  onClick,
  isFirst,
}: {
  product: any;
  onClick: () => void;
  isFirst: boolean;
}) {
  // Construiește un obiect de proprietăți pentru imagine
  const imageProps = {
    src: product.image,
    alt: product.name,
    width: 300,
    height: 300,
    className: "rounded-xl",
  };

  if (isFirst) {
    // Adaugă `priority` doar dacă este prima imagine
    (imageProps as any).priority = true;
  }

  return (
    <div
      className="keen-slider__slide rounded-xl text-center relative group"
      style={{
        backgroundColor: product.colorBg,
        boxShadow: `0 4px 14px ${product.colorBg}`,
      }}
      onClick={onClick}
    >
      {/* Info Icon */}
      <div className="absolute top-4 right-4 bg-blue p-2 rounded-full shadow-md z-30">
        <Info className="text-black" size={25} />
      </div>

      {/* Product Image */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <Image {...imageProps} />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-bold uppercase tracking-wide relative z-10">
        {product.name}
      </h3>
    </div>
  );
}
