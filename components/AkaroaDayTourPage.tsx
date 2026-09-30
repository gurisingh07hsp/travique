'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, MapPin, Clock, Camera, Waves } from 'lucide-react'

const BOOK_HREF = '/akaroa-day-tour-from-christchurch/book-now'
const PHONE_HREF = 'tel:+642108111920'

const faqs = [
  {
    question: 'Is Akaroa worth visiting as a day trip from Christchurch?',
    answer:
      'Yes. Akaroa is close enough to Christchurch for a full-day excursion and offers a combination of Banks Peninsula scenery, harbour views, French-inspired character, local food and wildlife experiences. Tourism New Zealand lists Akaroa as approximately 1 hour 20 minutes from Christchurch.',
  },
  {
    question: 'How far is Akaroa from Christchurch?',
    answer:
      'Akaroa is approximately 86 km from Christchurch and around 90 minutes by road, depending on travel conditions and the route taken.',
  },
  {
    question: 'Can I book a private Akaroa tour from Christchurch?',
    answer:
      'A private Christchurch-to-Akaroa itinerary can be arranged around your travelling group\'s requirements. Discuss your preferred pickup, timing, stops and activities when planning your trip.',
  },
  {
    question: 'Can I include an Akaroa Harbour cruise?',
    answer:
      'Yes, a harbour or wildlife cruise can be considered as part of your day. Cruise availability and schedules vary, so confirm the activity and timing when booking. Wildlife sightings are not guaranteed.',
  },
  {
    question: 'What wildlife can I see around Akaroa?',
    answer:
      'Akaroa Harbour is known for wildlife experiences that can include Hector\'s dolphins, New Zealand fur seals, little penguins and seabirds. Sightings depend on natural conditions and are never guaranteed.',
  },
  {
    question: 'Is Akaroa a French village?',
    answer:
      'Akaroa has a distinctive French character and history resulting from its French settlement heritage. Visitors can see this influence in the town\'s street names, architecture, food and overall atmosphere.',
  },
  {
    question: 'How long should I spend in Akaroa?',
    answer:
      'A full day from Christchurch provides enough time to enjoy the journey, explore the village and potentially add an activity such as a harbour cruise. The ideal timing depends on your preferred stops and activities.',
  },
  {
    question: 'Can I customise my Akaroa day trip?',
    answer:
      'Yes. A private tour can be planned around your interests, such as scenic viewpoints, village exploration, food, photography, harbour activities or additional sightseeing.',
  },
  {
    question: 'Is a Christchurch to Akaroa private tour suitable for families?',
    answer:
      'Yes. Private travel can be particularly convenient for families because the itinerary can be discussed around your group\'s timing, stops and requirements.',
  },
  {
    question: 'What should I bring on an Akaroa day trip?',
    answer:
      'Bring comfortable walking shoes, weather-appropriate clothing, sun protection, water and a camera or phone if you want to capture the scenery. If you plan to join a water-based activity, check the activity provider\'s requirements before departure.',
  },
]

const whyChooseItems = [
  {
    title: 'Comfortable, Well-Maintained Vehicles',
    description: 'Enjoy the journey in a vehicle designed to make longer sightseeing days comfortable.',
  },
  {
    title: 'Professional & Friendly Drivers',
    description:
      'Travel with a driver who understands the importance of punctuality, communication and a welcoming experience.',
  },
  {
    title: 'Reliable Service',
    description: 'Your day trip should feel organised from pickup through to the return journey.',
  },
  {
    title: 'Local Knowledge',
    description: 'Local knowledge can help make the journey more than simply travelling between two points.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'MilkyWays focuses on clear pricing without hidden fees, helping you understand your travel arrangements before you book.',
  },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 mt-10 md:mt-12 break-words">
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-gray-600 leading-relaxed">
          <Check size={18} className="txt-main shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function BookButton({
  children = 'Book Your Akaroa Day Tour',
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={BOOK_HREF}
      className={`inline-flex items-center justify-center gap-2 bg-main text-white rounded-full px-5 sm:px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-orange-400/25 w-full sm:w-auto ${className}`}
    >
      {children}
      <ArrowRight size={16} className="shrink-0" />
    </Link>
  )
}

function CallButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white rounded-full px-5 sm:px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto ${className}`}
    >
      <Phone size={16} className="shrink-0" />
      +64 210 811 1920
    </a>
  )
}

const AkaroaDayTourPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-24">
      <section className="relative">
        <div className="relative min-h-[520px] md:h-[520px] overflow-hidden">
          <img
            src="/packageImages/ChristchurchDiscoveryTour.jpg"
            alt="Akaroa day tour from Christchurch across Banks Peninsula"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/35" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 flex items-center min-h-[520px]">
            <div className="max-w-2xl text-white w-full drop-shadow-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] font-semibold mb-3 text-orange-300">
                Private Tours NZ
              </p>
              <h1 className="text-[28px] leading-8 sm:text-4xl md:text-5xl font-extrabold sm:leading-tight mb-3 md:mb-4">
                Akaroa Day Tour from Christchurch
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Explore Akaroa from Christchurch with a private day tour across Banks Peninsula. Scenic
                views, Akaroa Harbour, local charm and a flexible itinerary.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 max-w-md sm:max-w-none">
                <BookButton />
                <CallButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-4 md:-mt-10 relative z-10 mb-8 md:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: MapPin, label: 'Christchurch pickup' },
            { icon: Clock, label: 'Around 90 minutes each way' },
            { icon: Camera, label: 'Scenic Banks Peninsula drive' },
            { icon: Waves, label: 'Harbour & village time' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl shadow-md p-3.5 md:p-5 flex items-center gap-3 min-w-0"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#ff762154] flex items-center justify-center shrink-0">
                <item.icon size={18} className="txt-main" />
              </div>
              <p className="text-[13px] md:text-sm font-semibold text-[#1a1a1a] leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10">
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 break-words">
            Akaroa Day Tour from Christchurch
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Looking for an easy way to experience one of Canterbury&apos;s most scenic coastal
              destinations? An Akaroa Day Tour from Christchurch gives you the opportunity to travel
              across Banks Peninsula, enjoy spectacular landscapes, explore the charming waterfront
              village of Akaroa and experience the area&apos;s unique French character—all without having
              to organise every part of the journey yourself.
            </p>
            <p>
              With MilkyWays Tours & Transfers, you can enjoy a comfortable private journey from
              Christchurch to Akaroa with a professional local driver and the flexibility to shape the
              day around your interests.
            </p>
            <p>
              Whether you&apos;re travelling as a couple, with family or as a small group, an Akaroa Day
              Trip can combine scenic drives, local history, waterfront time, food, sightseeing and
              optional wildlife experiences into one relaxed day.
            </p>
          </div>
          <div className="mt-7">
            <BookButton />
          </div>

          <SectionHeading>Discover Akaroa on a Private Day Tour from Christchurch</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Akaroa sits on Banks Peninsula, approximately 86 km from Christchurch and around 90
                minutes away by road. The journey itself is part of the experience, taking you away from
                Christchurch and into the distinctive volcanic landscapes and coastal scenery of the
                peninsula.
              </p>
              <p>
                Instead of spending your day worrying about directions, parking and driving unfamiliar
                roads, a private tour lets you sit back and enjoy the journey.
              </p>
              <p>
                MilkyWays Tours & Transfers focuses on making every trip comfortable, reliable and
                straightforward, with professional drivers, well-maintained vehicles and local knowledge.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/wanaka.jpeg"
                alt="Scenic coastal landscapes similar to Banks Peninsula"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Your day can be planned around what you actually want to experience—from scenic viewpoints
            and Akaroa&apos;s waterfront to local food, village exploration and optional harbour
            activities.
          </p>

          <SectionHeading>Why Take a Day Trip from Christchurch to Akaroa?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Akaroa offers a different atmosphere from Christchurch. The journey takes you into Banks
              Peninsula, where coastal landscapes, rolling hills and harbour views create a memorable
              backdrop for a day away from the city.
            </p>
            <p>
              Akaroa itself is known for its French character, historic atmosphere, harbour and access to
              wildlife experiences. Tourism New Zealand describes the town as a popular destination for
              sightseeing, French food and dolphin cruises.
            </p>
            <p>An Akaroa day trip can be particularly appealing if you want to:</p>
          </div>
          <BulletList
            items={[
              'Escape Christchurch for a full day',
              'Explore Banks Peninsula',
              'Enjoy scenic coastal views',
              "Wander around Akaroa's waterfront",
              "Experience the town's French-inspired character",
              'Enjoy local cafés and food',
              'Add a harbour or wildlife cruise',
              'Travel privately instead of joining a large group',
              'Build a day around your own interests',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Rather than rushing from one attraction to another, a private itinerary gives you more
            opportunity to enjoy the destination at a comfortable pace.
          </p>

          <SectionHeading>What Can You Experience on an Akaroa Day Tour?</SectionHeading>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Scenic Drive Across Banks Peninsula</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow order-2 md:order-1">
              <img
                src="/packageImages/CustomPrivateTour1.jpg"
                alt="Scenic drive across Banks Peninsula"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed order-1 md:order-2">
              <p>The journey from Christchurch to Akaroa is an important part of the experience.</p>
              <p>
                As you travel towards Banks Peninsula, the landscape changes from Christchurch&apos;s urban
                surroundings to open countryside, rolling hills and coastal scenery.
              </p>
              <p>
                Depending on your itinerary, your driver can allow time for suitable scenic stops where
                you can stretch your legs, take photographs and appreciate the views.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            For visitors who enjoy photography, nature and road-trip experiences, the Banks Peninsula
            journey can be one of the highlights of the day.
          </p>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">
            Explore the French-Inspired Village of Akaroa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Akaroa&apos;s French influence is one of the features that gives the town its distinctive
                character.
              </p>
              <p>
                You can explore streets such as Rue Lavaud and Rue Jolie, wander along the waterfront,
                visit local shops and cafés, or simply take some time to enjoy the relaxed atmosphere.
              </p>
              <p>
                Tourism New Zealand notes Akaroa&apos;s French cuisine, harbour, historic character and
                French settlement history as important parts of its appeal.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow">
              <img
                src="/packageImages/wineTour.jpeg"
                alt="Village wandering, cafés and local character"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A French Village Akaroa Tour doesn&apos;t need to feel like a formal history lesson. You can
            experience the character of the village naturally while walking, eating, photographing the
            waterfront and exploring local attractions.
          </p>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Enjoy Akaroa Harbour and Wildlife</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Akaroa Harbour is another major reason travellers include Akaroa in their Canterbury
              itinerary.
            </p>
            <p>
              Harbour cruises can provide an opportunity to experience the coastline from the water and
              look for wildlife. Depending on the experience and conditions, wildlife encounters can
              include Hector&apos;s dolphins, New Zealand fur seals, little penguins and seabirds.
            </p>
            <p>
              A cruise is an optional addition rather than something that should be assumed to be included
              in every Akaroa tour. Availability, timing, weather and individual cruise-provider
              conditions can affect the experience.
            </p>
            <p>
              If a harbour cruise is important to your plans, it is worth discussing it when arranging
              your itinerary.
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">
            Take Time for Local Food, Cafés and Waterfront Wandering
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Akaroa isn&apos;t only about sightseeing. You can allow time to enjoy a relaxed lunch, visit a
            café, browse local shops or simply sit beside the harbour and take in the atmosphere. This is
            one of the advantages of a private Akaroa Day Trip: your itinerary can be structured around
            the experience you want rather than trying to fit into a rigid schedule.
          </p>

          <SectionHeading>Private Tour Akaroa NZ – Travel at Your Own Pace</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A Private Tour Akaroa NZ is particularly useful for travellers who want more control over
              their day. Instead of travelling with a large group, a private journey can provide a more
              personal experience for your own travelling party.
            </p>
            <p>Depending on your plans, you can discuss:</p>
          </div>
          <BulletList
            items={[
              'Preferred pickup location',
              'Departure timing',
              'Scenic stops',
              'Time spent exploring Akaroa',
              'Food and café stops',
              'Harbour activities',
              'Photography opportunities',
              'Family requirements',
              'Additional sightseeing',
              'Return timing',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            The goal is not simply to get from Christchurch to Akaroa. It is to create a day that works
            for you.
          </p>

          <SectionHeading>What Does a Christchurch to Akaroa Day Trip Include?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-3">
            The exact inclusions should always be confirmed when booking, particularly for optional
            attractions and cruises. A MilkyWays private day trip can be planned around the following core
            experience:
          </p>
          <BulletList
            items={[
              'Private transportation',
              'Professional and friendly driver',
              'Comfortable, well-maintained vehicle',
              'Christchurch pickup arrangement',
              'Scenic journey towards Akaroa',
              'Time to explore Akaroa',
              'Flexible itinerary planning',
              'Local knowledge and guidance',
              'Return journey to Christchurch',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Optional experiences, attraction admissions, meals and harbour cruises should be confirmed
            separately when planning your trip.
          </p>

          <SectionHeading>Who Is an Akaroa Day Trip Suitable For?</SectionHeading>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Couples</p>
              <p>
                Enjoy a relaxed coastal escape from Christchurch with scenic drives, waterfront walks,
                cafés and time together in Akaroa.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Families</p>
              <p>
                A private vehicle can make the journey more comfortable for families who prefer
                flexibility around stops, meals and timing.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Small Groups</p>
              <p>
                Travelling with friends or a small group allows you to create an itinerary around shared
                interests without following a large tour group&apos;s schedule.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">International Visitors</p>
              <p>
                If you&apos;re visiting New Zealand for a limited time, a Christchurch-to-Akaroa day trip
                can add a scenic Canterbury experience to your itinerary without requiring an overnight
                stay.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Photography & Nature Lovers</p>
              <p>
                Banks Peninsula scenery, Akaroa Harbour and coastal landscapes provide plenty of
                opportunities to stop, explore and capture photographs.
              </p>
            </div>
          </div>

          <SectionHeading>Customise Your Akaroa Day Trip</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Every traveller has a different idea of the perfect day. Some visitors may want to spend
              more time around the harbour. Others may prioritise scenic photography, local food, history
              or wildlife.
            </p>
            <p>
              That&apos;s why a Customised Akaroa Day Trip can be a practical choice for travellers who
              don&apos;t want a one-size-fits-all itinerary. Tell MilkyWays what matters most to you, and
              your journey can be planned around your group&apos;s interests and available time.
            </p>
            <p>
              The itinerary can also be adjusted where practical based on weather, road conditions,
              attraction availability and operating schedules.
            </p>
          </div>

          <SectionHeading>How Long Does It Take to Get from Christchurch to Akaroa?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Akaroa is approximately 86 km from Christchurch and around 90 minutes away by road under
              typical conditions.
            </p>
            <p>
              However, an Akaroa day tour should not be thought of simply as a 90-minute journey there and
              back. The value of the trip comes from the entire experience: travelling across Banks
              Peninsula, taking scenic breaks, exploring Akaroa, enjoying the waterfront and adding
              activities that suit your itinerary.
            </p>
            <p>
              For that reason, allowing a full day gives you much more opportunity to experience the area
              without rushing.
            </p>
          </div>

          <SectionHeading>Why Choose MilkyWays Tours & Transfers?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
            <p>
              MilkyWays Tours & Transfers is a New Zealand-based travel service focused on reliable
              airport transfers and private tours. The company&apos;s approach is built around comfortable
              vehicles, professional and friendly drivers, punctual service, local knowledge and
              transparent pricing with no hidden fees.
            </p>
            <p>Its goal is simple: make every journey effortless and memorable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden min-h-64">
              <img
                src="/ourFleet/car2.jpeg"
                alt="Comfortable MilkyWays vehicle for an Akaroa day tour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#f8f8f8]">
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            MilkyWays is based in Queenstown and operates as a New Zealand tourism and transfer provider,
            with the stated goal of becoming a trusted local partner for travellers.
          </p>

          <section className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-3">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions About Akaroa Day Tours
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border border-gray-200 ${openFaq === index ? 'shadow-md' : ''}`}
                >
                  <button
                    className="w-full text-left flex justify-between items-start gap-4 cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-[#1a1a1a] text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span className="txt-main font-bold shrink-0">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <SectionHeading>Plan Your Akaroa Day Trip from Christchurch</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              From the scenic landscapes of Banks Peninsula to the harbour and French-inspired streets of
              Akaroa, a day trip from Christchurch gives you the opportunity to experience a very
              different side of Canterbury.
            </p>
            <p>
              With MilkyWays Tours & Transfers, you can travel in comfort, avoid the stress of driving and
              build your journey around the experiences that matter to you.
            </p>
            <p>
              Whether you&apos;re looking for a Private Tour Akaroa NZ, a scenic Akaroa Day Tour from
              Christchurch, or a Customised Akaroa Day Trip, the team can help you plan a comfortable and
              memorable journey.
            </p>
            <p>
              Ready to explore Akaroa from Christchurch? Contact MilkyWays Tours & Transfers to discuss
              your preferred itinerary, pickup arrangements and travel requirements.
            </p>
          </div>
          <div className="mt-6">
            <BookButton />
          </div>

          <section className="mt-12 md:mt-16 mb-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/packageImages/glenorchy.jpeg"
                alt="Plan your Akaroa day tour from Christchurch"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-14 md:py-16">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-orange-300 font-semibold mb-3">
                  Ready to Travel?
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl leading-snug">
                  Book Your Akaroa Day Tour from Christchurch
                </h2>
                <p className="text-white/85 max-w-xl mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
                  Travel in comfort across Banks Peninsula and enjoy Akaroa at your own pace with
                  MilkyWays Tours & Transfers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md sm:max-w-none">
                  <BookButton />
                  <CallButton />
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="hidden lg:block min-w-0">
          <div className="sticky top-24 z-20 bg-[#1c1c1c] rounded-3xl p-5 sm:p-6 text-white">
            <p className="text-center bg-[#2e2e2e] rounded-full py-2.5 font-semibold mb-5">
              Book this tour
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Private Christchurch pickup, a scenic Banks Peninsula drive and time to explore Akaroa —
              planned around your group.
            </p>
            {[
              'Private transportation',
              'Professional driver',
              'Christchurch pickup',
              'Flexible itinerary',
            ].map((item) => (
              <div key={item}>
                <div className="flex items-center gap-3 py-3">
                  <span className="w-2 h-2 rounded-full bg-main shrink-0" />
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
                <div className="h-px bg-white/8" />
              </div>
            ))}
            <Link
              href={BOOK_HREF}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-main text-white font-bold py-4 rounded-2xl text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Book Your Akaroa Day Tour
              <ArrowRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3.5 rounded-2xl text-sm hover:bg-white/5 transition-colors"
            >
              <Phone size={16} />
              Call +64 210 811 1920
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default AkaroaDayTourPage
