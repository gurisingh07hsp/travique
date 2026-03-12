'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  MapPin,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";

const navItems = [
  { title: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { title: "Bookings", path: "/admin/bookings", icon: CalendarCheck, badge: 12 },
  { title: "Customers", path: "/admin/customers", icon: Users },
  { title: "Tour Packages", path: "/admin/packages", icon: MapPin },
  { title: "Blog Posts", path: "/admin/blog", icon: FileText },
  { title: "Messages", path: "/admin/messages", icon: MessageSquare, badge: 5 },
  { title: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", path: "/admin/settings", icon: Settings },
];
const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = usePathname();

  const isActive = (path: string) => {
    if (path === "/admin") return location === "/admin";
    return location.startsWith(path);
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0 md:w-20"
        } fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-border bg-card transition-all duration-300 overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-2 border-b border-border">
          {sidebarOpen && (
            <Link href="/admin" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <img src='/logo.png' alt="Travique logo" className="h-8 w-8" />
              </div>
              <span className="font-bold text-lg text-foreground">Milky Ways Tours</span>
            </Link>
          )}
          <button
            className="h-8 w-8 cursor-pointer shrink-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "bg-main"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {sidebarOpen && (
                <>
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <div
                      className="h-5 min-w-5 flex items-center justify-center text-xs px-1.5"
                    >
                      {item.badge}
                    </div>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        {sidebarOpen && (
          <div className="border-t border-border p-3">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Back to Website</span>
            </Link>
          </div>
        )}
      </aside>

      {/* Main */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-20"
        }`}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-card px-6">
          <button
            className="md:hidden h-8 w-8"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search bookings, customers..."
              className="pl-9 h-9 w-full bg-gray-100 rounded-2xl border-0"
            />
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="relative h-9 w-9">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </button>

            <div className="flex items-center gap-2 pl-3 border-l border-border">
              <div className="h-8 w-8 border rounded-full flex justify-center items-center">
                <div className="bg-primary text-primary-foreground text-xs">
                  AD
                </div>
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-medium text-foreground leading-none">Admin</p>
                <p className="text-xs text-muted-foreground">admin@travique.com</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#fafcfd]">
            {location.includes('/admin') && <Dashboard/>}
            {location.includes('/bookings') && <Bookings/>}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
