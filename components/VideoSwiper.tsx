"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "RELAX APPLEJOY",
    text: "The taste of fresh apples and pure joy.",
    src: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ela.craciun/videos/4066279786969924&show_text=false",
    type: "iframe",
  },
  {
    id: 2,
    title: "RELAX PEACHFUN",
    text: "Juicy peaches that make you smile.",
    src: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/doctormihail/videos/964193538677529&show_text=false",
    type: "iframe",
  },
  {
    id: 3,
    title: "RELAX GRAPESLOW",
    text: "Chill with the smooth taste of grapes.",
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdoctormihail%2Fvideos%2F1584579905738955%2F&show_text=false",
    type: "iframe",
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const swipeThreshold = 100;

  return (
    <div className=" bg-[rgba(239, 239, 239, 0.673)] text-black flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 overflow-hidden">
      {/* LEFT TEXT & CONTROLS */}
      <div className="flex-1 max-w-md text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase mb-4">
          {videos[current].title}
        </h2>
        <p className="text-lg mb-8">{videos[current].text}</p>
        <div className="flex justify-center md:justify-start gap-6">
          <button
            onClick={prev}
            className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* RIGHT: Full Phone Frame with Drag & Dots */}
      <div className="relative w-[230px] h-[390px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={videos[current].id}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -swipeThreshold) next(); // drag left → next
              else if (offset.x > swipeThreshold) prev(); // drag right → prev
            }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
          >
            <div className="w-full h-full bg-neutral-900 border-[10px] border-zinc-800 rounded-[2.5rem] shadow-xl relative flex items-center justify-center overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-xl z-30"></div>

              {/* Video / Iframe */}
              <div className="w-full h-full rounded-[1.75rem] overflow-hidden z-20 relative">
                {videos[current].type === "iframe" ? (
                  <iframe
                    src={videos[current].src}
                    className="w-full h-full absolute top-0 left-0"
                    style={{ border: "none" }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ) : (
                  <video
                    src={videos[current].src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === current ? "bg-white" : "bg-white/30"
              } transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
