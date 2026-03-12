"use client";

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

const navItems = [
  { title: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { title: "Bookings", path: "/admin/bookings", icon: CalendarCheck },
  { title: "Customers", path: "/admin/customers", icon: Users },
  { title: "Tour Packages", path: "/admin/packages", icon: MapPin },
  { title: "Blog Posts", path: "/admin/blog", icon: FileText },
  { title: "Messages", path: "/admin/messages", icon: MessageSquare },
  { title: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/admin") return pathname === "/admin";
    return pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0 md:w-20"
        } fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r transition-all duration-300 overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-3 border-b">
          {sidebarOpen && (
            <Link href="/admin" className="flex items-center gap-2">
              <img src="/logo.png" className="h-8 w-8" />
              <span className="font-bold text-lg">Milky Ways Tours</span>
            </Link>
          )}

          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                isActive(item.path)
                  ? "bg-main text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        {sidebarOpen && (
          <div className="border-t p-3">
            <Link href="/" className="flex items-center gap-2 text-sm">
              <LogOut className="h-5 w-5" />
              Back to Website
            </Link>
          </div>
        )}
      </aside>

      {/* Main */}
      <div
        className={`flex-1 flex flex-col ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-20"
        } transition-all`}
      >
        {/* Top Bar */}
        <header className="flex h-16 items-center border-b px-6">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu />
          </button>

          <div className="relative ml-4">
            <Search className="absolute left-2 top-2 h-4 w-4" />
            <input
              placeholder="Search..."
              className="pl-8 border rounded-md h-9"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Bell />

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                AD
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-500">
                  admin@milkyways.com
                </p>
              </div>

              <ChevronDown />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#fafcfd]">
          {children}
        </main>
      </div>
    </div>
  );
}