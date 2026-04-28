import { ArrowRight, PlayCircle } from 'lucide-react'
import { Play } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-90 md:min-h-150 lg:min-h-170 rounded-2xl overflow-hidden md:mx-auto max-w-350 md:px-4 pt-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
         </video>

        {/* Overlay (optional for dark effect) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between h-full min-h-90 md:min-h-150 lg:min-h-170 ps-2 md:ps-0 md:p-12 lg:p-16">
          {/* Top Content */}
          <div className="flex-1 flex flex-col md:justify-center max-w-2xl">

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Reliable Airport<br />
              Transfers & Private Tours<br />
              Across New Zealand
            </h1>
             {/* Reliable Airport Transfers & Private Tours Across New Zealand */}
            {/* Step line with numbers */}
            <div className="flex items-center gap-0 mb-4">
              <div className="flex flex-col items-center">
                <span className="w-7 h-7 rounded-full border-2 border-white/60 flex items-center justify-center text-xs text-white">
                  2
                </span>
                <div className="w-px h-8 bg-white/40" />
                <span className="w-7 h-7 rounded-full border-2 border-white/60 flex items-center justify-center text-xs text-white">
                  3
                </span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-white/80 max-w-sm leading-relaxed">
                  Premium tours and reliable transfers designed for comfort, safety, and a seamless experience.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <Link href={'/tours'} className="cursor-pointer bg-white text-foreground rounded-full px-7 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                Explore Tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
