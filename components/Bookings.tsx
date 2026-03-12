'use client'
import { useState } from "react";
import { Search, Filter, Download, Eye, MoreHorizontal, Plus } from "lucide-react";

const bookings = [
  { id: "BK-001", customer: "Sarah Johnson", email: "sarah@email.com", destination: "Bali, Indonesia", checkIn: "Apr 15, 2026", checkOut: "Apr 22, 2026", guests: 2, amount: "$2,450", status: "confirmed" },
  { id: "BK-002", customer: "Michael Chen", email: "michael@email.com", destination: "Paris, France", checkIn: "Apr 18, 2026", checkOut: "Apr 25, 2026", guests: 3, amount: "$3,200", status: "pending" },
  { id: "BK-003", customer: "Emma Wilson", email: "emma@email.com", destination: "Tokyo, Japan", checkIn: "May 01, 2026", checkOut: "May 10, 2026", guests: 2, amount: "$4,100", status: "confirmed" },
  { id: "BK-004", customer: "James Brown", email: "james@email.com", destination: "Maldives", checkIn: "May 05, 2026", checkOut: "May 12, 2026", guests: 4, amount: "$5,800", status: "cancelled" },
  { id: "BK-005", customer: "Lisa Anderson", email: "lisa@email.com", destination: "Dubai, UAE", checkIn: "May 10, 2026", checkOut: "May 15, 2026", guests: 1, amount: "$2,900", status: "confirmed" },
  { id: "BK-006", customer: "David Kim", email: "david@email.com", destination: "Rome, Italy", checkIn: "May 20, 2026", checkOut: "May 27, 2026", guests: 2, amount: "$3,600", status: "pending" },
  { id: "BK-007", customer: "Anna Martinez", email: "anna@email.com", destination: "Santorini, Greece", checkIn: "Jun 01, 2026", checkOut: "Jun 08, 2026", guests: 2, amount: "$4,200", status: "confirmed" },
  { id: "BK-008", customer: "Robert Taylor", email: "robert@email.com", destination: "London, UK", checkIn: "Jun 10, 2026", checkOut: "Jun 17, 2026", guests: 3, amount: "$3,800", status: "pending" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  pending: "bg-amber-500/10 text-amber-600 border-amber-200",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};
const Bookings = () => {
    const [filterStatus, setFilterStatus] = useState("all");
    const filtered = filterStatus === "all" ? bookings : bookings.filter((b) => b.status === filterStatus);
  return (
     <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Bookings</h1>
          <p className="text-muted-foreground text-sm">Manage all tour bookings</p>
        </div>
        <button className="bg-main p-2 rounded-lg flex justify-center items-center text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" /> New Booking
        </button>
      </div>

      <div className="border border-gray-300 rounded-lg shadow p-6 ">
        <div className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input placeholder="Search bookings..." className="pl-9 bg-white w-full py-2 rounded-lg border border-gray-300" />
            </div>
            {/* <select value={filterStatus} onChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select> */}
            <button>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">ID</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden lg:table-cell">Destination</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Check In</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Check Out</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Amount</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2 font-mono text-xs">{b.id}</td>
                    <td className="py-3 px-2">
                      <p className="font-medium text-foreground">{b.customer}</p>
                      <p className="text-xs text-muted-foreground">{b.email}</p>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{b.destination}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{b.checkIn}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{b.checkOut}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{b.amount}</td>
                    <td className="py-3 px-2">
                      <div className={`text-xs capitalize ${statusColors[b.status]}`}>
                        {b.status}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
