import React from 'react'
import TeamSection from './TeamSection'
import VisionMissionSection from './VisionMissionSection';
import GetStartContainer from './GetStartContainer';
const values = [
  { label: "Experienced", value: 98 },
  { label: "Reliable", value: 86 },
  { label: "Skilled & Capable", value: 90 },
  { label: "Flexible", value: 80 },
];
const TeamPage = () => {
  return (
    <div>
      <TeamSection/>

      <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Overlapping Images */}
        <div className="relative w-full aspect-square max-w-md mx-auto">
          {/* Large back image */}
          <div className="absolute top-0 left-0 w-[70%] h-[75%] bg-muted rounded-2xl" />
          {/* Small front image */}
          <div className="absolute bottom-0 right-[10%] w-[55%] h-[55%] bg-muted-foreground/40 rounded-2xl z-10" />
          {/* Dashed circle decorations */}
          <div className="absolute top-[15%] right-[5%] w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground/30" />
          <div className="absolute bottom-[10%] left-[5%] w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground/30" />
          {/* Plane icon */}
          <div className="absolute bottom-[15%] left-[10%] text-muted-foreground/50 text-2xl z-20">✈</div>
        </div>

        {/* Right - Content */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            OUR VALUES
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-5">
            The Inherent Values
            <br />
            That Define Travique
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-md">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra
            noniqu arcu massa laoreet commodo ac. Fermentum luctus
            convallis. Aliquam at ut viverra noniqu.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5">
            {values.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="text-sm font-bold text-blue-600">{item.value}%</span>
                </div>
                <div className={`w-full h-2.5 bg-muted rounded-full [&>div]:bg-primary [&>div]:rounded-full`}>
                    <div className={`w-[${item.value}%] h-2.5 bg-blue-600 rounded-full`}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <VisionMissionSection/>
    <GetStartContainer/>

    </div>
  )
}

export default TeamPage
