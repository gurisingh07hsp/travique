'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/LwtL3LZqvP5jwzWB6'

const sliderImages = [
  {
    src: '/ourFleet/van-interior.jpg',
    alt: 'Comfortable coach interior on a Queenstown transfer',
    caption: 'Spacious, well-kept interiors',
  },
  {
    src: '/ourFleet/mercedes-sprinter-7-seater.png',
    alt: 'Mercedes Sprinter 7 Seater',
    caption: 'Mercedes Sprinter 7 Seater',
  },
  {
    src: '/ourFleet/car3.jpeg',
    alt: 'Mercedes Sprinter 12 Seater',
    caption: 'Mercedes Sprinter 12 Seater',
  },
  {
    src: '/ourFleet/car2.jpeg',
    alt: 'Mercedes Sprinter 18 Seater',
    caption: 'Mercedes Sprinter 18 Seater',
  },
  {
    src: '/ourFleet/car8.jpeg',
    alt: 'Ssangyong Coach 37 Seater',
    caption: 'Coach travel for larger groups',
  },
  {
    src: '/packageImages/AirportTransferService.jpg',
    alt: 'Airport transfer in Queenstown',
    caption: 'Meet you at Queenstown Airport',
  },
]

const GoogleReviewsSection = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = sliderImages[index]

  const prev = () =>
    setIndex((i) => (i - 1 + sliderImages.length) % sliderImages.length)
  const next = () => setIndex((i) => (i + 1) % sliderImages.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, index])

  return (
    <section className="mt-10 md:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] lg:min-h-[640px] rounded-[28px] overflow-hidden">
        <div className="relative bg-[#111111] text-white px-6 py-10 sm:px-10 lg:px-12 lg:py-14 flex flex-col justify-center">
          <div
            className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#FF7528]/18 blur-3xl"
            aria-hidden
          />
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#FF7528] font-semibold mb-3">
            Google reviews
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] mb-6 max-w-md">
            What travellers say about{' '}
            <span className="text-[#FF7528]">MilkyWays</span>
          </h2>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-[#FBBC04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
            >
              Read on Google
            </a>
          </div>

          <div className="google-reviews-embed relative z-10 min-h-[220px]">
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="lazyOnload"
            />
            <div
              className="elfsight-app-5678ae46-c217-4cdb-91e1-20d823304bce"
              data-elfsight-app-lazy
            />
          </div>
        </div>

        <div
          className="relative min-h-[380px] lg:min-h-full bg-black"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {sliderImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <p className="text-white font-semibold text-lg drop-shadow-md">
              {slide.caption}
            </p>
            <p className="text-white/70 text-sm tabular-nums">
              {String(index + 1).padStart(2, '0')} / {String(sliderImages.length).padStart(2, '0')}
            </p>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous fleet photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next fleet photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2">
            {sliderImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Show ${img.caption}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-8 bg-[#FF7528]' : 'w-3 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviewsSection
