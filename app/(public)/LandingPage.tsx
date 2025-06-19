import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import VideoSwiper from "@/components/VideoSwiper";
import IntroSection from "@/components/IntroSection";
import ProductCarousel from "@/components/ProductCarousel";
import Reviews from "@/components/Reviews";
import PartnerCarousel from "@/components/PartnersCarousel";
import Newsletter from "@/components/Newsletter";

import FadeInSection from "@/components/FadeInSection";

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
        noWave="true"
        showBtns="true"
      />

      <div className="mt-[-80px]">
        <FadeInSection>
          <PartnerCarousel />
        </FadeInSection>
      </div>

      <FadeInSection delay={0.1}>
        <VideoSwiper />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <IntroSection />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <div id="produse">
          <ProductCarousel />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <PartnerCarousel />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div id="articole">
          <FeaturedArticles />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <Reviews />
      </FadeInSection>
    </>
  );
}
