const stats = [
  { value: "10M", label: "Happy Clients" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "15K", label: "Positif Reviews" },
];
const VisionMissionSection = () => {
  return (
      <section className="w-full py-20">
      <div className="mx-auto bg-black text-primary">
        {/* Top: Vision & Mission */}
        <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Left – Dark block */}
          <div className="bg-foreground text-background rounded-2xl p-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              MilkyWay Tours
              <br />
              Visionary Pathway
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              To become a leading travel and transfer service known for reliability, comfort, 
              and exceptional customer experience.
            </p>
            {/* <div className="flex md:gap-10 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right – Our Vision card */}
          <div className="bg-white text-black md:mt-12 mb-6 rounded-2xl p-8 max-w-lg ml-auto">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">Reliability</p>
            <p className="text-muted-foreground leading-relaxed">Safety</p>
            <p className="text-muted-foreground leading-relaxed">Transparency</p>
            <p className="text-muted-foreground leading-relaxed">Customer-first approach</p>
          </div>
        </div>
        </div>
        </div>

        {/* Our Mission */}
        {/* <div className="mb-0 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Deliver the Best Transportation" },
              { title: "Safety as the Top Priority" },
              { title: "Continuous Innovation" },
              { title: "Transparency and Integrity" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">
                    Socis varius nisi eu ipsum faucibus. Ac semper nisi
                    turpis diam libero id ante nullam. Tellus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
     
    </section>
  )
}

export default VisionMissionSection
