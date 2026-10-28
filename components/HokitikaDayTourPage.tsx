'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, MapPin, Mountain, Trees, Waves } from 'lucide-react'

const BOOK_HREF = '/hokitika-day-tour/book-now'
const PHONE_HREF = 'tel:+642108111920'

const faqs = [
  {
    question: 'Can I take a Hokitika Day Tour from Christchurch?',
    answer:
      'Yes. Hokitika can be incorporated into a private South Island road journey from Christchurch, travelling across the Southern Alps and through Arthur\'s Pass towards the West Coast. The exact duration and itinerary depend on road conditions, stops and the attractions selected.',
  },
  {
    question: 'What is the main attraction at Hokitika Gorge?',
    answer:
      'Hokitika Gorge is known for its striking glacial-blue water, native rainforest, viewpoints and swing bridges. DOC currently lists a 1.6 km loop with shorter walking options.',
  },
  {
    question: 'Is the Hokitika Gorge Walk difficult?',
    answer:
      'The full loop is classified by DOC within the easiest/easy range, while shorter sections allow visitors to simply reach the main viewing areas. The full loop is currently listed at approximately 1.5 hours.',
  },
  {
    question: 'Can I include the West Coast Treetop Walk in a private tour?',
    answer:
      'Yes, it can be included as part of a customised itinerary, subject to your schedule and the attraction\'s operating hours. The Treetop Walk is located south of Hokitika near Lake Mahinapua.',
  },
  {
    question: 'Why is Hokitika famous for greenstone?',
    answer:
      'Hokitika is closely associated with pounamu, also known as New Zealand jade or greenstone. Its location near the Arahura River and strong community of pounamu artists and carvers have helped establish the town as an important centre for jade craftsmanship.',
  },
  {
    question: 'Can I visit the Hokitika Glow Worm Dell during the day?',
    answer:
      'No. Darkness is necessary to see the glow worms clearly, so the visit needs to be planned for after dark.',
  },
  {
    question: 'Is a private Hokitika tour suitable for families?',
    answer:
      'Yes. A private itinerary can be adjusted around the group\'s walking ability, preferred attractions and available time, making it useful for families who do not want to follow a fixed group schedule.',
  },
  {
    question: 'What should I bring on a Hokitika day trip?',
    answer:
      'Bring comfortable walking shoes, weather-appropriate clothing, water, sun protection and insect repellent. DOC specifically recommends insect repellent for Hokitika Gorge because sandflies can be present.',
  },
  {
    question: 'Can the Hokitika itinerary be customised?',
    answer:
      'A private tour is designed to provide greater flexibility than a fixed group itinerary. With MilkyWays, the stated service approach focuses on comfortable transport, professional drivers, local expertise and attention to customer satisfaction.',
  },
]

const whyChooseItems = [
  {
    title: 'A more flexible itinerary',
    description: 'Spend more time at the places that interest you and less time at stops that do not.',
  },
  {
    title: 'Comfortable private transport',
    description:
      'MilkyWays Tours & Transfers focuses on comfortable, well-maintained vehicles and professional, friendly drivers.',
  },
  {
    title: 'No need to drive',
    description:
      'You can concentrate on the scenery and experience instead of navigating roads, checking directions and managing parking.',
  },
  {
    title: 'Local guidance',
    description: 'MilkyWays positions local expertise and guidance as part of its service approach.',
  },
  {
    title: 'Better suited to private groups',
    description:
      'Couples, families and small groups can plan a day around their own interests instead of adapting to a large tour group.',
  },
  {
    title: 'Personalised travel',
    description:
      'MilkyWays\' stated goal is to make journeys effortless and memorable, with attention to detail and customer satisfaction.',
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
  children = 'Book Your Hokitika Day Tour',
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

const HokitikaDayTourPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="pb-24">
      <section className="relative">
        <div className="relative min-h-[520px] md:h-[520px] overflow-hidden">
          <img
            src="/packageImages/franzGlacier.jpeg"
            alt="Arthur's Pass scenic road to Hokitika"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/35" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 flex items-center min-h-[520px]">
            <div className="max-w-2xl text-white w-full drop-shadow-lg">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] font-semibold mb-3 text-orange-300">
                Private West Coast Experience
              </p>
              <h1 className="text-[28px] leading-8 sm:text-4xl md:text-5xl font-extrabold sm:leading-tight mb-3 md:mb-4">
                Hokitika Day Tour from Christchurch | Private West Coast Experience
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Cross Arthur&apos;s Pass to the West Coast for Hokitika Gorge, rainforest treetop walks,
                pounamu culture and a flexible private itinerary.
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
            { icon: Mountain, label: 'Via Arthur’s Pass' },
            { icon: Waves, label: 'Hokitika Gorge' },
            { icon: Trees, label: 'Rainforest & pounamu' },
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
            Hokitika Day Tour from Christchurch
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A Hokitika Day Tour is a great way to experience the dramatic scenery, rainforest, rivers,
              pounamu culture and relaxed character of New Zealand&apos;s West Coast without having to
              plan every part of the journey yourself.
            </p>
            <p>
              Travelling from Christchurch towards Hokitika takes you across the Southern Alps and through
              Arthur&apos;s Pass, where the landscape changes from the Canterbury Plains to alpine scenery
              and dense West Coast rainforest. Arthur&apos;s Pass is the main road route between Canterbury
              and the West Coast.
            </p>
            <p>
              With MilkyWays Tours & Transfers, you can travel in a comfortable private vehicle with a
              professional driver and build your day around the places and experiences that interest you
              most.
            </p>
            <p>
              Whether you want to explore Hokitika Gorge, walk through the West Coast rainforest canopy,
              discover New Zealand pounamu or simply enjoy Hokitika&apos;s coastal character, a private
              itinerary gives you more flexibility than a fixed sightseeing schedule.
            </p>
          </div>
          <div className="mt-7">
            <BookButton />
          </div>

          <SectionHeading>Why Take a Hokitika Day Tour from Christchurch?</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Hokitika offers a very different side of the South Island.</p>
              <p>
                Instead of simply travelling from one city to another, the journey takes you through
                changing landscapes, including the Southern Alps and Arthur&apos;s Pass before reaching the
                lush West Coast.
              </p>
              <p>
                Arthur&apos;s Pass rises to more than 900 metres and is the highest pass across the Southern
                Alps. The route is known for dramatic mountain scenery, forests, rivers, waterfalls and
                alpine landscapes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/CustomPrivateTour1.jpg"
                alt="Private tour travelling through New Zealand West Coast"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Once you reach Hokitika, you can combine natural attractions with local art, pounamu, food and
            coastal experiences. That combination makes a private Christchurch to Hokitika Tour
            particularly appealing for travellers who want more than simply reaching the destination.
          </p>

          <SectionHeading>What Can You See on a Hokitika Day Tour?</SectionHeading>
          <p className="text-gray-600 leading-relaxed">
            A private itinerary can be adjusted according to your available time, interests and the
            conditions on the day. Some of the most worthwhile experiences include Hokitika Gorge, the
            West Coast Treetop Walk, local pounamu workshops, Hokitika town and, if your schedule allows
            after dark, the Glow Worm Dell.
          </p>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Hokitika Gorge</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow order-2 md:order-1">
              <img
                src="/packageImages/wanaka.jpeg"
                alt="Hokitika Gorge turquoise water and rainforest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed order-1 md:order-2">
              <p>Hokitika Gorge is one of the West Coast&apos;s standout natural attractions.</p>
              <p>
                The gorge is known for its striking blue-green glacial water surrounded by native
                rainforest, with viewing platforms and swing bridges providing different perspectives of
                the river and surrounding landscape. The Department of Conservation currently lists the
                full walk as a 1.6 km loop taking around 1.5 hours, with shorter options available.
              </p>
              <p>
                The first viewing platform is only around 150 metres from the car park, making it possible
                to enjoy the scenery even if you do not want a longer walk. The track then continues
                towards a swing bridge and further viewpoints.
              </p>
            </div>
          </div>
          <p className="font-semibold text-[#1a1a1a] mt-4 mb-1">What makes Hokitika Gorge worth visiting?</p>
          <BulletList
            items={[
              'Turquoise glacial river water',
              'Native West Coast rainforest',
              'Scenic viewing platforms',
              'Swing bridges',
              'Southern Alps and valley views',
              'Shorter and longer walking options',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            The gorge is around 30 minutes by car from Hokitika township.
          </p>
          <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold text-[#1a1a1a] mb-1">Important travel note</p>
            <p>
              The Hokitika River can be swift, deep and extremely cold, and swimming is not advised. River
              rocks can also be slippery and some parts of the track have exposed edges. Visitors should
              stay on the track and follow current DOC safety guidance.
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">West Coast Treetop Walk</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              For travellers who want to experience the West Coast rainforest from a different
              perspective, the West Coast Treetop Walk is another strong addition. The attraction is
              located near Lake Mahinapua and takes visitors above the forest floor through native
              rainforest.
            </p>
            <p>
              The current operator describes the walkway as rising approximately 20 metres above the
              ground, with a 47-metre tower offering elevated views across the forest, Lake Mahinapua, the
              Southern Alps and towards the Tasman Sea. The experience is self-guided, making it easy to
              explore at your own pace.
            </p>
            <p>
              For travellers searching for West Coast Treetop Walk transport, a private tour can remove
              the need to organise separate transport to the attraction.
            </p>
            <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow">
              <img
                src="/packageImages/CustomPrivateTour1.jpg"
                alt="West Coast Treetop Walk near Hokitika"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-[#1a1a1a]">Why include it?</p>
            <p>The Treetop Walk works particularly well for travellers who want:</p>
          </div>
          <BulletList
            items={[
              'An easy rainforest experience',
              'Elevated views',
              'Photography opportunities',
              'A family-friendly attraction',
              'A break from longer road travel',
              'A different perspective of the West Coast landscape',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            The attraction is around 15 minutes south of Hokitika by car.
          </p>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">
            Discover Hokitika Jade, Pounamu & Greenstone
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hokitika is strongly associated with pounamu, commonly known as New Zealand jade or
                greenstone. The West Coast is one of the key areas associated with pounamu, and Hokitika
                is known as “Jade Country” because of its connection with the Arahura River and its
                community of jade artists and carvers.
              </p>
              <p>
                A visit to a local carving workshop can add a cultural and creative element to your
                Hokitika Day Tour. Depending on the experience selected, visitors can watch local artisans
                working with pounamu or take part in a hands-on carving experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 md:h-72 shadow">
              <img
                src="/packageImages/wineTour.jpeg"
                alt="Pounamu greenstone carving in Hokitika"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            For example, Bonz &apos;N&apos; Stonz in Hokitika offers carving experiences involving jade,
            bone or shell, while other local operators specialise in finished pounamu jewellery and
            sculptures. This is more than simply shopping for a souvenir. Pounamu has a significant place
            in Māori culture and history, making it a meaningful part of the West Coast experience.
          </p>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Visit the Hokitika Glow Worm Dell</h3>
          <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow mb-4">
            <img
              src="/packageImages/stargazing.jpeg"
              alt="Hokitika Glow Worm Dell after dark"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Hokitika Glow Worm Dell offers a completely different experience from the daytime
              attractions. The Dell is located close to Hokitika and can be reached via a short track from
              the roadside. The local visitor information centre notes that the track is approximately 50
              metres and takes around five minutes return.
            </p>
            <p>
              The important point is timing: it needs to be dark to see the glow worms clearly. That means
              a Glow Worm Dell visit is better suited to an extended or evening itinerary rather than
              being presented as a normal daytime stop.
            </p>
            <p>
              If you are specifically interested in a Hokitika Glow Worm Dell visit, discuss the timing
              when planning your private itinerary so the day&apos;s schedule works around sunset and the
              attraction.
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Explore Hokitika Town and Beach</h3>
          <div className="rounded-2xl overflow-hidden h-56 md:h-64 shadow mb-4">
            <img
              src="/packageImages/glenorchy.jpeg"
              alt="Hokitika Beach West Coast New Zealand"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-600 leading-relaxed mb-2">
            Hokitika itself is worth allowing some time to explore. The town has a distinctive West Coast
            character, with local artists, carvers, jewellers, cafés and hospitality businesses
            contributing to its creative atmosphere. West Coast NZ describes Hokitika as a beachside town
            with a strong artistic community and inspiring surrounding landscapes. You can use your free
            time to:
          </p>
          <BulletList
            items={[
              'Browse local galleries',
              'See pounamu and handmade crafts',
              'Explore the town centre',
              'Stop for refreshments',
              'Visit the beachfront',
              'Photograph the distinctive West Coast scenery',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            This gives the day a useful balance between nature, culture and relaxed sightseeing.
          </p>

          <SectionHeading>Christchurch to Hokitika: The Journey Is Part of the Experience</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A Christchurch to Hokitika Tour is not simply about reaching Hokitika. The road journey
              itself is one of the highlights.
            </p>
            <p>
              The route crosses the Canterbury region towards Arthur&apos;s Pass before descending towards
              the West Coast. The scenery changes dramatically as you travel through the Southern Alps,
              alpine environments and rainforest.
            </p>
            <p>
              New Zealand&apos;s official tourism information describes Arthur&apos;s Pass as the route
              between Canterbury and the West Coast, with landscapes ranging from beech forest and river
              valleys to dense rainforest and deeply gorged rivers.
            </p>
            <p>
              This makes the journey especially appealing to visitors who enjoy scenic road travel. Rather
              than treating the drive as dead time, a private tour allows you to enjoy the landscape, stop
              at suitable viewpoints and travel without having to concentrate on driving an unfamiliar
              route.
            </p>
          </div>

          <SectionHeading>Why Choose a Private Hokitika Shuttle Tour?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-6">
            A private Hokitika Private Shuttle Tour can be a practical choice when flexibility matters.
            Instead of following a fixed group itinerary, you can discuss the places you want to
            prioritise and create a day that suits your group.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden min-h-64">
              <img
                src="/ourFleet/car2.jpeg"
                alt="Private tour travelling through New Zealand West Coast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whyChooseItems.map((item, i) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#f8f8f8]">
                  <h3 className="font-bold text-[#1a1a1a] mb-1">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionHeading>Who Is a Hokitika Private Tour Best For?</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            A private West Coast journey can work particularly well for:
          </p>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Couples</p>
              <p>Enjoy a scenic day together without following a large group itinerary.</p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Families</p>
              <p>
                Choose shorter walks and attractions that suit the family rather than committing to a
                fixed schedule.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">International travellers</p>
              <p>
                A private driver can make navigating the South Island easier, particularly for visitors
                unfamiliar with New Zealand roads.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Small groups</p>
              <p>
                Friends or family travelling together can share a private vehicle and plan stops around
                their interests.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Photographers</p>
              <p>
                The West Coast offers changing scenery, rainforest, rivers, mountains and coastal
                landscapes, providing plenty of opportunities to stop and photograph the journey.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Travellers with specific interests</p>
              <p>
                A private itinerary is useful if your priority is pounamu, rainforest, short walks,
                scenery, local culture or a combination of these.
              </p>
            </div>
          </div>

          <SectionHeading>How to Plan Your Hokitika Day Trip</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            A successful day trip depends on realistic timing.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Start early</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            The Christchurch-to-West Coast journey is substantial, so an early start gives you more useful
            sightseeing time once you reach Hokitika.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Prioritise your must-see attractions</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              If your priority is Hokitika Gorge, make that clear when planning the itinerary. If you are
              more interested in pounamu and local culture, you can allocate additional time to
              Hokitika&apos;s artists and carving experiences. If you want to visit the Glow Worm Dell,
              remember that darkness is required, so the itinerary needs to extend into the evening.
            </p>
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Check current opening times</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Attractions can operate different seasonal hours. For example, the West Coast Treetop Walk
            currently operates different summer and winter hours, so opening times should be checked when
            planning your travel date.
          </p>
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Be prepared for West Coast weather</h3>
          <p className="text-gray-600 leading-relaxed mb-2">
            Weather conditions can change quickly in New Zealand. At Hokitika Gorge, DOC specifically
            recommends checking the forecast and being prepared for changing conditions. Good items to
            carry include:
          </p>
          <BulletList
            items={[
              'Comfortable walking shoes',
              'Waterproof outer layer',
              'Warm layers',
              'Water',
              'Insect repellent',
              'Sun protection',
              'Camera or phone',
            ]}
          />
          <h3 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-2">Allow flexibility</h3>
          <p className="text-gray-600 leading-relaxed">
            A private tour is particularly useful because the day can be adjusted around weather,
            attraction timing and your group&apos;s interests rather than relying entirely on a rigid
            schedule.
          </p>

          <SectionHeading>A Sample Hokitika Day Tour Experience</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-3">A possible itinerary could look like:</p>
          <p className="text-gray-600 leading-relaxed font-medium mb-4">
            Christchurch → Arthur&apos;s Pass → West Coast → Hokitika → Hokitika Gorge → Treetop Walk →
            Hokitika town/pounamu experience → return journey
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">The exact order should depend on:</p>
          <BulletList
            items={[
              'Your departure time',
              'Weather',
              'Attraction opening hours',
              'Walking preferences',
              'Your chosen activities',
              'Whether you want an evening Glow Worm Dell visit',
            ]}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            For this reason, a private itinerary is better planned around your priorities rather than
            promising one identical schedule for every traveller.
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

          <SectionHeading>Make Your Hokitika Journey More Than a Road Trip</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A Hokitika Day Tour gives you the opportunity to experience several different sides of New
              Zealand&apos;s West Coast in one journey.
            </p>
            <p>
              From the mountain landscapes around Arthur&apos;s Pass to the rainforest and turquoise
              waters of Hokitika Gorge, the elevated views of the Treetop Walk and the cultural
              significance of pounamu, the region offers far more than a quick stop on the map.
            </p>
            <p>
              Travelling privately also means you can build the experience around what matters to you.
              Whether you are looking for a Hokitika Private Shuttle Tour, a Christchurch to Hokitika
              Tour, or a customised West Coast experience, MilkyWays Tours & Transfers can help make the
              journey comfortable, organised and memorable.
            </p>
            <p>
              Ready to explore Hokitika? Contact MilkyWays Tours & Transfers to discuss your preferred
              itinerary, travel date and sightseeing priorities.
            </p>
          </div>
          <div className="mt-6">
            <BookButton />
          </div>

          <section className="mt-12 md:mt-16 mb-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/packageImages/franzGlacier.jpeg"
                alt="Arthur's Pass scenic road to Hokitika"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-14 md:py-16">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-orange-300 font-semibold mb-3">
                  Ready to Travel?
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl leading-snug">
                  Book Your Hokitika Day Tour from Christchurch
                </h2>
                <p className="text-white/85 max-w-xl mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
                  Travel privately across Arthur&apos;s Pass to the West Coast and enjoy Hokitika Gorge,
                  rainforest and pounamu at your own pace.
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
              Private Christchurch pickup, Arthur&apos;s Pass scenery and a flexible West Coast day around
              Hokitika Gorge, rainforest and pounamu.
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
              Book Your Hokitika Day Tour
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

export default HokitikaDayTourPage
