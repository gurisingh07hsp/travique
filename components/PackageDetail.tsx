"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className={`w-5 h-5 ${filled ? "text-amber-400" : "text-gray-300"}`} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
 
function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );
}
 
function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
}
 
function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
    </svg>
  );
}
 
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
 
// ─── Data ────────────────────────────────────────────────────────
const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Bali",
    desc: "Arrive at Ngurah Rai International Airport. Transfer to hotel, check-in and refresh. Evening at leisure to explore Kuta Beach.",
  },
  {
    day: "Day 2",
    title: "Ubud & Cultural Tour",
    desc: "Visit Tegallalang Rice Terraces, Tirta Empul Temple, Monkey Forest Sanctuary, and the Royal Palace of Ubud. Traditional Kecak dance in the evening.",
  },
  {
    day: "Day 3",
    title: "Tanah Lot & Seminyak",
    desc: "Morning visit to the iconic Tanah Lot sea temple. Afternoon shopping at Seminyak. Sunset dinner on the beach with Balinese seafood.",
  },
  {
    day: "Day 4",
    title: "Water Sports & Departure",
    desc: "Morning water sports at Tanjung Benoa. Final lunch at local restaurant. Transfer to airport for departure. Memories last a lifetime!",
  },
];
 
const includes = [
  "Return airfare from major Indian cities",
  "3 nights accommodation (4-star hotel)",
  "Daily breakfast and dinner",
  "All transfers in private AC vehicle",
  "English-speaking tour guide",
  "Entrance fees to all monuments",
  "Kecak dance show tickets",
  "Travel insurance coverage",
];
 
const excludes = [
  "Visa fees and travel documents",
  "Personal expenses & shopping",
  "Lunch on all days",
  "Water sports charges (optional)",
  "Tips and gratuities",
];
 
const gallery = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800&q=80",
];
 
const reviews = [
  { name: "Priya Sharma", rating: 5, date: "Feb 2026", text: "Absolutely magical trip! The guide was exceptional and the itinerary was perfectly paced. Bali exceeded all our expectations." },
  { name: "Rahul Mehta", rating: 4, date: "Jan 2026", text: "Great package for the price. Hotels were clean and comfortable. The Tanah Lot sunset was unforgettable. Would highly recommend!" },
  { name: "Anjali Gupta", rating: 5, date: "Dec 2025", text: "Everything was seamlessly organized. The cultural experiences were authentic and deeply moving. Already planning our return trip!" },
];
const PackageDetail = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "includes" | "reviews">("overview");
    const [activeImage, setActiveImage] = useState(0);
  return (
     <div className="min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>
 
 
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
 
        {/* LEFT */}
        <div className="lg:col-span-2 mt-4">
 
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden mb-4 group">
            <img
              src={gallery[activeImage]}
              alt="Bali"
              className="w-full h-105 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 from-black/30 to-transparent" />
          </div>

 
          {/* Stars & Meta */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= 4} />)}
              <span className="text-amber-500 font-bold text-sm">(4,8/5)</span>
              <span className="text-gray-400 text-sm ml-1">· 128 reviews</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm flex-wrap">
              <span className="font-semibold text-gray-700">Indonesia</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>From <strong className="text-gray-800">$742/adult</strong></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>4 Days 3 Night</span>
            </div>
          </div>
 
          {/* Title */}
          <h1 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-5">
            Bali Package Tour Overview
          </h1>
 
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-7 overflow-x-auto">
            {(["overview", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm capitalize whitespace-nowrap border-b-2 -mb-px transition-all ${
                  activeTab === tab
                    ? "border-amber-400 text-[#1a1a1a] font-semibold"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
 
          {/* Tab: Overview */}
          {activeTab === "overview" && (
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Fugiat velit. Sint consequat dolor sunt exercitation curae, sollicitudin sagittis, proident cursus, aliquam, esse sociosqu, euismod quam quasi officiis cupidatat possimus ultricies viverra viverra, eaque perferendis! Nonummy cumque vestibulum reprehenderit. Orci numquam nulla ut, minus.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Voluptate purus dictum habitasse bibendum metus, accusantium cupiditate rem eligendi, commodo, placerat! Necessitatibus odit, minus. Discover the enchanting island of Bali — where ancient temples meet lush rice terraces, vibrant culture, and world-class beaches.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Whether you're seeking spiritual rejuvenation or simply an escape into nature's paradise, this package delivers an unforgettable Balinese experience with hand-picked restaurants, hidden gems, and cultural performances that most visitors never discover.
              </p>
 
              {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { emoji: "🏛️", title: "4 UNESCO Heritage Sites", sub: "Temples & cultural landmarks" },
                  { emoji: "🏖️", title: "Private Beach Access", sub: "Sunrise & sunset sessions" },
                  { emoji: "🍜", title: "Authentic Cuisine", sub: "Local & fine dining included" },
                  { emoji: "🚗", title: "Private AC Transfers", sub: "Door-to-door comfort" },
                ].map((h) => (
                  <div key={h.title} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <span className="text-3xl">{h.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{h.title}</p>
                      <p className="text-gray-400 text-xs">{h.sub}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          )}
 
          {/* Tab: Itinerary */}
          {activeTab === "itinerary" && (
            <div>
              {itinerary.map((day, i) => (
                <div key={i} className="flex gap-5 mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    {i < itinerary.length - 1 && <div className="w-0.5 bg-amber-200 flex-1 my-2 min-h-10" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{day.day}</span>
                    <h3 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-xl text-[#1a1a1a] mb-2">{day.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
 
          {/* Tab: Includes */}
          {activeTab === "includes" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-xl text-[#1a1a1a] mb-4">
                  ✓ What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-xl text-[#1a1a1a] mb-4">
                  ✗ Not Included
                </h3>
                <ul className="space-y-3">
                  {excludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 font-bold text-xs">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
 
          {/* Tab: Reviews */}
          {activeTab === "reviews" && (
            <div className="space-y-5">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center text-sm">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                        <p className="text-gray-400 text-xs">{r.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          )}
 
          <hr className="border-gray-200 my-10" />
 
          {/* Map */}
          <div>
            <h3 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-2xl text-[#1a1a1a] mb-4">Location Map</h3>
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=900&q=70"
                alt="Bali map region"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-amber-400 text-black font-bold px-6 py-3 rounded-full text-sm shadow-lg flex items-center gap-2">
                  <MapPinIcon />
                  Bali, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1 space-y-5 mt-4">
 
          {/* Package Includes Card */}
          <div className="bg-[#1c1c1c] rounded-3xl p-7 text-white top-20">
            <div className="flex justify-center mb-5">
              <span className="bg-[#2e2e2e] text-white font-semibold text-lg px-7 py-2.5 rounded-full" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>
                Package Include:
              </span>
            </div>
 
            <p className="text-gray-400 text-sm text-center leading-relaxed mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
 
            <div className="space-y-5">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2e2e2e] flex items-center justify-center text-gray-300 shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="txt-main text-sm font-semibold">Location:</p>
                  <p className="text-gray-300 text-sm">Bali, Indonesia</p>
                </div>
              </div>
 
              <div className="h-px bg-white/8" />
 
              {/* Package Info */}
              {/* <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2e2e2e] flex items-center justify-center text-gray-300 shrink-0">
                  <PlaneIcon />
                </div>
                <div>
                  <p className="text-amber-400 text-sm font-semibold">Package Info:</p>
                  <p className="text-gray-300 text-sm">Pax : 8 , Time : 6D/5N</p>
                </div>
              </div> */}
 
              {/* <div className="h-px bg-white/8" /> */}
 
              {/* Tour Price */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2e2e2e] flex items-center justify-center text-gray-300 shrink-0">
                  <TagIcon />
                </div>
                <div>
                  <p className="txt-main text-sm font-semibold">Tour Price</p>
                  <p className="text-gray-300 text-sm">Starting From : <strong className="text-white">$380</strong></p>
                </div>
              </div>
            </div>
 
            <button onClick={()=> router.push('book-now')} className="w-full mt-7 bg-main cursor-pointer text-white font-bold py-4 rounded-2xl transition-all text-sm tracking-wide shadow-lg shadow-amber-400/20">
              Book This Package
            </button>
 
            <div className="flex justify-center gap-4 mt-4">
              {["🔒 Secure", "✅ Verified", "💯 Best Price"].map(b => (
                <span key={b} className="text-gray-500 text-[10px] font-medium">{b}</span>
              ))}
            </div>
          </div>
 
          {/* Know About Packages Card */}
          {/* <div className="bg-[#1c1c1c] rounded-3xl p-7 text-white">
            <h3 className="font-bold text-xl text-amber-400 text-center leading-snug mb-3" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>
              Feel Free To Know About Our Packages
            </h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
            <button className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3.5 rounded-2xl transition-all text-sm tracking-wide">
              Get Free Consultation
            </button>
          </div> */}
 
          {/* Need Help */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-3" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>Need Help?</h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Our travel experts are available 24/7 to assist with your booking.
            </p>
            <div className="space-y-3">
              <a href="tel:+911800123456" className="flex items-center gap-3 text-gray-700 text-sm hover:text-amber-500 transition-colors">
                <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">📞</span>
                +91 1800-123-456
              </a>
              <a href="mailto:hello@wanderlux.in" className="flex items-center gap-3 text-gray-700 text-sm hover:text-amber-500 transition-colors">
                <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">✉️</span>
                hello@wanderlux.in
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-700 text-sm hover:text-amber-500 transition-colors">
                <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">💬</span>
                Live Chat Support
              </a>
            </div>
          </div>
 
          {/* Share */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-4" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>Share This Tour</h4>
            <div className="flex gap-3">
              {[
                { label: "Facebook", color: "bg-blue-100 text-blue-600", icon: "f" },
                { label: "Twitter", color: "bg-sky-100 text-sky-500", icon: "𝕏" },
                { label: "WhatsApp", color: "bg-green-100 text-green-600", icon: "W" },
                { label: "Copy Link", color: "bg-gray-100 text-gray-600", icon: "🔗" },
              ].map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className={`flex-1 h-10 rounded-xl ${s.color} font-bold text-sm flex items-center justify-center transition-all hover:scale-105`}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 px-5 py-4 flex items-center justify-between z-50 shadow-2xl">
        <div>
          <p className="text-xs text-gray-400">Starting from</p>
          <p className="text-xl font-bold text-[#1a1a1a]" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>$742 <span className="text-sm font-normal text-gray-400">/adult</span></p>
        </div>
        <button className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-3 rounded-2xl transition-all text-sm">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default PackageDetail
