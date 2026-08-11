'use client'
import { ToursType2 } from '@/types/types';
import { PackageData } from '@/packagedata/packagedata';
import { ChevronRight} from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const OurFleetPage = () => {
    // const cars = [
    //   {
    //     img: '/ourFleet/car1.jpeg'
    //   }
    // ]
    const router = useRouter();
  return (
    <div className='max-w-6xl lg:mx-auto mx-4'>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Explore Our Fleet</h3>
          {/* <p>Carefully designed tours to help you experience New Zealand comfortably, without the stress of planning.</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 mt-14">
          {[1,2,3,4,5,6,7,8].map((car,index) => (
            <div onClick={()=> router.push(`/car${car}/book-now`)} key={index} className="flex flex-col shadow cursor-pointer p-2 rounded-xl">
              {/* Image placeholder */}
              <div className="relative rounded-lg aspect-4/3 h-60 mb-4 px-1 pt-1">
                <Image
                  src={`/ourFleet/car${car}.jpeg`}
                  alt={`car${car}`}
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>

              {/* Location */}

              {/* Title */}
              {/* <h3 classNam  e="text-lg font-bold text-foreground mb-3">{t.title}</h3> */}
              {/* <p>{t.description}</p> */}
              {/* Price & Book */}
              <div className="flex items-center justify-between bg-main text-primary rounded-full px-5 py-2.5">
                <a href={`/car${car}/book-now`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
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

export default OurFleetPage
