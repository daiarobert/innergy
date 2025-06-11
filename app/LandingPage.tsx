import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import VideoSwiper from "@/components/VideoSwiper";
import IntroSection from "@/components/IntroSection";
import ProductCarousel from "@/components/ProductCarousel";
import Reviews from "@/components/Reviews";
import PartnerCarousel from "@/components/PartnersCarousel";
import Newsletter from "@/components/Newsletter";

export default function LandingPage() {
  return (
    <>
      <Hero
        height="60vh"
        media={{
          type: "video",
          src: "https://www.innergy.ro/wp-content/uploads/2023/06/Innergy-Slideshow-1.mp4",
        }}
        text="Inner balance for a quality life"
        // mobileImages={[
        //   "/atropin-hero.png",
        //   "/bifido-baby-hero.png",
        //   "/bifido-plus-hero.png",
        // ]}
      />
      <IntroSection />
      <FeaturedArticles />
      <ProductCarousel />
      <PartnerCarousel />
      <VideoSwiper />
      <Reviews />
      <Newsletter />
    </>
  );
}
