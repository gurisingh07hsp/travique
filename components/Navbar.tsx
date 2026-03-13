'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
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
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href={'book-now'} className="rounded-full cursor-pointer px-4 py-2 bg-[#F1AC32] text-white hover:opacity-90 transition-opacity">
            Book Now
          </Link>
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
          <ul className="flex flex-col gap-4 pt-4">
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
          <Link href={'book-now'} className="mt-4 w-full rounded-full bg-main text-white">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
