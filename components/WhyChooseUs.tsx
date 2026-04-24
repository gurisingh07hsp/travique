import { Check, Globe, Map, UserCheck } from "lucide-react";

// const testimonials = [
//   { name: "Ronald Richads", role: "" },
//   { name: "Kevin Martins", role: "" },
//   { name: "Sadie Green", role: "" },
// ];

const features = [
  {
    description:
      "Comfortable, well-maintained vehicles",
  },
  {
    description:
      "Professional and friendly drivers",
  },
  {
    description:
      "Always on time",
  },
  {
    description:
      "Local expertise and guidance",
  },
  {
    description:
      "Transparent pricing with no hidden fees",
  },
];
const WhyChooseUs = () => {
  return (
       <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left – Testimonials */}
          {/* <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-gray-300 rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fermentum turbo and the bus consella non lacus neta market.
                  </p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Right – Why Choose Us */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase txt-main mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Why Choose MilkyWay?
            </h2>

            <div className="flex flex-col mt-8 gap-6">
              {features.map((f, i) => {
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff762154] flex items-center justify-center shrink-0">
                      <Check size={18} className="txt-main" />
                    </div>
                    <div>
                      {/* <h4 className="text-base font-bold text-foreground mb-1">{f.title}</h4> */}
                      <p className="text-muted-foreground">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
