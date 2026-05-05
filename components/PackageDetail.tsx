"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { ToursType2 } from "@/types/types";
import { PackageData } from "@/packagedata/packagedata";
const PackageDetail = () => {
    const router = useRouter();
    const {name} = useParams();
    const [tour, setTour] = useState<ToursType2 | null>(null);
    const [loading, setLoading] = useState(true);

    const getTour = ()=> {
      try{
        const Package = PackageData.find((p)=> p.slug == name) || null;
        setTour(Package);
      }catch(error){
        console.log(error);
      }
      setLoading(false);
    } 
    useEffect(()=>{
      getTour();
    },[])

    if(loading){
      return (
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      )
    }

    if(!tour){
      return (
        <div className="h-screen w-full flex justify-center items-center">
          Tour Package Not Found.
        </div>
      )
    }

  return (

        <div className="min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

 
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto mt-6 px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
 
        {/* LEFT */}
        <div className="lg:col-span-2">
 
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden mb-4 group">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-105 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
 
          {/* Title */}
          <h1 style={{fontFamily:"'Playfair Display',Georgia,serif"}} className="font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-2">
            {tour.title}
          </h1>

          <div className="flex mt-1 items-center gap-2">
            <p className="font-medium">Duration: </p>
            <p>{tour.duration}</p>
          </div>
          
 
          {/* Tab: Overview */}
            <div className="mt-5">
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                {tour.description}
              </p>
            </div>
 
          <hr className="border-gray-200 my-10" />

         <p className="mt-6 mb-1 text-xl font-medium">Best For:</p>
         <p className="text-gray-600">{tour.bestFor}</p>
        </div>
 
        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1 space-y-5">
 
          {/* Package Includes Card */}
          <div className="bg-[#1c1c1c] rounded-3xl p-7 text-white sticky top-20">
            <div className="flex justify-center mb-5">
              <span className="bg-[#2e2e2e] text-white font-semibold text-lg px-7 py-2.5 rounded-full" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>
                Package Include:
              </span>
            </div>
 
          {tour.includes.map((item,index)=>(
            <div key={index} className="space-y-5">
              <div className="flex mt-3 items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2e2e2e] flex items-center justify-center text-gray-300 shrink-0">
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              </div>
 
              <div className="h-px bg-white/8" />

            </div>
          ))}
 
            <button onClick={()=> router.push(`/${tour.slug}/book-now`)} className="w-full mt-7 cursor-pointer bg-main text-white font-bold py-4 rounded-2xl transition-all text-sm tracking-wide shadow-lg shadow-amber-400/20">
              {tour.buttonText}
            </button>
 
          </div>
        </div>
      </div>
 
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 px-5 py-4 flex items-center justify-between z-50 shadow-2xl">
        <div>
        </div>
        <button onClick={()=> router.push(`/${tour.slug}/book-now`)} className="bg-main text-white font-bold px-8 py-3 rounded-2xl transition-all text-sm">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default PackageDetail
