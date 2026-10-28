'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, MapPin, Clock, Waves, Fish } from 'lucide-react'

const BOOK_HREF = '/kaikoura-day-tour-from-christchurch/book-now'
const PHONE_HREF = 'tel:+642108111920'

const faqs = [
  {
    question: 'How long is the drive from Christchurch to Kaikoura?',
    answer: 'About 2.5 hours each way, around 183 km on SH1.',
  },
  {
    question: 'Is Kaikoura worth a day trip?',
    answer:
      'Yes, if you pick one boat activity and keep the rest simple. If you want multiple activities, stay overnight.',
  },
  {
    question: 'What if no whales are seen?',
    answer:
      'Whale Watch Kaikoura refunds 80% of the fare if no whale is sighted. Check current terms when you book.',
  },
  {
    question: 'Do I need to book whale watching ahead?',
    answer: 'Yes. Book your boat first, then arrange transport around it.',
  },
  {
    question: 'Can children come on a private tour?',
    answer:
      'Yes, but age rules differ by activity. Whale Watch child pricing applies to ages 3 to 15. Confirm seal swim age rules with the operator.',
  },
  {
    question: 'Can I do a seal swim if I can\'t swim well?',
    answer: 'Seal swims require water confidence, so the walk or whale watch is a better choice.',
  },
  {
    question: 'Is a private Kaikoura tour more expensive than a group tour?',
    answer:
      'Usually more per person for small groups, but it can be competitive for families or groups of four or more. Contact us with your group size and travel date for a quote.',
  },
  {
    question: 'Can you pick us up from Christchurch Airport?',
    answer: 'Yes. We can also combine this with an airport transfer.',
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
  children = 'Book Your Kaikoura Day Tour',
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

const optionRows = [
  {
    label: 'Who it suits',
    self: 'Confident drivers on a budget',
    group: 'Solo travellers, one-off visitors',
    priv: 'Families, small groups, anyone wanting flexibility',
  },
  {
    label: 'Pickup',
    self: 'You',
    group: 'Set pickup points',
    priv: 'Your accommodation or the airport',
  },
  {
    label: 'Flexibility',
    self: 'Full',
    group: 'Low',
    priv: 'High, you set the stops',
  },
  {
    label: 'Driving',
    self: 'You, about 5 hrs return',
    group: 'None',
    priv: 'None',
  },
  {
    label: 'Local guidance',
    self: 'None',
    group: 'Varies',
    priv: 'Driver who knows the coast',
  },
]

const timelineRows = [
  ['6:30 am', 'Pickup from Christchurch accommodation or airport'],
  ['9:00 am', 'Arrive Kaikoura, coffee and a short walk'],
  ['10:00 am to 12:30 pm', 'Boat activity (whale watch or seal swim), including check-in'],
  ['12:30 to 2:00 pm', 'Crayfish or seafood lunch'],
  ['2:00 to 3:30 pm', 'Point Kean seals and peninsula walk'],
  ['3:30 pm', 'Depart for Christchurch'],
  ['6:00 pm', 'Drop-off'],
]

const KaikouraDayTourPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-24">
      <section className="relative">
        <div className="relative min-h-[520px] md:h-[520px] overflow-hidden">
          <img
            src="/packageImages/wanaka.jpeg"
            alt="Kaikoura day tour from Christchurch — coastal scenery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/35" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 flex items-center min-h-[520px]">
            <div className="max-w-2xl text-white w-full drop-shadow-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] font-semibold mb-3 text-orange-300">
                Private Canterbury Tour
              </p>
              <h1 className="text-[28px] leading-8 sm:text-4xl md:text-5xl font-extrabold sm:leading-tight mb-3 md:mb-4">
                Kaikoura Day Tour from Christchurch: Whales, Seals and a Crayfish Lunch
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Plan a private Kaikoura day tour from Christchurch: whale watching, seal swim, coastal
                walk and crayfish lunch, timed around your boat departure.
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
            { icon: Clock, label: 'About 2.5 hours each way' },
            { icon: Waves, label: 'Whale watch or seal swim' },
            { icon: Fish, label: 'Crayfish lunch' },
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
            Kaikoura Day Tour from Christchurch
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Yes, you can do Kaikoura as a day trip from Christchurch. Kaikōura sits about 183 km north
              of Christchurch on SH1, which is roughly 2.5 hours&apos; drive each way. That leaves time
              for one major wildlife activity, a coastal walk and a proper lunch, as long as you plan the
              day around a boat departure rather than trying to cover everything.
            </p>
            <p>
              This guide explains your options, what each experience involves, and how a private day tour
              with Milkyways Tours & Transfers works.
            </p>
          </div>
          <div className="mt-7">
            <BookButton />
          </div>

          <SectionHeading>Can You Do Kaikoura as a Day Trip from Christchurch?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              You can, and it makes a full day. Expect around 5 hours of driving return. Group tours that
              include a whale watch are listed at around 11 hours.
            </p>
            <p>
              The main constraint is the boat. Whale watching and seal swims run to fixed departure times,
              so your day is built around those. Fitting two boat activities into one day is rarely
              realistic.
            </p>
            <p>
              If you want a relaxed pace, or want to do both a swim and a whale watch, consider staying a
              night. We can arrange one-way transfers and drop-offs.
            </p>
          </div>

          <SectionHeading>Which Kaikoura Day Tour Option Is Right for You?</SectionHeading>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]"> </th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Self-drive</th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Group tour or train</th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Private day tour</th>
                </tr>
              </thead>
              <tbody>
                {optionRows.map((row) => (
                  <tr key={row.label} className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-[#1a1a1a]">{row.label}</td>
                    <td className="px-4 py-3 text-gray-600">{row.self}</td>
                    <td className="px-4 py-3 text-gray-600">{row.group}</td>
                    <td className="px-4 py-3 text-gray-600">{row.priv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
            <p>
              Self-drive is the cheapest if you&apos;re comfortable on SH1 and hold a licence valid in New
              Zealand. The trade-off is that the driver misses the scenery and any relaxed lunch.
            </p>
            <p>Group tours and the train are good value, but the schedule is fixed.</p>
            <p>
              A private Christchurch to Kaikoura tour suits families, older relatives, or groups with mixed
              interests (one wants the seal to swim, another just wants to walk). Our drivers handle the
              driving and local timing so your group can focus on the experience. We can also run this as
              a transfer-only shuttle if you prefer to guide yourselves once you arrive.
            </p>
          </div>

          <SectionHeading>Kaikoura Whale Watching Tour: What to Expect</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For most visitors, whale watching is the headline reason to come. Whale Watch Kaikoura
                describes itself as New Zealand&apos;s only marine-based whale watching company, offering
                up-close encounters with sperm whales year-round.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/MilfordSoundDayTour.webp"
                alt="Coastal boat experience on a Kaikoura day tour"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <BulletList
            items={[
              'Sightings aren’t guaranteed, but there’s a safety net. The operator reports a 95% success rate and refunds 80% of the fare if no whale is seen.',
              'Tours run daily, weather permitting, except Christmas Day.',
              'Seasickness is real on the open ocean. Aqua Straps are available for hire or purchase, and each departure carries a seasickness grading. If you’re prone to motion sickness, take advice before you go and tell us when booking.',
              'Book early. The operator advises booking ahead. For a day trip, book your boat first and let us build the rest of the day around it.',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Check-in is on Whaleway Station Road. Check current duration and prices on the operator&apos;s
            website when you book.
          </p>

          <SectionHeading>Kaikoura Seal Swim Experience</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-3">
            If you&apos;d rather get in the water than watch from a deck, a seal swim is the alternative.
            Seal Swim Kaikōura runs a 2.5-hour tour with up to an hour snorkelling with New Zealand fur
            seals in a full-length wetsuit. The operator departs from West End in Kaikoura township.
          </p>
          <BulletList
            items={[
              'Swimmers need to be water confident. The operator asks for good health, moderate fitness and water confidence. Non-swimmers can choose whale watching or the land walk.',
              'Age rules need checking. Booking platforms and the operator describe age limits differently. Confirm directly with Seal Swim Kaikoura before booking a family.',
              'Swim tours may not run all year. The operator’s site mentions seasonal changes to tour times, so confirm availability for your dates.',
            ]}
          />

          <SectionHeading>Kaikoura Peninsula Walk and Seal Colony</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow order-2 md:order-1">
              <img
                src="/packageImages/glenorchy.jpeg"
                alt="Kaikoura Peninsula coastal walk and seal colony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed order-1 md:order-2">
              <p>
                The Kaikoura Peninsula Walkway is the easiest way to add a coastal scenic walk. It works
                as a standalone activity or as a warm-up either side of a boat trip.
              </p>
            </div>
          </div>
          <BulletList
            items={[
              'Full loop: DOC advises allowing at least three hours for the whole walkway. Shorter sections are possible.',
              'Seals: The Point Kean seal colony is the most reliable spot. Stay 10 m from seals near the car park and 20 m elsewhere along the coast.',
              'Weather: The peninsula is very exposed to coastal winds. Bring a windproof layer even on sunny days.',
              'No dogs or mountain bikes. Sections cross private land.',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            For a day trip we usually suggest a shorter section (the Point Kean seals and clifftop views)
            rather than the full loop, unless your group wants to prioritise walking over lunch.
          </p>

          <SectionHeading>Seafood and Crayfish Lunch in Kaikoura</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Fresh crayfish is Kaikoura&apos;s signature lunch. Prices vary by season and size, so check
              menus on the day. Crayfish is usually the most expensive item, so if you want something
              lighter, fish and chips or other local seafood are good alternatives.
            </p>
            <p>
              Plan lunch around your boat time. Operators generally advise eating lightly before departure
              if you&apos;re prone to seasickness, then enjoying the main meal afterwards.
            </p>
          </div>

          <SectionHeading>A Realistic Kaikoura Day Trip Timeline</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is an indicative example. Exact times depend on the boat departure you book.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Time</th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Activity</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map(([time, activity]) => (
                  <tr key={time} className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-[#1a1a1a] whitespace-nowrap">{time}</td>
                    <td className="px-4 py-3 text-gray-600">{activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            If your chosen boat departs later, we shift everything across.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Can you do both the whale watch and the seal swim? Only if departure times line up, and it
            makes a very tight day. We recommend choosing one as your headline experience and treating the
            other as a reason to stay overnight.
          </p>

          <SectionHeading>What Does a Private Kaikoura Day Tour Include?</SectionHeading>
          <BulletList
            items={[
              'Door-to-door pickup and return (Christchurch city, airport or accommodation)',
              'A comfortable, well-maintained vehicle and a professional, friendly driver',
              'Flexible stops (lookouts, seal spots, cafés) based on your group',
              'Transparent pricing with no hidden fees',
              'Wildlife tickets and meals are usually booked separately.',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Milkyways was founded by Manmohan, who came to New Zealand a decade ago to study music and
            found his calling in tourism. His approach is simple: be a trusted local partner you can rely
            on.
          </p>

          <SectionHeading>Weather, Seasons and Cancellations</SectionHeading>
          <BulletList
            items={[
              'Boat trips are weather-dependent. Whale Watch staff monitor conditions constantly. If a trip is cancelled, the operator’s policy applies, so check it when you book.',
              'Plan flexibility into your day. Because we drive privately, we can adjust to a later boat or add an extra walk if conditions change.',
              'Season matters for comfort. Summer brings longer days and a busier town. Winter is quieter with snow on the Seaward Kaikoura Range, and the water is cold.',
            ]}
          />

          <SectionHeading>What to Pack</SectionHeading>
          <BulletList
            items={[
              'Layers and a windproof jacket',
              'Sunscreen and sunglasses, even on cloudy days',
              'Closed-toe shoes for the walk',
              'Swimmers and a towel if you’re doing the seal swim',
              'Cash or card for lunch',
              'A camera or phone with a strap',
            ]}
          />

          <section className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-3">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Kaikoura Day Tour FAQs
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

          <SectionHeading>Book Your Kaikoura Day Tour</SectionHeading>
          <p className="text-gray-600 leading-relaxed">
            Tell us your travel date, group size and which activity you&apos;d like as the headline.
            We&apos;ll build the day around it and handle the driving. Contact Milkyways Tours & Transfers
            on +64 210 811 1920 or use our booking form.
          </p>
          <div className="mt-6">
            <BookButton />
          </div>

          <section className="mt-12 md:mt-16 mb-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/packageImages/wanaka.jpeg"
                alt="Book your Kaikoura day tour from Christchurch"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-14 md:py-16">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-orange-300 font-semibold mb-3">
                  Ready to Travel?
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl leading-snug">
                  Book Your Kaikoura Day Tour from Christchurch
                </h2>
                <p className="text-white/85 max-w-xl mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
                  Choose whale watching or a seal swim as your headline, then enjoy a coastal walk and
                  lunch while we handle the driving.
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
              Private Christchurch pickup, a scenic SH1 drive and a Kaikoura day built around your boat
              departure.
            </p>
            {[
              'Door-to-door pickup',
              'Professional driver',
              'Flexible coastal stops',
              'Transparent pricing',
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
              Book Your Kaikoura Day Tour
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

export default KaikouraDayTourPage
