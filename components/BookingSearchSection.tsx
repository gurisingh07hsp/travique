'use client'
import { useState } from "react";
import { Search, Hotel, Plane, Bus, Palmtree } from "lucide-react";

const tabs = [
  // { label: "Hotel", icon: Hotel },
  // { label: "Flight", icon: Plane },
  // { label: "Bus & Train", icon: Bus },
  { label: "Holiday", icon: Palmtree },
];

const BookingSearchSection = () => {
    const [activeTab, setActiveTab] = useState("Holiday");
  return (
      <section className="w-full md:relative py-10 flex flex-col md:flex-row justify-center gap-2">
        <img src="/BookingSearchImage.png" alt="booking Image" className="md:max-w-7xl" />

      <div className="md:max-w-4xl w-full  md:absolute bottom-0.5 mx-auto px-4 opacity-95">
        <div className="bg-card rounded-2xl shadow-lg bg-white p-6">
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6 border-b border-gray-300">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.label
                      ? "border-b border-black text-black"
                      : "text-gray-500 hover:bg-accent"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-2 text-gray-400 md:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Destination</label>
              <div className="bg-muted rounded-full px-4 py-2.5 md:text-sm text-xs text-black">
                Bali, Indonesia
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Check-in</label>
              <div className="bg-muted rounded-full px-4 py-2.5 md:text-sm text-xs text-black">
                Mon, 23 Nov 2024
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Checkout</label>
              <div className="bg-muted rounded-full px-4 py-2.5 md:text-sm text-xs text-black">
                Wed, 25 Nov 2024
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Guests</label>
              <div className="bg-muted rounded-full px-4 py-2.5 md:text-sm text-xs text-black">
                2 Guests
              </div>
            </div>
            <button className="bg-main text-white rounded-xl p-3 flex items-center justify-center transition-colors w-12 h-12 self-end">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSearchSection
