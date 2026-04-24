'use client'
import { ToursType } from '@/types/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
const services = [
  {
    title: "Tours",
    description: " Curated travel experiences to explore New Zealand’s most beautiful destinations.",
  },
  {
    title: "Airport Transfers",
    description: "Reliable pick-up and drop services, aligned with your flight schedule.",
  },
  {
    title: "Private Transfers",
    description: "Flexible, door-to-door travel tailored to your needs.",
  },
  {
    title: "Corporate Travel",
    description: "Efficient and professional transport solutions for business clients.",
  },
];

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
          Our Services
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What We Offer</h3>
        <div className="flex flex-col gap-4">
            {services.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-gray-300 rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                {/* <div className="w-10 h-10 rounded-full bg-muted shrink-0" /> */}
                <div>
                  <h4 className="font-bold text-foreground">{t.title}</h4>
                  <p className="text-muted-foreground mt-1">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {tours?.map((service) => (
            <div key={service._id} className="flex flex-col border border-gray-300 p-2 rounded-3xl ">
              <div className="rounded-2xl aspect-4/3 mb-4" >
                <img src={service.image} alt={service.title} className='w-full h-full object-fill rounded-2xl' />
              </div>

             
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={14} className="" />
                <span className="text-xs text-muted-foreground">{service.location}</span>
              </div>

           
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>

    
              <div className="flex items-center justify-between bg-main text-primary rounded-full px-5 py-2.5">
                <span className="text-sm font-bold text-primary-foreground">
                  {service.price}
                
                </span>
                <a href={`${service.title.replace(/\s+/, '-')}`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
                  Book Now
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div> */}

        {/* View All */}
        {/* <div className="flex mt-4 justify-center">
          <button onClick={()=> router.push('/tours')} className="bg-main cursor-pointer text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            View All Service
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default ServicesSection
