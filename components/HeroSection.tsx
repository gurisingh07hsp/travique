import { ArrowRight, PlayCircle } from 'lucide-react'
import { Play } from 'next/font/google'
import React from 'react'

const HeroSection = () => {
  return (
     <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center bg-[#faf0f0] px-8 md:px-16 lg:px-20 py-16">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center text-xs text-muted-foreground">
              1
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Experience<br />
            The Magic of<br />
            Journey
          </h1>

          {/* Description */}
          <p className="text-sm text-muted-foreground max-w-sm mb-10 leading-relaxed">
            Fermentum luctus convalis non lectus. Aliquam at ut
            viverra non arcu massa laoreet commodo ac.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              Start Your Journey
            </button>
            <button className="w-10 h-10 rounded-md bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-opacity">
              <PlayCircle size={16} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* <img
            src={heroBg}
            alt="Scenic travel destination"
            className="w-full h-full object-cover min-h-[400px]"
          /> */}
          <div className='w-full h-full bg-gray-50 object-cover min-h-100'>

          </div>

          {/* Bottom overlay stats */}
          <div className="absolute bottom-5 right-0 bg-background/95 backdrop-blur-sm px-8 py-6 flex items-end gap-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-extrabold text-foreground">22</span>
              <span className="text-2xl font-bold text-foreground">+</span>
              <div className="ml-2 text-xs text-muted-foreground leading-tight">
                <p>Years of</p>
                <p>Experience</p>
              </div>
            </div>
          </div>

          {/* Explore More link */}
          <div className="absolute bottom-0 right-0 translate-y-full bg-background border-t border-border px-8 py-4 lg:translate-y-0 lg:bottom-0 lg:right-0">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Explore More
              <ArrowRight size={16} />
            </a>
            <div className="mt-1 h-px w-full bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
