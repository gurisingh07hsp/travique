'use client';
import { PackageData } from "@/packagedata/packagedata"
import { useRouter } from "next/navigation"
const PopularSearchSection = () => {
  const router = useRouter();
  return (
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4 ">

      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-center font-bold text-foreground">Popular Search</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {PackageData.map((p, index)=> (
            <button onClick={()=> router.push(p.slug)} key={index} className="border border-gray-300 cursor-pointer text-center rounded-lg px-4 py-2">
              <h2>{p.title}</h2>
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default PopularSearchSection
