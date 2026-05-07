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
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-90 md:min-h-150 lg:min-h-170 ps-2 md:ps-0 md:p-12 lg:p-16">
          {/* Top Content */}
          <div className="flex justify-between items-center h-full flex-col">

            {/* Heading */}
            <div>
              <p className='text-white text-center'>All you need is MilkyWayTours</p>
              <h1 className="text-2xl text-center md:text-4xl lg:text-5xl font-extrabold mt-2 px-2 text-white leading-[1.1] tracking-tight mb-4">
                Reliable Airport Transfers & Private Tours<br />
                {/* <br /> */}
                Across New Zealand
              </h1>
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
