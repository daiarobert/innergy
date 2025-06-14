import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductCarouselHeader({
  instanceRef,
}: {
  instanceRef: any;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div>
        <span className="inline-block bg-[#3B62ACFF] text-white text-sm font-bold px-3 py-1 rounded-full tracking-wide mb-2">
          Probiotice & Prebiotice
        </span>
        <h2 className="font-anton text-[32px] md:text-4xl uppercase leading-snug">
          Alege ce-i mai bun
          <br />
          pentru echilibrul tău interior
        </h2>
      </div>

      {/* Arrows */}
      <div className="hidden md:flex gap-2">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
