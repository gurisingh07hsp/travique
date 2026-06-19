'use client'
const services = [
  {
    title: "Tours",
    description: " Curated travel experiences to explore New Zealand’s most beautiful destinations.",
  },
  {
    title: "Airport Transfers",
    description: "Reliable pick-up and drop services, aligned with your flight schedule.",
  },
  {
    title: "Private Transfers",
    description: "Flexible, door-to-door travel tailored to your needs.",
  },
  {
    title: "Corporate Travel",
    description: "Efficient and professional transport solutions for business clients.",
  },
];

const ServicesSection = () => {
  return (
     <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Our Services
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What We Offer</h3>
        <div className="flex flex-col gap-4">
            {services.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-gray-300 rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                {/* <div className="w-10 h-10 rounded-full bg-muted shrink-0" /> */}
                <div>
                  <h4 className="font-bold text-foreground">{t.title}</h4>
                  <p className="text-muted-foreground mt-1">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default ServicesSection
