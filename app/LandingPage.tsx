"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import VideoSwiper from "@/components/VideoSwiper";
import IntroSection from "@/components/IntroSection";
import ProductCarousel from "@/components/ProductCarousel";
import Reviews from "@/components/Reviews";
import PartnerCarousel from "@/components/PartnersCarousel";
import Newsletter from "@/components/Newsletter";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, // Start: ascuns și translatat în jos
        {
          opacity: 1,
          y: 0, // Final: complet vizibil și poziționat corect
          duration: 0.6, // Durata animației
          ease: "power3.out", // Efect de easing pentru o tranziție lină
          scrollTrigger: {
            trigger: section,
            start: "top 90%", // Declanșează animația când secțiunea este 25% vizibilă
            end: "top 70%", // Finalizează animația când secțiunea este 50% vizibilă
            toggleActions: "play none none reverse", // Controlează animația
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        <Hero
          height="60vh"
          media={{
            type: "video",
            src: "https://www.innergy.ro/wp-content/uploads/2023/06/Innergy-Slideshow-1.mp4",
          }}
          text="Inner balance for a quality life"
        />
      </div>

      <div>
        <VideoSwiper />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[1] = el;
        }}
      >
        <IntroSection />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[2] = el;
        }}
      >
        <ProductCarousel />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[3] = el;
        }}
      >
        <PartnerCarousel />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[4] = el;
        }}
      >
        <FeaturedArticles />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[5] = el;
        }}
      >
        <Reviews />
      </div>

      <div
        ref={(el) => {
          if (el) sectionsRef.current[6] = el;
        }}
      >
        <Newsletter />
      </div>
    </>
  );
}
