import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSwiper from "@/components/VideoSwiper";
import IntroSection from "@/components/IntroSection";
import ProductCarousel from "@/components/ProductCarousel";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCarousel />
      <IntroSection />
      {/* Add your main content here */}
      <VideoSwiper />
      <h1 className="text-4xl font-bold">Welcome to the Website</h1>
      <p className="text-lg text-gray-600">
        This is the main website homepage. Start building your content here.
      </p>
    </>
  );
}
