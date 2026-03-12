import { Search, Plus, Edit, Trash2, Eye, Star } from "lucide-react";

const packages = [
  { id: 1, name: "Bali Paradise Escape", destination: "Bali, Indonesia", duration: "7 Days / 6 Nights", price: "$1,299", rating: 4.8, bookings: 245, status: "active" },
  { id: 2, name: "Romantic Paris Getaway", destination: "Paris, France", duration: "5 Days / 4 Nights", price: "$2,199", rating: 4.9, bookings: 198, status: "active" },
  { id: 3, name: "Tokyo Adventure Tour", destination: "Tokyo, Japan", duration: "8 Days / 7 Nights", price: "$2,499", rating: 4.7, bookings: 176, status: "active" },
  { id: 4, name: "Maldives Luxury Resort", destination: "Maldives", duration: "6 Days / 5 Nights", price: "$3,899", rating: 4.9, bookings: 154, status: "active" },
  { id: 5, name: "Dubai City Explorer", destination: "Dubai, UAE", duration: "5 Days / 4 Nights", price: "$1,799", rating: 4.6, bookings: 132, status: "draft" },
  { id: 6, name: "Italian Heritage Tour", destination: "Rome, Italy", duration: "10 Days / 9 Nights", price: "$2,899", rating: 4.8, bookings: 118, status: "inactive" },
];

const Packages = () => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tour Packages</h1>
        <p className="text-muted-foreground text-sm">Create and manage tour packages</p>
      </div>
      <button className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus className="h-4 w-4 mr-2" /> Add Package
      </button>
    </div>

    <div className="border-border">
      <div className="pb-3">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input placeholder="Search packages..." className="pl-9" />
        </div>
      </div>
      <div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.id} className="border-border overflow-hidden">
              <div className="h-36 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Package Image</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground">{pkg.destination}</p>
                  </div>
                  <div
                    className={`text-xs capitalize ${
                      pkg.status === "active" ? "bg-emerald-500/10 text-emerald-600 border-emerald-200" :
                      pkg.status === "draft" ? "bg-amber-500/10 text-amber-600 border-amber-200" :
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    {pkg.status}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{pkg.duration}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" /> {pkg.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                  <span className="text-xs text-muted-foreground">{pkg.bookings} bookings</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 text-xs">
                    <Eye className="h-3 w-3 mr-1" /> View
                  </div>
                  <button className="h-8 text-xs">
                    <Edit className="h-3 w-3" />
                  </button>
                  <button className="h-8 text-xs text-destructive hover:text-destructive">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Packages;
