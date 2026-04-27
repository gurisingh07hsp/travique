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
     <div className="min-h-screen max-w-6xl mx-auto">
      <div className="my-14">
        <h1 className="md:text-4xl text-lg font-semibold">{tour.title}</h1>
        <div className="flex mt-2 items-center gap-2">
          <p className="font-medium">Duration: </p>
          <p>{tour.duration}</p>
        </div>
        <p className="text-xl mt-10 mb-2 font-medium">Description:</p>
        <p>{tour.description}</p>
        <p className="mt-6 text-xl font-medium">Included:</p>
        <ul className="mt-2 ms-4">
          {tour.includes.map((item,index)=>(
            <li className="list-disc" key={index}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 mb-1 text-xl font-medium">Best For:</p>
        <p>{tour.bestFor}</p>
        <button className="mt-4 py-2 px-4 bg-main rounded-lg text-white cursor-pointer">{tour.buttonText}</button>
      </div>
    </div>
  )
}

export default PackageDetail
