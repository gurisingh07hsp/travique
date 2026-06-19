import AboutUsSection from "@/components/AboutUsSection";
import FeaturedTours from "@/components/FeaturedTours";
import HeroSection from "@/components/HeroSection";
import PopularSearchSection from "@/components/PopularSearchSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div className="overflow-hidden mx-2">
      <HeroSection/>
      <PopularSearchSection/>
      <FeaturedTours/>
      <AboutUsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
   </div>
  );
}
