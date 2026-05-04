import AboutUsSection from "@/components/AboutUsSection";
import FeaturedTours from "@/components/FeaturedTours";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div className="overflow-hidden mx-2">
      <HeroSection/>
      <FeaturedTours/>
      <AboutUsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <TestimonialSection/>
   </div>
  );
}
