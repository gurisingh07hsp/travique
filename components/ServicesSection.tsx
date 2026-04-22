'use client'
import { ToursType } from '@/types/types';
import axios from 'axios';
import { ChevronRight, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// const services = [
//   {
//     location: "Colorado, USA",
//     title: "Shadowpeak Canyon",
//     price: "$740",
//   },
//   {
//     location: "Bali, Indonesia",
//     title: "Bali Getaway Package",
//     price: "$320",
//   },
//   {
//     location: "Paris, France",
//     title: "European Discovery Tour",
//     price: "$1,450",
//   },
// ];

const ServicesSection = () => {
  const router = useRouter();
  const [tours, setTours] = useState<ToursType[]>([]);

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
     <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Discover Premium Travel Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {tours?.map((service) => (
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

        {/* View All */}
        <div className="flex justify-center">
          <button onClick={()=> router.push('/tours')} className="bg-main cursor-pointer text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            View All Service
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
