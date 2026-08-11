'use client'
import { useRouter } from 'next/navigation'
import {cars} from '@/ourfleets/ourfleetsdata'
import Image from 'next/image'

const FeaturedFleet = () => {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto my-20 md:my-28 px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Our Fleet
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-14">
          {cars?.map((car,index) => (
            <div onClick={()=> router.push(`/${car.name}/book-now`)} key={index} className="flex flex-col shadow cursor-pointer p-2 rounded-xl">
              <div className="relative rounded-2xl aspect-4/3 mb-4 px-1 pt-1">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="w-full h-full object-fill shadow-lg rounded-lg"
                />
              </div>

           
              <h3 className="text-lg font-bold text-foreground mb-3 ms-2">{car.name}</h3>
              <div className="flex items-center justify-between bg-main text-primary mx-1 rounded-full px-5 py-2.5">
                <a href={`/${car.name}/book-now`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 justify-center">
          <button onClick={()=> router.push('/our-fleet')} className="bg-main cursor-pointer text-primary rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            View More Fleet
          </button>
        </div>
    </div>
  )
}

export default FeaturedFleet
