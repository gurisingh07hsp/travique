'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const FeaturedTours = () => {
    const router = useRouter();
    const tours = [
        {
            _id: 1,
            title: 'Milford Sound Scenic Tour',
            image: '#',
        },
        {
            _id: 2,
            title: 'Queenstown Explorer',
            image: '#',
        },
        {
            _id: 3,
            title: 'Christchurch City Tour',
            image: '#',
        },
        {
            _id: 4,
            title: 'Custom South Island Journeys',
            image: '#',
        },
    ]
  return (
    <div className="max-w-7xl mx-auto my-8 px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Featured Tours
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Popular Experiences</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-14">
          {tours?.map((service) => (
            <div key={service._id} className="flex flex-col border border-gray-300 p-2 rounded-3xl ">
              <div className="rounded-2xl aspect-4/3 mb-4" >
                <img src={service.image} alt={service.title} className='w-full h-full object-fill rounded-2xl' />
              </div>

             
              {/* <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={14} className="" />
                <span className="text-xs text-muted-foreground">{service.location}</span>
              </div> */}

           
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>

    
              <div className="flex items-center justify-between bg-main text-primary rounded-full px-5 py-2.5">
                {/* <span className="text-sm font-bold text-primary-foreground">
                  {service.price}
                
                </span> */}
                <a href={`${service.title.replace(/\s+/, '-')}`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
                  Book Now
                  {/* <ChevronRight size={14} /> */}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 justify-center">
          <button onClick={()=> router.push('/tours')} className="bg-main cursor-pointer text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            View All Tours
          </button>
        </div>
    </div>
  )
}

export default FeaturedTours
