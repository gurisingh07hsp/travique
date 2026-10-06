'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const slides = [
  [
    { src: '/hero2.jpeg', alt: 'Queenstown' },
    { src: '/packageImages/QueenstownPack.jpg', alt: 'Lake Wakatipu' },
    { src: '/hero1.jpeg', alt: 'Milford Sound' },
  ],
  [
    { src: '/hero3.jpeg', alt: 'Airport transfers' },
    { src: '/ourFleet/car2.jpeg', alt: 'Private transfer vehicle' },
    { src: '/packageImages/wanaka.jpeg', alt: 'Wanaka' },
  ],
  [
    { src: '/hero6.jpeg', alt: 'Private tours' },
    { src: '/packageImages/glenorchy.jpeg', alt: 'Glenorchy' },
    { src: '/packageImages/MilfordSoundDayTour.webp', alt: 'Scenic South Island' },
  ],
]

const stats = [
  { value: '24/7', label: 'Airport transfers' },
  { value: '7–37', label: 'Seat fleet' },
  { value: 'NZ', label: 'Local drivers' },
]

const Sparkle = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 0l1.8 8.2L22 12l-8.2 1.8L12 22l-1.8-8.2L2 12l8.2-1.8L12 0z" />
  </svg>
)

const HeroSection = () => {
  const [active, setActive] = useState(0)
  const frames = slides[active]

  return (
    <section className="w-full bg-white pt-6 pb-10 md:pt-10 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-500 mb-3">All you need is MilkyWays</p>
            <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-extrabold text-[#1a1a1a] leading-[1.12] tracking-tight">
              Discover{' '}
              <span className="relative inline-block">
                Queenstown
                <span className="absolute left-0 -bottom-1 h-[7px] w-full rounded-full bg-[#FF7528]/80" />
              </span>
              <br />
              transfers and tours made simple.
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Airport pickups, private day tours and comfortable vehicles across New Zealand — so you
              can enjoy the scenery, not the logistics.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 bg-[#FF7528] text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-orange-400/25 hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Explore Tours
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+642108111920"
                className="inline-flex items-center justify-center gap-2 text-[#1a1a1a] font-semibold px-5 py-3 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
                  <Phone size={15} className="txt-main" />
                </span>
                Call +64 210 811 1920
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 px-2 py-3 sm:px-4 sm:py-4 text-center"
                >
                  <p className="text-lg sm:text-xl font-extrabold text-[#1a1a1a]">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] h-[380px] sm:h-[460px] lg:h-[500px]">
            <Sparkle className="absolute top-4 left-8 w-5 h-5 text-[#FF7528]/70" />
            <Sparkle className="absolute top-16 right-10 w-4 h-4 text-[#FF7528]/50" />
            <Sparkle className="absolute bottom-24 left-4 w-3.5 h-3.5 text-[#FF7528]/40" />

            <div className="absolute left-[2%] top-[18%] w-[34%] h-[68%] rounded-[999px] overflow-hidden -rotate-6 ring-[6px] ring-white shadow-xl">
              <img
                src={frames[0].src}
                alt={frames[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[2%] w-[40%] h-[88%] rounded-[999px] overflow-hidden z-10 ring-[8px] ring-white shadow-2xl">
              <img
                src={frames[1].src}
                alt={frames[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-[2%] top-[18%] w-[34%] h-[68%] rounded-[999px] overflow-hidden rotate-6 ring-[6px] ring-white shadow-xl">
              <img
                src={frames[2].src}
                alt={frames[2].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show destination set ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? 'w-6 bg-[#FF7528]' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
