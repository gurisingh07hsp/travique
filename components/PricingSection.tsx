import React from 'react'
import { Check } from "lucide-react";

const packages = [
  {
    price: "$150",
    description: "Perfect for small teams getting started with Travique",
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    price: "$350",
    description: "Perfect for small teams getting started with Travique",
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    price: "$890",
    description: "Perfect for small teams getting started with Travique",
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
];
const PricingSection = () => {
  return (
     <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Experience the World with Our
            <br />
            Exclusive Packages
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Fermentum turbo consella non lacus. Aliquam ut ut ularm motus elo masa mount
            automata eu. Fermentum turbo consella. Aliquam ut at
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-card shadow-xl rounded-2xl p-6 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="bg-muted rounded-xl aspect-video mb-5" />

              {/* Price */}
              <h3 className="text-3xl font-extrabold text-foreground mb-2">
                {pkg.price}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className='bg-black rounded-full p-1'>
                     <Check size={14} className="text-primary shrink-0" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-auto bg-black hover:bg-primary/90 text-primary   rounded-full px-6 py-2.5 text-sm font-medium transition-colors w-full">
                View All Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
