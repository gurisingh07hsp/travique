import AboutUsSection from "@/components/AboutUsSection";
import FeaturedFleet from "@/components/FeaturedFleet";
import FeaturedTours from "@/components/FeaturedTours";
import HeroSection from "@/components/HeroSection";
import MeetFounder from "@/components/Meetfounder";
import PopularSearchSection from "@/components/PopularSearchSection";
import ServicesSection from "@/components/ServicesSection";
import TourInquiryPopup from "@/components/Tourinquirypopup";
import WhyChooseUs from "@/components/WhyChooseUs";
import Script from "next/script";

export default function Home() {
  return (
   <div className="overflow-hidden mx-2">
      <TourInquiryPopup/>
      <HeroSection/>
      <PopularSearchSection/>
      <FeaturedTours/>
      <FeaturedFleet/>
      <AboutUsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <section className="py-16">
        <div className="container mx-auto">

          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="afterInteractive"
          />

          <div
            className="elfsight-app-5678ae46-c217-4cdb-91e1-20d823304bce"
            data-elfsight-app-lazy
          />
        </div>
      </section>
      <MeetFounder/>
   </div>
  );
}
