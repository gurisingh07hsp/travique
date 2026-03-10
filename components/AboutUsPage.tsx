import AboutUsSection from './AboutUsSection'
import HowItWorksSection from './HowItWorksSection';
import TeamSection from './TeamSection';
import VisionMissionSection from './VisionMissionSection'
import { Clock, Award } from "lucide-react";
const AboutUsPage = () => {
  return (
    <div>
      <AboutUsSection/>
      <VisionMissionSection/>
        <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left – Founder Image */}
          <div className="rounded-3xl overflow-hidden bg-[#b2a4a4] aspect-4/5 max-w-sm">
            {/* <img
              src={founderImg}
              alt="Timothy T. Wood, Founder & CEO"
              className="w-full h-full object-cover"
            /> */}
          </div>

          {/* Right – Content */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
              The Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              Dear Valued Costumer
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Welcome to our online taxi business company!
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu
              arcu massa laoreet commodo ac. Fermentum luctus convallis.
              Aliquam at ut viverra noniqu arcu massa laoreet. Fermentum luctus
              convallis. Aliquam at ut viverra noniqu arcu massa laoreet commodo ac.
            </p>

            {/* Founder name */}
            <div className="mb-8">
              <p className="text-lg font-bold text-foreground">Timothy T.Wood</p>
              <p className="text-xs text-muted-foreground">Founder & CEO Travique</p>
            </div>

            {/* Feature badges */}
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Visit Get In 2 Days</p>
                  <p className="text-xs text-muted-foreground">
                    Fermentum luctus convallis non lectus. Aliquam at ut.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Award size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Best Travel Agents</p>
                  <p className="text-xs text-muted-foreground">
                    Fermentum luctus convallis non lectus. Aliquam at ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorksSection/>
    <TeamSection/>

    </div>
  )
}

export default AboutUsPage
