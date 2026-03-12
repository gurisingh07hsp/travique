'use client'
import Bookings from "@/components/Bookings";
import Customers from "@/components/Customers";
import Packages from "@/components/Packages";
import { useParams } from "next/navigation";
export default function Page() {
  const {pagename} = useParams();

  return (
    <>
      {pagename == 'bookings' && <Bookings/>}
      {pagename == 'customers' && <Customers/>}
      {pagename == 'packages' && <Packages/>}
    </>
  );
}