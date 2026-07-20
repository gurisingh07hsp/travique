'use client'
import { useRouter } from 'next/navigation'
import { PackageData } from '@/packagedata/packagedata'
import Image from 'next/image'
const FeaturedTours = () => {
    const router = useRouter();
    const tours = PackageData.slice(0,4);
  return (
    <div className="max-w-7xl mx-auto my-12 px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14">
          Featured Tours
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Popular Experiences</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-14">
          {tours?.map((t,index) => (
            <div onClick={()=> router.push(`/${t.slug}`)} key={index} className="flex flex-col shadow cursor-pointer p-2 rounded-xl">
              <div className="relative rounded-2xl aspect-4/3 mb-4 px-1 pt-1">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="w-full h-full object-fill shadow-lg rounded-lg"
                />
              </div>

           
              <h3 className="text-lg font-bold text-foreground mb-3 ms-2">{t.title}</h3>
              <div className="flex items-center justify-between bg-main text-primary mx-1 rounded-full px-5 py-2.5">
                <a href={`/${t.slug}`} className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity">
                  View Tour
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
