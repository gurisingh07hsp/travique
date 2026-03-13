import { ArrowRight, PlayCircle } from 'lucide-react'
import { Play } from 'next/font/google'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-90 md:min-h-150 lg:min-h-170 rounded-2xl overflow-hidden md:mx-auto max-w-350 md:px-4 pt-4">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            src={'/HeroImage.png'}
            alt="Travel suitcase with globe and airplane"
            className="w-full h-full lg:object-contain"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between h-full min-h-90 md:min-h-150 lg:min-h-170 ps-2 md:ps-0 md:p-12 lg:p-16">
          {/* Top Content */}
          <div className="flex-1 flex flex-col md:justify-center max-w-lg">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Experience<br />
              The Magic of<br />
              Journey
            </h1>

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
                  Fermentum luctus convallis non lectus. Aliquam at ut
                  viverra non arcu massa laoreet commodo ac.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-white text-foreground rounded-full px-7 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                Start Your Journey
              </button>
              <button className="w-11 h-11 hidden rounded-full bg-white/20 backdrop-blur-sm text-white md:flex items-center justify-center hover:bg-white/30 transition-colors">
                <PlayCircle size={20} />
              </button>
            </div>
          </div>

          {/* Bottom Right Stats */}
          <div className="self-end w-20 md:w-28 lg:w-65 absolute bottom-0 md:bottom-8 md:mr-8">
            <div className="rounded-t-lg md:px-6 md:py-4 flex md:gap-2">
              <span className="text-sm md:text-4xl lg:text-6xl font-bold text-foreground">22</span>
              <span className="text-sm md:text-4xl lg:text-6xl font-bold text-foreground">+</span>
              <div className="ml-2 text-xs text-muted-foreground leading-tight">
                <p className="md:text-lg text-foreground">Years of</p>
                <p className="md:text-lg text-foreground">Experience</p>
              </div>
            </div>
            <div className="bg-background border-b border-border md:ms-8 py-3">
              <a
                href="#"
                className="text-xs md:text-sm flex items-center md:gap-2 font-bold text-foreground hover:opacity-70 transition-opacity"
              >
                Explore More
                <ArrowRight size={16} />
              </a>
              <div className="mt-1 h-px w-full bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
