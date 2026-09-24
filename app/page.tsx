import AboutUsSection from "@/components/AboutUsSection";
import FeaturedFleet from "@/components/FeaturedFleet";
import FeaturedTours from "@/components/FeaturedTours";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import HeroSection from "@/components/HeroSection";
import MeetFounder from "@/components/Meetfounder";
import PopularSearchSection from "@/components/PopularSearchSection";
import ServicesSection from "@/components/ServicesSection";
import TourInquiryPopup from "@/components/Tourinquirypopup";
import WhyChooseUs from "@/components/WhyChooseUs";

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
      <GoogleReviewsSection/>
      <MeetFounder/>
   </div>
  );
}
