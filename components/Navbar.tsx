'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import AuthModal from "./authModal";
import { useUser } from "@/context/UserContext";

const Navbar = () => {
    const { user, logout } = useUser();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="w-full max-w-7xl mx-auto bg-background">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <button className="flex items-center gap-2">
          <img src='/logo.png' alt="Travique logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground tracking-tight">Milky Ways Tours</span>
        </button>


        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="blogs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </li>
            {user && user.role === 'admin' && (
            <li>
              <Link
                href="admin"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Admin
              </Link>
            </li>
            )}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          {user ? (
            <>
            <Link href={'/tours'} className="rounded-full cursor-pointer px-4 py-2 bg-[#F1AC32] text-white hover:opacity-90 transition-opacity">
              Book Now
            </Link>
            <button onClick={logout} className="rounded-full cursor-pointer ms-2 px-4 py-2 bg-red-600 text-white hover:opacity-90 transition-opacity">
              Logout
            </button>
            </>
          ) : (
          <button onClick={()=> setIsOpen(true)} className="rounded-full cursor-pointer ms-2 px-4 py-2 bg-black text-white hover:opacity-90 transition-opacity">
            Login
          </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4 pb-4">
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Blogs
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
          </ul>

          {user ? (
            <>
            <Link href={'/tours'} className="w-full px-4 py-2 rounded-full bg-main text-white">
              Book Now
            </Link>
            <br />
            <button onClick={logout} className="mt-4 px-4 py-2 rounded-full bg-red-600 text-white">
              Logout
            </button>
            </>
          ) : (
          <button onClick={()=> setIsOpen(true)} className="w-full px-4 py-2 rounded-full bg-main text-white">
            Login
          </button>
          )}

        </div>
      )}
      {isOpen && (
        <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </nav>
  )
}

export default Navbar
