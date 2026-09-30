'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, MapPin, Clock, Camera, Mountain } from 'lucide-react'

const BOOK_HREF = '/castle-hill-day-tour-christchurch/book-now'
const PHONE_HREF = 'tel:+642108111920'

const faqs = [
  {
    question: 'What is Castle Hill in New Zealand?',
    answer:
      'Castle Hill, also known as Kura Tāwhiti, is a distinctive limestone landscape in Canterbury\'s Waimakariri Basin. It is known for its large limestone formations, mountain scenery, cultural significance and climbing and walking opportunities.',
  },
  {
    question: 'How far is Castle Hill from Christchurch?',
    answer:
      'Kura Tāwhiti is approximately 80–90 minutes from Christchurch by car, depending on conditions and the starting point.',
  },
  {
    question: 'Is Castle Hill suitable for a day trip from Christchurch?',
    answer:
      'Yes. Its relatively short driving distance from Christchurch makes it suitable for a day trip, particularly for travellers who want to explore the limestone formations and surrounding scenery without staying overnight.',
  },
  {
    question: 'What is Kura Tāwhiti?',
    answer:
      'Kura Tāwhiti is the Māori name for Castle Hill. The area has significant cultural, spiritual and historical connections with Ngāi Tahu.',
  },
  {
    question: 'Can I book a private Castle Hill tour from Christchurch?',
    answer:
      'A private tour can provide a more flexible way to travel from Christchurch to Castle Hill, particularly for families, couples and small groups who want control over their itinerary.',
  },
  {
    question: 'Is Castle Hill good for bouldering?',
    answer:
      'Yes. Castle Hill/Kura Tāwhiti is recognised as a world-renowned rock-climbing area, and the landscape is popular with climbers and boulderers.',
  },
  {
    question: 'Can I arrange transport for Castle Hill bouldering?',
    answer:
      'Private transport can be arranged around outdoor activities such as bouldering, subject to vehicle suitability and your group\'s equipment and requirements.',
  },
  {
    question: 'Can Castle Hill be combined with Arthur\'s Pass?',
    answer:
      'Yes, Castle Hill and Arthur\'s Pass are connected by SH73, making them possible components of a longer scenic itinerary. The available time, weather and road conditions should be considered when planning the route.',
  },
  {
    question: 'How long should I spend at Castle Hill?',
    answer:
      'Allowing around 2–3 hours gives many visitors enough time to walk among the formations, take photographs and enjoy the landscape without rushing.',
  },
  {
    question: 'Is Castle Hill culturally significant?',
    answer:
      'Yes. Kura Tāwhiti is a culturally significant place for Ngāi Tahu and has Tōpuni status. Visitors should follow DOC\'s visitor guidance and treat the landscape and cultural sites with respect.',
  },
]

const whyChooseItems = [
  {
    title: 'Comfortable vehicles',
    description: 'Well-maintained transport so you can enjoy the scenic SH73 journey without concentrating on driving.',
  },
  {
    title: 'Professional drivers',
    description: 'Friendly, punctual service from pickup in Christchurch through to your return.',
  },
  {
    title: 'Reliable, punctual service',
    description: 'Your day is organised around the time you actually want to spend at Kura Tāwhiti.',
  },
  {
    title: 'Local tourism knowledge',
    description: 'Practical suggestions for scenic stops, weather and how much time to allow on the track.',
  },
  {
    title: 'Transparent pricing',
    description: 'Clear travel arrangements before you book, with private and flexible options for your group.',
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
  children = 'Book Your Castle Hill Tour',
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

const glanceRows = [
  ['Starting point', 'Christchurch'],
  ['Destination', 'Kura Tāwhiti/Castle Hill'],
  ['Approx. driving time', '1 hr 20 min–1 hr 30 min'],
  ['Route', 'State Highway 73'],
  ['Region', 'Canterbury'],
  ['Main attraction', 'Limestone formations'],
  ['Nearby mountain ranges', 'Torlesse & Craigieburn'],
  ['Activities', 'Walking, photography, climbing and bouldering'],
]

const compareRows = [
  ['You manage the driving', 'Your driver handles the journey'],
  ['You plan the route', 'Itinerary can be planned around your interests'],
  ['You monitor road conditions', 'Driver can help with route planning'],
  ['You organise parking and timing', 'More convenient door-to-door experience'],
  ['Good for independent travellers', 'Useful for families and private groups'],
  ['You focus on navigation', 'You can focus on the scenery'],
]

const CastleHillDayTourPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-24">
      <section className="relative">
        <div className="relative min-h-[520px] md:h-[520px] overflow-hidden">
          <img
            src="/packageImages/mountCook.jpeg"
            alt="Castle Hill day tour from Christchurch — limestone high country"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/35" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 flex items-center min-h-[520px]">
            <div className="max-w-2xl text-white w-full drop-shadow-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] font-semibold mb-3 text-orange-300">
                Private NZ Tour
              </p>
              <h1 className="text-[28px] leading-8 sm:text-4xl md:text-5xl font-extrabold sm:leading-tight mb-3 md:mb-4">
                Castle Hill Day Tour from Christchurch
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Explore Kura Tāwhiti on a Castle Hill day tour from Christchurch. Limestone landscapes,
                scenic walks and private, comfortable transport with MilkyWays.
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
            { icon: Clock, label: '80–90 minutes by road' },
            { icon: Mountain, label: 'Kura Tāwhiti limestone' },
            { icon: Camera, label: 'Walks & photography' },
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
            Castle Hill Day Tour from Christchurch
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Discover the remarkable limestone landscape of Kura Tāwhiti/Castle Hill on a comfortable
              day tour from Christchurch with MilkyWays Tours & Transfers.
            </p>
            <p>
              Located along State Highway 73 in Canterbury&apos;s Waimakariri Basin, Castle Hill is known
              for its dramatic limestone formations, mountain scenery, walking opportunities and cultural
              significance. It is approximately 80–90 minutes from Christchurch by road, making it a
              practical day-trip destination.
            </p>
            <p>
              With a private tour, you can enjoy the journey without worrying about driving, navigation or
              planning every detail yourself.
            </p>
            <p>
              Looking for a private Castle Hill experience from Christchurch? Contact MilkyWays Tours &
              Transfers to discuss your preferred itinerary and travel requirements.
            </p>
          </div>
          <div className="mt-7">
            <BookButton />
          </div>

          <SectionHeading>Why Visit Castle Hill / Kura Tāwhiti from Christchurch?</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Castle Hill is worth visiting for its combination of dramatic limestone formations, alpine
                scenery, outdoor experiences and cultural heritage.
              </p>
              <p>
                Kura Tāwhiti sits between the Torlesse Range and Craigieburn Range, with the limestone
                formations rising prominently from the surrounding Waimakariri Basin.
              </p>
              <p>It is particularly appealing if you enjoy:</p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/CustomPrivateTour1.jpg"
                alt="High-country scenery on the Castle Hill route"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <BulletList
            items={[
              'Scenic landscapes',
              'Short walks and exploring',
              'Photography',
              'Bouldering and rock climbing',
              'Mountain scenery',
              'Family-friendly outdoor experiences',
              'Māori cultural and historical stories',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            The destination is also easy to incorporate into a wider Canterbury or Arthur&apos;s Pass
            journey because it sits directly beside SH73, the route connecting Christchurch with
            Arthur&apos;s Pass and the West Coast.
          </p>

          <SectionHeading>What Will You See at Castle Hill?</SectionHeading>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Kura Tāwhiti Limestone Boulders</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The enormous limestone formations are the defining feature of Castle Hill. Although they can
            be seen from SH73, walking closer gives you a much better appreciation of their size, shapes
            and relationship with the surrounding landscape. Tourism New Zealand describes the area as a
            world-renowned rock-climbing location, while the DOC access track provides visitors with a
            route through the formations.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Torlesse and Craigieburn Ranges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow order-2 md:order-1">
              <img
                src="/packageImages/franzGlacier.jpeg"
                alt="Mountain ranges surrounding Castle Hill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed order-1 md:order-2">
              <p>
                The boulders are surrounded by the dramatic Canterbury high-country landscape, with views
                towards the Torlesse Range, Craigieburn Range and Waimakariri Basin.
              </p>
              <p>
                This combination makes Castle Hill particularly attractive for landscape photography and
                scenic sightseeing.
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Waimakariri Basin</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The location provides a striking contrast between the pale limestone formations, open
            high-country landscape and surrounding mountains. Rather than being simply a stop for
            photographs, the basin gives visitors a chance to experience a distinctive part of
            Canterbury&apos;s inland landscape.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Cultural Stories of Kura Tāwhiti</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Castle Hill is more than a scenic attraction.</p>
            <p>
              Kura Tāwhiti has deep cultural significance to Ngāi Tahu and holds Tōpuni status. DOC notes
              that the area is important for its cultural, historical, recreational and ecological values.
            </p>
            <p>
              Visitors can also see pou whenua representing important ancestors connected with the
              landscape. For this reason, visitors should treat the area respectfully and follow the local
              visitor guidance.
            </p>
          </div>

          <SectionHeading>What Can You Do at Castle Hill?</SectionHeading>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Explore the Walking Tracks</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            The Kura Tāwhiti Access Track provides an opportunity to walk into the limestone landscape and
            experience the formations from different angles. The official access track is a relatively
            short walk, although some sections are steep. Allowing around 2–3 hours for exploring can
            provide enough time to walk, photograph the landscape and enjoy the surroundings without
            rushing. ChristchurchNZ recommends allowing a minimum of 2–3 hours to explore the area.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Castle Hill Bouldering</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Castle Hill is internationally recognised for its climbing and bouldering environment. If
            you&apos;re planning a Castle Hill bouldering transport trip, private transport can be
            particularly useful when travelling with climbing equipment or when your group wants more
            flexibility around departure and return times. Climbers should follow current DOC guidance,
            use established access routes and respect restrictions designed to protect the environment and
            cultural values of the area.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Photography and Scenic Viewing</h3>
          <p className="text-gray-600 leading-relaxed mb-2">
            You don&apos;t need to be an experienced hiker or climber to enjoy Castle Hill. The unusual
            limestone formations provide plenty of opportunities for:
          </p>
          <BulletList
            items={[
              'Landscape photography',
              'Family photographs',
              'Mountain views',
              'Nature observation',
              'Scenic walks',
              'Quiet exploration',
            ]}
          />
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Family-Friendly Exploration</h3>
          <p className="text-gray-600 leading-relaxed">
            Kura Tāwhiti can be enjoyed by families who want to explore a unique natural landscape without
            committing to a long hiking expedition. The official access track provides a relatively short
            way to reach the limestone formations, although visitors should be prepared for uneven and
            steep sections.
          </p>

          <SectionHeading>How Far Is Castle Hill from Christchurch?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Castle Hill is approximately 80–90 minutes from Christchurch by road, depending on traffic,
            road conditions and the exact starting point. DOC lists Christchurch at around 1 hour 30
            minutes by car for the Kura Tāwhiti Access Track, while Tourism New Zealand lists
            approximately 1 hour 20 minutes. The journey follows State Highway 73, the scenic route
            towards Arthur&apos;s Pass and the West Coast.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-3">
            Christchurch → Kura Tāwhiti at a glance
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Detail</th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Information</th>
                </tr>
              </thead>
              <tbody>
                {glanceRows.map(([detail, info]) => (
                  <tr key={detail} className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-[#1a1a1a]">{detail}</td>
                    <td className="px-4 py-3 text-gray-600">{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Travel times can vary, particularly during winter weather. DOC notes that snow can affect
            SH73, so current road conditions should be checked before travelling.
          </p>

          <SectionHeading>Castle Hill Day Tour vs Driving Yourself</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both options can work, but the right choice depends on how you want to experience the day.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Self-Drive</th>
                  <th className="px-4 py-3 font-semibold text-[#1a1a1a]">Private Tour</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([self, priv]) => (
                  <tr key={self} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-600">{self}</td>
                    <td className="px-4 py-3 text-gray-600">{priv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A Christchurch to Castle Hill shuttle or private vehicle can be particularly useful for
            travellers who don&apos;t want to hire a car or drive an unfamiliar South Island route.
          </p>

          <SectionHeading>Why Choose a Castle Hill Private Tour?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Castle Hill private tour in New Zealand gives you greater control over how you spend your
            day. Instead of following a rigid group schedule, a private experience can be planned around
            your group, preferred departure time and interests.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Flexible Travel</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Your day can be structured around sightseeing, photography, walking or bouldering.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Comfortable Transport</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            MilkyWays focuses on comfortable, well-maintained vehicles so you can enjoy the scenic
            journey from Christchurch without concentrating on driving.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Local Knowledge</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            A local driver can help you understand the route, identify worthwhile scenic stops and make
            practical suggestions based on the day&apos;s conditions.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Suitable for Different Groups</h3>
          <p className="text-gray-600 leading-relaxed mb-2">Private travel can work well for:</p>
          <BulletList
            items={[
              'Couples',
              'Families',
              'Friends',
              'Small groups',
              'Photographers',
              'Outdoor enthusiasts',
              'Bouldering and climbing groups',
              'International visitors',
            ]}
          />

          <SectionHeading>Can You Combine Castle Hill with Arthur&apos;s Pass?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Yes, Castle Hill can be incorporated into a wider Arthur&apos;s Pass itinerary, but the two
              should be planned as a full-day scenic journey rather than treating Arthur&apos;s Pass as a
              quick add-on.
            </p>
            <p>
              Castle Hill lies along SH73, the same major route that continues through Arthur&apos;s Pass.
              Arthur&apos;s Pass National Park is located in the Southern Alps and the highway passes
              directly through the park and Arthur&apos;s Pass village.
            </p>
            <p>
              This makes the route suitable for travellers interested in an Arthur&apos;s Pass scenic day
              tour, provided there is enough time for the planned stops.
            </p>
            <p>
              A private itinerary can potentially include: Christchurch → Castle Hill/Kura Tāwhiti →
              scenic stops → Arthur&apos;s Pass area → Christchurch. The exact itinerary should account for
              daylight, weather, road conditions and how much time you want to spend at each destination.
            </p>
          </div>

          <SectionHeading>Plan Your Castle Hill Day Trip from Christchurch</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before heading to Kura Tāwhiti, keep a few practical points in mind.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Allow Enough Time</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Don&apos;t treat Castle Hill as a five-minute photo stop. The landscape is best experienced by
            getting out of the vehicle and walking among the formations.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Check Weather and Road Conditions</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            SH73 can be affected by winter weather and snow. Check current conditions before departure.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Wear Suitable Footwear</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            The access track includes gravel and some steeper sections, so comfortable outdoor footwear is
            recommended.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Respect the Landscape</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Kura Tāwhiti contains wāhi tapu and areas of cultural significance. DOC asks visitors to stay
            on access tracks, respect fenced areas, use provided toilets and avoid disturbing the ground
            or marking the rocks.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Bring the Right Essentials</h3>
          <p className="text-gray-600 leading-relaxed mb-2">Depending on the season, consider:</p>
          <BulletList
            items={[
              'Water',
              'Comfortable walking shoes',
              'Weather-appropriate layers',
              'Sun protection',
              'Camera',
              'Snacks for the journey',
            ]}
          />

          <SectionHeading>Why Travel with MilkyWays Tours & Transfers?</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
            <p>
              MilkyWays Tours & Transfers makes exploring New Zealand easier with comfortable private
              transport, professional drivers and locally informed travel planning. Our goal is simple:
              make every journey effortless and memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden min-h-64">
              <img
                src="/ourFleet/car2.jpeg"
                alt="Comfortable MilkyWays vehicle for a Castle Hill day tour"
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
            Whether you&apos;re planning a Castle Hill day tour from Christchurch, a private scenic
            journey or a wider South Island itinerary, we can help you plan transport around your travel
            requirements. New Zealand based. Local tourism experience. Trusted by international
            travellers.
          </p>

          <section className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-3">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions
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

          <SectionHeading>Book Your Castle Hill Day Tour from Christchurch</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Ready to explore the remarkable limestone landscape of Kura Tāwhiti/Castle Hill?</p>
            <p>
              Travel from Christchurch in comfort with MilkyWays Tours & Transfers and enjoy a private,
              flexible journey designed around your group.
            </p>
            <p>
              Whether you&apos;re interested in scenic sightseeing, photography, walking, bouldering or
              combining Castle Hill with a wider Canterbury and Arthur&apos;s Pass itinerary, get in touch
              with our team to discuss your plans.
            </p>
            <p>
              MilkyWays Tours & Transfers
              <br />
              72 Shotover Street, Queenstown 9300, New Zealand
              <br />
              Phone: +64 210 811 1920
              <br />
              Open: 24 hours, 7 days
            </p>
            <p className="font-semibold text-[#1a1a1a]">All you need is MilkyWays.</p>
          </div>
          <div className="mt-6">
            <BookButton />
          </div>

          <section className="mt-12 md:mt-16 mb-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/packageImages/mountCook.jpeg"
                alt="Book your Castle Hill day tour from Christchurch"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-14 md:py-16">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-orange-300 font-semibold mb-3">
                  Ready to Travel?
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl leading-snug">
                  Book Your Castle Hill Day Tour from Christchurch
                </h2>
                <p className="text-white/85 max-w-xl mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
                  Travel in comfort to Kura Tāwhiti and enjoy limestone landscapes, walks and mountain
                  scenery at your own pace.
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
              Private Christchurch pickup, a scenic SH73 drive and time among the limestone formations at
              Kura Tāwhiti.
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
              Book Your Castle Hill Tour
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

export default CastleHillDayTourPage
