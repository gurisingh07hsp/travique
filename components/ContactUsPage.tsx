import { ArrowRight, MapPin, Phone } from 'lucide-react'
import React from 'react'
import BookingSearchSection from './BookingSearchSection'
import FAQSection from './FAQSection'

const ContactUsPage = () => {
  return (
    <div>
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left Side */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-4">
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Speak With Our
              <br />
              Travel Specialists
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Fermentum luctus convallis non lectus. Aliquam at ut viverra
              noniqu arcu massa laoreet.
            </p>

            {/* Our Office */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Our Office</h3>
              <div className="border-t border-border pt-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Indonesia */}
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-3">Indonesia</p>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin size={14} className="txt-main mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Jl. MH Thamrin No.1, Jakarta Pusat 10310
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="txt-main shrink-0" />
                      <p className="text-xs text-muted-foreground">+1 (333) 000-0000</p>
                    </div>
                  </div>

                  {/* Australia */}
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-3">Australia</p>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin size={14} className="txt-main mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        333 Collins, Melbourne VIC 3000, Australia
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary shrink-0" />
                      <p className="text-xs text-muted-foreground">+2 (444) 000-0000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-95 shrink-0 bg-card rounded-2xl shadow-lg p-8">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input placeholder="Your Name Here..." className="bg-[#F3F3F3] px-4 text-sm rounded-2xl w-full border-0 h-11" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input type="email" placeholder="Your Email Here..." className="bg-[#F3F3F3] px-4 text-sm rounded-2xl w-full border-0 h-11" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea placeholder="Your Message Here..." className="bg-[#F3F3F3] px-4 py-4 text-sm rounded-2xl w-full border-0 min-h-30 resize-none" />
              </div>
              <button className="flex items-center rounded-4xl p-2 bg-main">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight/>
                </div>
                <div className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <BookingSearchSection/>

    <FAQSection/>

    </div>
  )
}

export default ContactUsPage
