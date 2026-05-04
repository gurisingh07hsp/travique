'use client'
import { useEffect, useState } from "react";
import { Search, Filter, Download, Eye, MoreHorizontal, Plus } from "lucide-react";
import { BookingsType } from "@/types/types";
import axios from "axios";

const statusColors: Record<string, string> = {
  done: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  pending: "bg-amber-500/10 text-amber-600 border-amber-200",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};
const Bookings = () => {
    const [bookings,setBookings] = useState<BookingsType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    // const filtered = filterStatus === "all" ? bookings : bookings.filter((b) => b.payment === filterStatus);
    const filtered = bookings
  .filter((b) =>
    filterStatus === "all" ? true : b.payment === filterStatus
  )
  .filter((b) =>
    b.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof b.destination === 'object' ? b.destination?.location?.toLowerCase().includes(searchTerm.toLowerCase()) : b.destination?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

    const fetchBookings = async() => {
      const response = await axios.get('/api/bookings');
      if(response.status == 200){
        console.log("Data : ", response.data);
        setBookings(response.data);
      }
    }

    useEffect(()=>{
      fetchBookings();
    },[])
  return (
     <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Bookings</h1>
          <p className="text-muted-foreground text-sm">Manage all tour bookings</p>
        </div>
        {/* <button className="bg-main p-2 rounded-lg flex justify-center items-center text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" /> New Booking
        </button> */}
      </div>

      <div className="border border-gray-300 rounded-lg shadow p-6 ">
        <div className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search bookings..." className="pl-9 bg-white w-full py-2 rounded-lg border border-gray-300" />
            </div>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="border border-gray-300 rounded-lg">
                <option value="all">All</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
            </select>
            {/* <button>
              <Download className="h-4 w-4" />
            </button> */}
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden lg:table-cell">Destination</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden lg:table-cell">Locations</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Check In</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Check Out</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Booking Date</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Phone</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Payment</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b._id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2">
                      <p className="font-medium text-foreground">{b.name}</p>
                      <p className="text-xs text-muted-foreground">{b.email}</p>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{typeof b.destination === 'object' ? b.destination?.location : b.destination}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">
                      <div>
                        <div>
                          <p>Pickup:</p>
                          <p>{b?.pickupLocation}</p>
                        </div>
                        <div>
                          <p>Drop:</p>
                          <p>{b?.dropoffLocation}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell"> {new Date(b.departureDate).toLocaleDateString()}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell"> {new Date(b.returnDate).toLocaleDateString()}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell"> {new Date(b.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{b.phone}</td>
                    <td className="py-3 px-2">
                      <div className={`text-xs rounded-2xl w-[70%] text-center capitalize ${statusColors[b.payment]}`}>
                        {b.payment}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex gap-1">
                        <button className="h-7 w-7">
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button className="h-7 w-7">
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No bookings found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
