import aboutImg from "@/assets/about-us.jpg";

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "90%", label: "Global Destination" },
  { value: "86%", label: "Repeat Traveler" },
];
const AboutUsSection = () => {
  return (
      <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden aspect-square bg-muted">
          {/* <img
            src={aboutImg}
            alt="Travel experience"
            className="w-full h-full object-cover"
          /> */}

          <div className="w-full h-full bg-[#d2cbcb]">

          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="text-[#2986FF] font-semibold text-sm tracking-wide uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Empowering Your Travel
            <br />
            Experience with Travique
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-md">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu
            arcu massa laoreet commodo ac. Fermentum luctus convallis. Aliquam at
            ut viverra noniqu arcu massa laoreet
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-[#2986FF] text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
