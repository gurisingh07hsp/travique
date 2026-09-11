'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, Plane, Users, Luggage, Clock } from 'lucide-react'

const BOOK_HREF = '/airport-transfer-package/book-now'
const PHONE_HREF = 'tel:+642108111920'

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

const fleetPhotos = [
  { src: '/ourFleet/mercedes-sprinter-7-seater.png', alt: 'Mercedes Sprinter 7 Seater' },
  { src: '/ourFleet/car3.jpeg', alt: 'Mercedes Sprinter 12 Seater' },
  { src: '/ourFleet/car2.jpeg', alt: 'Mercedes Sprinter 18 Seater' },
  { src: '/ourFleet/car8.jpeg', alt: 'Ssangyong Coach 37 Seater' },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 mt-12">
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
  children = 'Book Your Airport Transfer',
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={BOOK_HREF}
      className={`inline-flex items-center justify-center gap-2 bg-main text-white rounded-full px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-orange-400/25 ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  )
}

function CallButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white rounded-full px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors ${className}`}
    >
      <Phone size={16} />
      +64 210 811 1920
    </a>
  )
}

const AirportTransferServicePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-24">
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img
            src="/packageImages/AirportTransferService.jpg"
            alt="Airport transfer service in Queenstown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-6 flex items-center">
            <div className="max-w-2xl text-white">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold mb-3 text-orange-300">
                Queenstown Airport Transfers
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Airport Transfer Service in Queenstown
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                Reliable pickup and drop-off at Queenstown Airport. Comfortable vehicles, professional
                drivers, and transfers arranged before you land.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <BookButton />
                <CallButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-10 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Plane, label: 'Airport pickup & drop-off' },
            { icon: Clock, label: 'Pre-arranged, on time' },
            { icon: Users, label: 'Private & group vehicles' },
            { icon: Luggage, label: 'Space for luggage & ski gear' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl shadow-md p-4 md:p-5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#ff762154] flex items-center justify-center shrink-0">
                <item.icon size={18} className="txt-main" />
              </div>
              <p className="text-sm font-semibold text-[#1a1a1a] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5">
            Reliable Airport Transfers in Queenstown, New Zealand
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
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
          <div className="mt-7">
            <BookButton />
          </div>

          <SectionHeading>Queenstown Airport Transfer Made Simple</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Whether you&apos;re travelling alone, with family, friends or as part of a larger group,
                having reliable transport arranged in advance can make a big difference.
              </p>
              <p>
                Our airport transport in Queenstown is designed to provide a smooth connection between
                Queenstown Airport and your chosen destination. From accommodation in Queenstown to nearby
                areas and selected destinations across the region, we help travellers get where they need
                to go comfortably.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/QueenstownPack.jpg"
                alt="Queenstown scenery"
                className="w-full h-full object-cover"
              />
            </div>
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
          <p className="mt-4 text-gray-600 leading-relaxed">
            Instead of worrying about finding transport after landing, you can arrange your journey in
            advance and enjoy a more relaxed start to your time in New Zealand.
          </p>

          <SectionHeading>Queenstown Airport Pickup Services</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow order-2 md:order-1">
              <img
                src="/packageImages/AirportTransferService.jpeg"
                alt="Queenstown Airport pickup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed order-1 md:order-2">
              <p className="font-semibold text-[#1a1a1a]">Arriving at Queenstown Airport?</p>
              <p>
                After a long flight, the last thing you want is unnecessary stress trying to organise
                transportation. Our Queenstown Airport pickup service provides a convenient way to
                continue your journey after arrival. Once your transport is arranged, you can travel
                comfortably to your accommodation or chosen destination.
              </p>
              <p>
                Our professional drivers understand the importance of providing a welcoming and reliable
                service for visitors arriving in Queenstown.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Whether Queenstown is the first stop on your New Zealand adventure or you&apos;re returning
            home after an unforgettable trip, MilkyWays Tours & Transfers is ready to help make your
            airport journey smoother.
          </p>
          <h3 className="text-xl font-bold text-[#1a1a1a] mt-8 mb-2">Our Airport Pickup Service Includes:</h3>
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

          <SectionHeading>Transport From Queenstown Airport to Your Destination</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="font-semibold text-[#1a1a1a]">Need reliable transport from Queenstown Airport?</p>
            <p>
              MilkyWays Tours & Transfers can provide comfortable transportation for travellers heading
              from the airport to their accommodation or onward destination.
            </p>
            <p>
              Whether you&apos;re searching for a taxi from Queenstown Airport to the city, travelling to a
              hotel, holiday accommodation or another destination, arranging your transfer in advance can
              provide additional peace of mind. Our service is designed around comfort, reliability and
              convenience.
            </p>
          </div>
          <h3 className="text-xl font-bold text-[#1a1a1a] mt-8 mb-2">
            Popular Airport Transfer Requirements Include:
          </h3>
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
          <p className="mt-4 text-gray-600 leading-relaxed">
            If your travel plans require something more flexible, our team can help you explore the best
            transport option for your group and journey.
          </p>

          <SectionHeading>Comfortable Queenstown Airport Transport for Every Traveller</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
            <p>
              At MilkyWays Tours & Transfers, we understand that every traveller has different
              transportation needs. A solo traveller may need a simple airport pickup, while a family or
              group may require additional space for passengers and luggage. Larger groups may also need
              organised transport that allows everyone to travel together.
            </p>
            <p>
              Our fleet includes comfortable vehicles suitable for different group sizes and travel
              requirements. Depending on availability, our transport options can accommodate smaller
              private groups as well as larger groups travelling around Queenstown and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fleetPhotos.map((car) => (
              <div key={car.src} className="rounded-xl overflow-hidden shadow h-32 md:h-40">
                <img src={car.src} alt={car.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our focus is always on providing a comfortable and well-organised journey.
          </p>

          <SectionHeading>Why Choose MilkyWays for Your Airport Transfer in Queenstown?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-6">
            Choosing the right airport transportation can make your journey significantly easier. At
            MilkyWays Tours & Transfers, we aim to provide a dependable travel experience from booking
            through to arrival.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden min-h-64">
              <img
                src="/whychooseus.jpeg"
                alt="Why choose MilkyWays Tours and Transfers"
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

          <SectionHeading>Queenstown Taxis to Airport vs Private Airport Transfers</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
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
              travel plans before your journey begins. MilkyWays Tours & Transfers provides a
              personalised alternative for travellers looking for professional airport transport in
              Queenstown.
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

          <SectionHeading>
            Explore New Zealand&apos;s Iconic Film Locations & North Island Highlights
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                New Zealand is world-famous as the iconic backdrop for The Hobbit and The Lord of the
                Rings movie trilogies. Travellers from across the globe visit New Zealand specifically to
                step into Middle-earth, with the world-renowned Hobbiton Movie Set in Matamata (Waikato,
                North Island) being one of the country&apos;s most requested tourist destinations.
              </p>
              <p>
                Whether you are landing in the South Island or connecting through North Island hubs,
                MilkyWays Tours & Transfers helps bridge your journey smoothly. We offer custom transfer
                solutions and private driver services designed for film enthusiasts, groups, and
                international visitors wanting to visit North Island icons like Hobbiton alongside South
                Island cinematic landscapes such as Earnslaw Burn and Skippers Canyon.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow">
              <img
                src="/packageImages/glenorchy.jpeg"
                alt="South Island cinematic landscapes near Queenstown"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Let us handle your airport connections and long-distance sightseeing transport so you can
            experience New Zealand&apos;s movie magic hassle-free.
          </p>

          <SectionHeading>Airport Transfers Across New Zealand</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 mb-4">
            {[
              { src: '/packageImages/MilfordSoundDayTour.webp', label: 'Scenic Tours' },
              { src: '/packageImages/SkiFieldTransport.png', label: 'Ski Transport' },
              { src: '/packageImages/CustomPrivateTour1.jpg', label: 'Private Tours' },
            ].map((card) => (
              <div key={card.label} className="relative rounded-xl overflow-hidden h-36 md:h-44">
                <img src={card.src} alt={card.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{card.label}</p>
              </div>
            ))}
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
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you&apos;re beginning your journey in Queenstown, exploring Milford Sound or travelling
            to another destination, our team aims to make your transportation experience simple and
            enjoyable.
          </p>

          <SectionHeading>Travelling to Queenstown? Start Your Journey the Easy Way</SectionHeading>
          <div className="relative rounded-2xl overflow-hidden mb-5 h-48 md:h-64">
            <img
              src="/packageImages/wanaka.jpeg"
              alt="Travelling to Queenstown"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Queenstown is one of New Zealand&apos;s most exciting travel destinations, attracting visitors
              from around the world for its stunning scenery, adventure activities, ski fields, and film
              history. Your journey should be enjoyable from the moment you arrive.
            </p>
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

          <SectionHeading>Airport Transfer Services for Groups</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Travelling with a larger group can make airport transportation more complicated.</p>
              <p>
                Instead of arranging multiple vehicles, MilkyWays Tours & Transfers can help provide
                transport options suitable for group travel.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-52 shadow">
              <img
                src="/packageImages/weddingTransfers.jpeg"
                alt="Group airport transfers"
                className="w-full h-full object-cover"
              />
            </div>
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
          <p className="mt-4 text-gray-600 leading-relaxed">
            Travelling together can make your airport transfer more convenient and provide a more
            organised start or finish to your journey. Contact our team with your group size and travel
            requirements to discuss the most suitable transport option.
          </p>

          <SectionHeading>Queenstown Airport Drop-Off Service</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="font-semibold text-[#1a1a1a]">Need transportation back to the airport?</p>
            <p>
              Our airport transfer service also assists travellers requiring transport to Queenstown
              Airport. Whether you&apos;re leaving your hotel, holiday accommodation or another destination,
              we can help arrange a comfortable journey for your departure.
            </p>
            <p>
              Reliable airport transportation is especially important when you have a flight to catch.
              Planning your transport in advance can help make the final stage of your trip smoother and
              more organised. Our team aims to ensure your airport transfer experience is comfortable from
              start to finish.
            </p>
          </div>

          <SectionHeading>Book Your Queenstown Airport Transfer With MilkyWays</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Looking for a dependable airport shuttle in Queenstown?</p>
            <p>
              Need professional airport transport in Queenstown for yourself, your family or your group?
              MilkyWays Tours & Transfers is ready to help you plan your journey.
            </p>
            <p>
              Whether you need a Queenstown Airport pickup, transport from your accommodation to the
              airport or private transportation for a larger group, we can help provide a travel solution
              based on your requirements.
            </p>
          </div>
          <h3 className="text-xl font-bold text-[#1a1a1a] mt-8 mb-4">
            Why Travel With MilkyWays Tours & Transfers?
          </h3>
          <BulletList items={travelBenefits} />
          <p className="mt-6 text-gray-600 leading-relaxed">
            Book your airport transfer today and enjoy a smoother journey in Queenstown.
          </p>
          <div className="mt-6">
            <BookButton />
          </div>

          <section className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-3">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions About Airport Transfers in Queenstown
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
        </div>

        <aside className="lg:pt-0">
          <div className="lg:sticky lg:top-24 bg-[#1c1c1c] rounded-3xl p-6 text-white">
            <p className="text-center bg-[#2e2e2e] rounded-full py-2.5 font-semibold mb-5">
              Book this transfer
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Pre-arrange pickup or drop-off at Queenstown Airport. Tell us your flight details and
              passenger count — we&apos;ll match the right vehicle.
            </p>
            {[
              'Flight tracking',
              'On-time pickup',
              'Meet & greet (optional)',
              'Comfortable vehicles',
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
              Book Your Airport Transfer
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="/packageImages/QueenstownPack.jpg"
            alt="Book a Queenstown airport transfer"
            className="w-full h-72 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs uppercase tracking-[0.22em] text-orange-300 font-semibold mb-3">
              Ready to Travel?
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl">
              Book a Reliable Airport Transfer in Queenstown
            </h2>
            <p className="text-white/85 max-w-xl mb-7 leading-relaxed">
              Start or finish your journey with comfortable, dependable transport. Travel comfortably.
              Travel confidently. Travel with MilkyWays.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <BookButton />
              <CallButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AirportTransferServicePage
