import React from 'react'
import ServicesSection from './ServicesSection'
import WhyChooseUs from './WhyChooseUs'
import PricingSection from './PricingSection'
import HowItWorksSection from './HowItWorksSection'
import TestimonialSection from './TestimonialSection'
import FAQSection from './FAQSection'

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Our Services
        </h2>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Airport Transfers</h3>
          <p>Timely and stress-free transfers to and from the airport.</p>
          <div className='mt-4'>
            <p className="text-muted-foreground leading-relaxed">Flight monitoring</p>
            <p className="text-muted-foreground leading-relaxed">Meet and greet service</p>
            <p className="text-muted-foreground leading-relaxed">On-time pickups</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-20 mb-4">Private Transfers</h3>
          <p>Travel at your convenience with flexible scheduling.</p>
          <div className='mt-4'>
            <p className="text-muted-foreground leading-relaxed">Door-to-door service</p>
            <p className="text-muted-foreground leading-relaxed">Comfortable vehicles</p>
            <p className="text-muted-foreground leading-relaxed">Personalized experience</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-20 mb-4">Tours</h3>
          <p>Explore New Zealand with carefully planned tours.</p>
          <div className='mt-4'>
            <p className="text-muted-foreground leading-relaxed">Scenic routes</p>
            <p className="text-muted-foreground leading-relaxed">Experienced drivers</p>
            <p className="text-muted-foreground leading-relaxed">Customizable itineraries</p>
          </div>
        </div>
        <div className='mb-4'>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-20 mb-4">Corporate Travel</h3>
          <p>Professional transport solutions for business needs.</p>
          <div className='mt-4'>
            <p className="text-muted-foreground leading-relaxed">Reliable scheduling</p>
            <p className="text-muted-foreground leading-relaxed">Clean, premium vehicles</p>
            <p className="text-muted-foreground leading-relaxed">Priority service</p>
          </div>
        </div>

        {/* <ServicesSection/>
        <WhyChooseUs/>
        <PricingSection/>
        <HowItWorksSection/>
        <TestimonialSection/>
        <FAQSection/> */}
    </div>
  )
}

export default ServicesPage
