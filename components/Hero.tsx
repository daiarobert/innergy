"use client";

type HeroProps = {
  height: string;
  media: {
    type: "image" | "video";
    src: string;
  };
  text: string;
};

export default function Hero({ height, media, text }: HeroProps) {
  return (
    <section className={`relative w-full bg-black`} style={{ height }}>
      {/* Background Media */}
      {media.type === "video" ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fallback.jpg"
        />
      ) : (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={media.src}
          alt="Hero Background"
        />
      )}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-anton text-[40px] mt-4 md:text-6xl  uppercase tracking-wide text-shadow-subtle leading-[1.1]">
          {text}
        </h1>
      </div>

      {/* Wave Effect */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,224C840,213,960,203,1080,213.3C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
