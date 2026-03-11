import AboutUsSection from "@/components/AboutUsSection";
import BookingSearchSection from "@/components/BookingSearchSection";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="overflow-hidden mx-2">
      <HeroSection/>
      {/* <BrandSection/> */}
      <AboutUsSection/>
      <ServicesSection/>
      <BookingSearchSection/>
      <PricingSection/>
      <WhyChooseUs/>
      <TestimonialSection/>
   </div>
  );
}
