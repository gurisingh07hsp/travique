'use client'
import { useRouter } from "next/navigation";
const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "90%", label: "Global Destination" },
  { value: "86%", label: "Repeat Traveler" },
];
const AboutUsSection = () => {
  const router = useRouter();
  return (
      <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden aspect-square bg-muted">
          <img
            src={'/aboutUsImage.png'}
            alt="Travel experience"
            className="w-full h-full object-cover"
          />

          {/* <div className="w-full h-full bg-[#d2cbcb]">

          </div> */}
        </div>

        {/* Right Content */}
        <div>
          <span className="txt-main font-semibold text-sm tracking-wide uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            About MilkyWay
            <br />
            Tours & Transfers
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            MilkyWay Tours & Transfers is a trusted travel service provider in New Zealand, 
            focused on delivering smooth, comfortable, and reliable journeys.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-md">
            Whether it’s an airport transfer or a scenic tour, we ensure every trip is planned 
            with attention to detail and customer satisfaction.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 max-w-md">
            Our goal is simple:
            <span className="font-bold"> To make every journey effortless and memorable.</span>
          </p>

          {/* Stats */}
          {/* <div className="flex gap-10 mb-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div> */}

          {/* CTA */}
          {/* <button onClick={()=> router.push('/tours')} className="bg-main cursor-pointer text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            Book Now
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
