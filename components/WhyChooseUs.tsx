import { Check } from 'lucide-react'

const stats = [
  { value: '24/7', label: 'Airport transfers' },
  { value: '7–37', label: 'Seat fleet options' },
  { value: 'Local', label: 'Queenstown drivers' },
]

const features = [
  {
    title: 'Comfortable vehicles',
    description: 'Clean, well-maintained vans and coaches for every group size.',
  },
  {
    title: 'Professional drivers',
    description: 'Friendly locals who know Queenstown roads, weather and timing.',
  },
  {
    title: 'On-time pickups',
    description: 'Flight-aware airport runs and reliable hotel or ski-field drop-offs.',
  },
  {
    title: 'Private and group options',
    description: 'Travel together instead of splitting across multiple taxis.',
  },
  {
    title: 'Clear communication',
    description: 'Straightforward booking with no hidden fees along the way.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="relative rounded-[28px] overflow-hidden h-[280px] sm:h-[360px] lg:h-[400px]">
                <img
                  src="/ourFleet/car2.jpeg"
                  alt="MilkyWays Tours van in Queenstown"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 text-sm font-medium text-white/90">
                  Private transfers across Queenstown
                </p>
              </div>
              <div className="absolute -bottom-8 right-4 sm:right-8 w-32 h-40 sm:w-40 sm:h-48 rounded-2xl overflow-hidden ring-4 ring-[#141414] shadow-2xl">
                <img
                  src="/whychooseus.jpeg"
                  alt="Queenstown landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-14">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 px-3 py-4 sm:px-4 sm:py-5 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#FF7528] leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-sm text-white/70 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FF7528] mb-3 block">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight mb-4">
              The smooth start and finish to every Queenstown trip
            </h2>
            <p className="text-white/65 leading-relaxed mb-8 max-w-xl">
              From Queenstown Airport to your hotel, ski field or a private day out, we keep the
              journey comfortable so you can focus on the trip — not the logistics.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#FF7528] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-white/60 leading-relaxed mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
