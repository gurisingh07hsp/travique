'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const faqs = [
  {
    question: 'How do I book an airport transfer in Queenstown?',
    answer:
      'You can contact MilkyWays Tours & Transfers with your travel details, including your pickup location, destination, travel date, flight information where required and the number of passengers travelling. Our team can then help arrange a suitable airport transfer.',
  },
  {
    question: 'Do you provide Queenstown Airport pickup services?',
    answer:
      'Yes. MilkyWays Tours & Transfers provides airport pickup services for travellers arriving at Queenstown Airport. You can arrange your transport in advance for a smoother arrival experience.',
  },
  {
    question: 'Can you take me from Queenstown Airport to my accommodation?',
    answer:
      'Yes. Our airport transport service can help travellers travel from Queenstown Airport to their accommodation or another agreed destination.',
  },
  {
    question: 'Do you provide transport to The Hobbit film set and North Island locations?',
    answer:
      'Yes. In addition to South Island transfers, MilkyWays Tours & Transfers assists international tourists with custom private driver and group transfer solutions connecting key regional hubs, including film tourism routes toward Matamata (Hobbiton Movie Set) and other North Island destinations.',
  },
  {
    question: 'Do you provide transport from hotels to Queenstown Airport?',
    answer:
      'Yes. We can also arrange airport drop-off services from your accommodation or another pickup location to Queenstown Airport.',
  },
  {
    question: 'Is private airport transport available in Queenstown?',
    answer:
      'Yes. MilkyWays Tours & Transfers offers private transfer options for travellers looking for a more personalised transportation experience.',
  },
  {
    question: 'Can you provide airport transfers for large groups?',
    answer:
      'Yes. We have transport options suitable for different group sizes. Contact us with the number of passengers and your travel requirements so we can help identify an appropriate vehicle option.',
  },
  {
    question: 'Are your airport transfers suitable for families?',
    answer:
      'Yes. Our airport transfer services can be suitable for families travelling with children and luggage. Please provide your passenger and luggage requirements when booking.',
  },
  {
    question: 'Do you offer airport transfers outside Queenstown?',
    answer:
      'MilkyWays Tours & Transfers provides transportation and travel services across different areas of New Zealand. Contact our team with your travel plans to discuss your transfer requirements.',
  },
]

const whyChooseItems = [
  {
    title: 'Comfortable Vehicles',
    description:
      'Travel in clean, comfortable and well-maintained vehicles designed to provide a pleasant journey.',
  },
  {
    title: 'Professional Drivers',
    description:
      'Our friendly and professional drivers are committed to helping you enjoy a smooth and comfortable transfer.',
  },
  {
    title: 'Reliable Service',
    description:
      'We understand the importance of timing when travelling to or from an airport and aim to provide dependable transport arrangements.',
  },
  {
    title: 'Local Knowledge',
    description:
      'As a New Zealand-based travel service, we understand the needs of visitors exploring Queenstown and other destinations throughout the country.',
  },
  {
    title: 'Private and Group Options',
    description:
      'From individual travellers to larger groups, we can help arrange transportation suited to your travel needs.',
  },
  {
    title: 'Transparent Communication',
    description:
      'We believe in making the booking process clear and straightforward, so you know what to expect from your journey.',
  },
]

const travelBenefits = [
  'Comfortable and well-maintained vehicles',
  'Friendly and professional drivers',
  'Private and group transport options',
  'Local New Zealand travel experience',
  'Reliable airport transportation',
  'Flexible travel solutions',
  'Personalised service',
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-14 first:mt-0">
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
          <Check size={18} className="txt-main shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function BookButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/airport-transfer-package/book-now"
      className={`inline-block bg-main text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity ${className}`}
    >
      Book Your Airport Transfer
    </Link>
  )
}

const AirportTransferServicePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="/packageImages/AirportTransferService.jpeg"
            alt="Airport Transfer Service in Queenstown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 opacity-90">
                MilkyWays Tours & Transfers
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Airport Transfer Service in Queenstown
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-12">
        {/* Intro */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Reliable Airport Transfers in Queenstown, New Zealand
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Looking for a reliable airport shuttle in Queenstown or a comfortable airport transfer in
            Queenstown? MilkyWays Tours & Transfers provides professional, convenient and comfortable
            airport transportation for travellers arriving in or departing from Queenstown. Whether you
            need a Queenstown Airport pickup, transport to your accommodation, or a smooth journey back
            to the airport, our team is here to make your travel experience easier.
          </p>
          <p>
            We understand that arriving in a new destination or catching a flight can be stressful.
            That&apos;s why we focus on providing dependable transport, comfortable vehicles and friendly
            service from the moment your journey begins.
          </p>
          <p>
            With MilkyWays Tours & Transfers, getting to and from Queenstown Airport is simple,
            comfortable and hassle-free.
          </p>
        </div>
        <div className="mt-8">
          <BookButton />
        </div>

        {/* Queenstown Airport Transfer Made Simple */}
        <SectionHeading>Queenstown Airport Transfer Made Simple</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Whether you&apos;re travelling alone, with family, friends or as part of a larger group,
            having reliable transport arranged in advance can make a big difference.
          </p>
          <p>
            Our airport transport in Queenstown is designed to provide a smooth connection between
            Queenstown Airport and your chosen destination. From accommodation in Queenstown to nearby
            areas and selected destinations across the region, we help travellers get where they need to
            go comfortably.
          </p>
        </div>
        <BulletList
          items={[
            'Individual travellers',
            'Couples',
            'Families',
            'Groups',
            'Corporate travellers',
            'International visitors',
            'Ski travellers with equipment',
            'Tour groups requiring private transport',
          ]}
        />
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Instead of worrying about finding transport after landing, you can arrange your journey in
          advance and enjoy a more relaxed start to your time in New Zealand.
        </p>

        {/* Queenstown Airport Pickup Services */}
        <SectionHeading>Queenstown Airport Pickup Services</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">Arriving at Queenstown Airport?</p>
          <p>
            After a long flight, the last thing you want is unnecessary stress trying to organise
            transportation. Our Queenstown Airport pickup service provides a convenient way to continue
            your journey after arrival. Once your transport is arranged, you can travel comfortably to
            your accommodation or chosen destination.
          </p>
          <p>
            Our professional drivers understand the importance of providing a welcoming and reliable
            service for visitors arriving in Queenstown.
          </p>
          <p>
            Whether Queenstown is the first stop on your New Zealand adventure or you&apos;re returning
            home after an unforgettable trip, MilkyWays Tours & Transfers is ready to help make your
            airport journey smoother.
          </p>
        </div>
        <h3 className="text-xl font-bold text-foreground mt-8 mb-2">Our Airport Pickup Service Includes:</h3>
        <BulletList
          items={[
            'Pre-arranged transportation',
            'Professional and friendly drivers',
            'Comfortable, well-maintained vehicles',
            'Private transport options',
            'Group transport options',
            'Assistance for travellers with luggage',
            'Flexible travel arrangements where available',
          ]}
        />

        {/* Transport From Queenstown Airport */}
        <SectionHeading>Transport From Queenstown Airport to Your Destination</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">Need reliable transport from Queenstown Airport?</p>
          <p>
            MilkyWays Tours & Transfers can provide comfortable transportation for travellers heading
            from the airport to their accommodation or onward destination.
          </p>
          <p>
            Whether you&apos;re searching for a taxi from Queenstown Airport to the city, travelling to a
            hotel, holiday accommodation or another destination, arranging your transfer in advance can
            provide additional peace of mind.
          </p>
          <p>Our service is designed around comfort, reliability and convenience.</p>
        </div>
        <h3 className="text-xl font-bold text-foreground mt-8 mb-2">Popular Airport Transfer Requirements Include:</h3>
        <BulletList
          items={[
            'Queenstown Airport to Queenstown accommodation',
            'Accommodation to Queenstown Airport',
            'Private airport transfers',
            'Group airport transportation',
            'Family transfers',
            'Corporate travel',
            'Ski season transportation',
            'Custom transport arrangements',
          ]}
        />
        <p className="mt-4 text-muted-foreground leading-relaxed">
          If your travel plans require something more flexible, our team can help you explore the best
          transport option for your group and journey.
        </p>

        {/* Comfortable Transport */}
        <SectionHeading>Comfortable Queenstown Airport Transport for Every Traveller</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            At MilkyWays Tours & Transfers, we understand that every traveller has different
            transportation needs.
          </p>
          <p>
            A solo traveller may need a simple airport pickup, while a family or group may require
            additional space for passengers and luggage. Larger groups may also need organised transport
            that allows everyone to travel together.
          </p>
          <p>
            Our fleet includes comfortable vehicles suitable for different group sizes and travel
            requirements.
          </p>
          <p>
            Depending on availability and your requirements, our transport options can accommodate
            smaller private groups as well as larger groups travelling around Queenstown and beyond.
          </p>
          <p>Our focus is always on providing a comfortable and well-organised journey.</p>
        </div>

        {/* Why Choose */}
        <SectionHeading>Why Choose MilkyWays for Your Airport Transfer in Queenstown?</SectionHeading>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Choosing the right airport transportation can make your journey significantly easier. At
          MilkyWays Tours & Transfers, we aim to provide a dependable travel experience from booking
          through to arrival.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseItems.map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Taxis vs Private */}
        <SectionHeading>Queenstown Taxis to Airport vs Private Airport Transfers</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Many travellers search online for Queenstown taxis to airport or airport taxi services when
            planning their journey.
          </p>
          <p>
            While a traditional taxi can be useful in certain situations, arranging a private airport
            transfer in advance can provide additional convenience, particularly for travellers with
            families, groups or significant luggage.
          </p>
          <p>
            With a pre-arranged airport transfer, your transportation can be organised around your
            travel plans before your journey begins.
          </p>
          <p>
            MilkyWays Tours & Transfers provides a personalised alternative for travellers looking for
            professional airport transport in Queenstown.
          </p>
        </div>
        <BulletList
          items={[
            'Families travelling with children',
            'Groups travelling together',
            'Visitors unfamiliar with the local area',
            'Travellers with larger amounts of luggage',
            'Corporate travellers',
            'International tourists',
            'Guests looking for private transport',
          ]}
        />

        {/* Film Locations */}
        <SectionHeading>
          Explore New Zealand&apos;s Iconic Film Locations & North Island Highlights
        </SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            New Zealand is world-famous as the iconic backdrop for The Hobbit and The Lord of the Rings
            movie trilogies. Travellers from across the globe visit New Zealand specifically to step
            into Middle-earth, with the world-renowned Hobbiton Movie Set in Matamata (Waikato, North
            Island) being one of the country&apos;s most requested tourist destinations.
          </p>
          <p>
            Whether you are landing in the South Island or connecting through North Island hubs,
            MilkyWays Tours & Transfers helps bridge your journey smoothly. We offer custom transfer
            solutions and private driver services designed for film enthusiasts, groups, and
            international visitors wanting to visit North Island icons like Hobbiton alongside South
            Island cinematic landscapes such as Earnslaw Burn and Skippers Canyon.
          </p>
          <p>
            Let us handle your airport connections and long-distance sightseeing transport so you can
            experience New Zealand&apos;s movie magic hassle-free.
          </p>
        </div>

        {/* Airport Transfers Across NZ */}
        <SectionHeading>Airport Transfers Across New Zealand</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            MilkyWays Tours & Transfers is more than a local transportation provider. We offer travel
            and transportation services designed to help visitors explore some of New Zealand&apos;s most
            beautiful destinations.
          </p>
          <p>
            In addition to airport transfers in New Zealand, we provide transport and tour experiences
            that can support different travel plans.
          </p>
        </div>
        <BulletList
          items={[
            'Airport Transfers',
            'Private Transfers',
            'Scenic Tours',
            'Private Tours',
            'Corporate Travel',
            'Ski Transport',
          ]}
        />
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Whether you&apos;re beginning your journey in Queenstown, exploring Milford Sound or travelling
          to another destination, our team aims to make your transportation experience simple and
          enjoyable.
        </p>

        {/* Travelling to Queenstown */}
        <SectionHeading>Travelling to Queenstown? Start Your Journey the Easy Way</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Queenstown is one of New Zealand&apos;s most exciting travel destinations, attracting visitors
            from around the world for its stunning scenery, adventure activities, ski fields, and film
            history.
          </p>
          <p>Your journey should be enjoyable from the moment you arrive.</p>
          <p>
            By arranging your Queenstown airport transfer before you travel, you can focus more on
            enjoying your trip and less on organising transportation after landing.
          </p>
          <p>
            Whether you&apos;re visiting for a short holiday, a ski trip, a Middle-earth scenic adventure,
            or an extended New Zealand journey across both islands, MilkyWays Tours & Transfers is here
            to help you travel comfortably.
          </p>
        </div>

        {/* Groups */}
        <SectionHeading>Airport Transfer Services for Groups</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Travelling with a larger group can make airport transportation more complicated.</p>
          <p>
            Instead of arranging multiple vehicles, MilkyWays Tours & Transfers can help provide
            transport options suitable for group travel.
          </p>
        </div>
        <BulletList
          items={[
            'Family holidays',
            'Friend groups',
            'Corporate groups',
            'International tour groups',
            'Wedding guests',
            'Event transportation',
            'Ski groups',
          ]}
        />
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Travelling together can make your airport transfer more convenient and provide a more
          organised start or finish to your journey. Contact our team with your group size and travel
          requirements to discuss the most suitable transport option.
        </p>

        {/* Drop-Off */}
        <SectionHeading>Queenstown Airport Drop-Off Service</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">Need transportation back to the airport?</p>
          <p>
            Our airport transfer service also assists travellers requiring transport to Queenstown
            Airport.
          </p>
          <p>
            Whether you&apos;re leaving your hotel, holiday accommodation or another destination, we can
            help arrange a comfortable journey for your departure.
          </p>
          <p>
            Reliable airport transportation is especially important when you have a flight to catch.
            Planning your transport in advance can help make the final stage of your trip smoother and
            more organised.
          </p>
          <p>
            Our team aims to ensure your airport transfer experience is comfortable from start to
            finish.
          </p>
        </div>

        {/* Book With MilkyWays */}
        <SectionHeading>Book Your Queenstown Airport Transfer With MilkyWays</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Looking for a dependable airport shuttle in Queenstown?</p>
          <p>
            Need professional airport transport in Queenstown for yourself, your family or your group?
          </p>
          <p>MilkyWays Tours & Transfers is ready to help you plan your journey.</p>
          <p>
            Whether you need a Queenstown Airport pickup, transport from your accommodation to the
            airport or private transportation for a larger group, we can help provide a travel solution
            based on your requirements.
          </p>
        </div>
        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Why Travel With MilkyWays Tours & Transfers?</h3>
        <BulletList items={travelBenefits} />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Book your airport transfer today and enjoy a smoother journey in Queenstown.
        </p>
        <div className="mt-8">
          <BookButton />
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-4">
            Questions & Answers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions About Airport Transfers in Queenstown
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border border-gray-100 ${openFaq === index ? 'shadow-md' : ''}`}
              >
                <button
                  className="w-full text-left flex justify-between items-start gap-4 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base">{faq.question}</span>
                  <span className="txt-main font-bold shrink-0">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 bg-muted rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-3">Ready to Travel?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Book a Reliable Airport Transfer in Queenstown
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-2">
            Start or finish your journey with comfortable and dependable airport transportation.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-2">
            Whether you&apos;re arriving in Queenstown, travelling to the airport or organising transport
            for a group, MilkyWays Tours & Transfers is here to help make your journey easier.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Travel comfortably. Travel confidently. Travel with MilkyWays.
          </p>
          <BookButton />
        </section>
      </div>
    </div>
  )
}

export default AirportTransferServicePage
