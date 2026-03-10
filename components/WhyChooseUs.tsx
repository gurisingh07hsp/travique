import { Globe, Map, UserCheck } from "lucide-react";

const testimonials = [
  { name: "Ronald Richads", role: "" },
  { name: "Kevin Martins", role: "" },
  { name: "Sadie Green", role: "" },
];

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Fermentum turbo Consella Rutrum ut Vaculus Imperia at Vedituri. Non, Dimulp ut at.",
  },
  {
    icon: Map,
    title: "Personalized Plans",
    description:
      "Fermentum turbo Consella Rutrum ut Vaculus Imperia at Vedituri. Non, Dimulp ut at.",
  },
  {
    icon: UserCheck,
    title: "Professional Guide",
    description:
      "Fermentum turbo Consella Rutrum ut Vaculus Imperia at Vedituri. Non, Dimulp ut at.",
  },
];
const WhyChooseUs = () => {
  return (
       <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left – Testimonials */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fermentum turbo and the bus consella non lacus neta market.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right – Why Choose Us */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Great Opportunity for
              <br />
              Adventure and Travels
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fermentum turbo consella non lacus. Aliquam ut ut ularm envays
              aria a massa mount automata eu. Fermentum turbo consella.
              Aliquam ut at naters tranba asy manet tucani.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">{f.title}</h4>
                      <p className="text-xs text-muted-foreground">{f.description}</p>
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
