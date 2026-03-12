import { Search, Download, Eye, MoreHorizontal, Mail } from "lucide-react";

const customers = [
  { name: "Sarah Johnson", email: "sarah@email.com", phone: "+1 234-567-8901", trips: 5, totalSpent: "$12,450", lastTrip: "Bali", joined: "Jan 2025", status: "active" },
  { name: "Michael Chen", email: "michael@email.com", phone: "+1 345-678-9012", trips: 3, totalSpent: "$8,600", lastTrip: "Paris", joined: "Mar 2025", status: "active" },
  { name: "Emma Wilson", email: "emma@email.com", phone: "+1 456-789-0123", trips: 7, totalSpent: "$22,100", lastTrip: "Tokyo", joined: "Oct 2024", status: "vip" },
  { name: "James Brown", email: "james@email.com", phone: "+1 567-890-1234", trips: 1, totalSpent: "$2,800", lastTrip: "Maldives", joined: "Feb 2026", status: "new" },
  { name: "Lisa Anderson", email: "lisa@email.com", phone: "+1 678-901-2345", trips: 4, totalSpent: "$15,200", lastTrip: "Dubai", joined: "Jun 2025", status: "active" },
  { name: "David Kim", email: "david@email.com", phone: "+1 789-012-3456", trips: 2, totalSpent: "$6,400", lastTrip: "Rome", joined: "Aug 2025", status: "inactive" },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  vip: "bg-yellow-500/10 txt-main border-primary/20",
  new: "bg-blue-500/10 text-blue-600 border-blue-200",
  inactive: "bg-muted text-muted-foreground border-border",
};

const Customers = () => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground text-sm">Manage your customer database</p>
      </div>
      <button className="bg-main text-white p-2 rounded-lg flex justify-center items-center cursor-pointer">
        <Download className="h-4 w-4 mr-2" /> Download
      </button>
    </div>

    {/* Summary */}
    <div className="grid gap-4 sm:grid-cols-4">
      {[
        { label: "Total Customers", value: "3,462" },
        { label: "Active", value: "2,841" },
        { label: "VIP Members", value: "186" },
        { label: "New This Month", value: "124" },
      ].map((s) => (
        <div key={s.label} className="border border-gray-300 rounded-lg py-4 shadow">
          <div className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="border border-gray-300 p-6 rounded-lg shadow">
      <div className="pb-3">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input placeholder="Search customers..." className="pl-9 border border-gray-300 py-2 w-full rounded-lg" />
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">Customer</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Phone</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden lg:table-cell">Trips</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">Total Spent</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden sm:table-cell">Last Trip</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.email} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8">
                        <div className="bg-accent text-accent-foreground text-xs">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{c.phone}</td>
                  <td className="py-3 px-2 text-foreground hidden lg:table-cell">{c.trips}</td>
                  <td className="py-3 px-2 font-medium text-foreground">{c.totalSpent}</td>
                  <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">{c.lastTrip}</td>
                  <td className="py-3 px-2">
                    <div className={`text-xs capitalize ${statusColors[c.status]}`}>
                      {c.status}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex gap-1">
                      <button className="h-7 w-7"><Eye className="h-3.5 w-3.5" /></button>
                      <button className="h-7 w-7"><Mail className="h-3.5 w-3.5" /></button>
                      <button className="h-7 w-7"><MoreHorizontal className="h-3.5 w-3.5" /></button>
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
);

export default Customers;
