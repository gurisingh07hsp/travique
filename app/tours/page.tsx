'use client'
import { ToursType } from '@/types/types';
import axios from 'axios';
import { ChevronRight, MapPin, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [tours, setTours] = useState<ToursType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = tours
  .filter((t) =>
    t.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(t.location).toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(()=>{
    const getTours = async()=> {
      const response = await axios.get('/api/tours');
      if(response.status === 200){
        setTours(response.data);
      }
      console.log(response.data.slice(0,6));
    }
    getTours();
  },[]);
  return (
    <div className='max-w-6xl lg:mx-auto mx-4'>
        <div className="py-3">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search packages..." className="pl-9 w-full p-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 mt-14">
          {filtered?.map((service) => (
            <div key={service._id} className="flex flex-col border border-gray-300 p-2 rounded-3xl ">
              {/* Image placeholder */}
              <div className="rounded-2xl aspect-4/3 mb-4" >
                <img src={service.image} alt={service.title} className='w-full h-full object-fill rounded-2xl' />
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={14} className="" />
                <span className="text-xs text-muted-foreground">{service.location}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>

              {/* Price & Book */}
              <div className="flex items-center justify-between bg-main text-primary rounded-full px-5 py-2.5">
                <span className="text-sm font-bold text-primary-foreground">
                  {service.price}
                  {/* <span className="text-xs font-normal opacity-80">/person</span> */}
                </span>
                <a href={`${service.title.replace(/\s+/, '-')}`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
                  Book Now
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default page
