import AboutUsSection from './AboutUsSection'
import HowItWorksSection from './HowItWorksSection';
import MeetFounder from './Meetfounder';
import TeamSection from './PopularSearchSection';
import VisionMissionSection from './VisionMissionSection'
import { Clock, Award } from "lucide-react";
const AboutUsPage = () => {
  return (
    <div className='mx-2'>
      <AboutUsSection/>
      <VisionMissionSection/>
      <MeetFounder/>
    </div>
  )
}

export default AboutUsPage
