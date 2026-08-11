'use client'
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import AuthModal from "./authModal";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { user, logout } = useUser();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
  return (
     <nav className="w-full max-w-7xl mx-auto bg-background">
          <div className="md:hidden">
            <div className='mx-auto py-1 bg-main text-white text-center'>
              <p>24X7 Taxi service in Queenstown</p>
              <button onClick={() => window.location.href = 'tel:+642108111920'} className="flex font-medium mx-auto items-center gap-1 cursor-pointer text-muted-foreground">
                <Phone size={15}/>  +64 2108111920
              </button>
            </div>
          </div>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <button onClick={()=> router.push('/')} className="flex items-center gap-2">
          <img src='/logo.jpeg' alt="logo" className="md:w-48 w-28 rounded-sm" />
        </button>


        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-x-0.5 font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
              <img src="/dropdown.svg" className="w-6" alt="" />
            </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="py-2">
                    <li>
                      <Link href="/airport-transfer-package" className="block px-4 py-2 hover:bg-gray-100">
                        Airport Transfer Package
                      </Link>
                    </li>
                    <li>
                      <Link href="/remarkables-ski-transfer-package" className="block px-4 py-2 hover:bg-gray-100">
                        Remarkables Ski Transfer Package
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-fleet" className="block px-4 py-2 hover:bg-gray-100">
                        Our Fleet
                      </Link>
                    </li>
                  </ul>
                </div>
          </li>
          <li className="relative group">
            <Link
              href='/tours'
              className="flex items-center gap-x-0.5 font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              Tours
               <img src="/dropdown.svg" className="w-6" alt="" />
            </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="py-2">
                    <li>
                      <Link href="/queenstown-day-experience" className="block px-4 py-2 hover:bg-gray-100">
                        Queenstown Day Experience
                      </Link>
                    </li>
                    <li>
                      <Link href="/milford-sound-scenic-journey" className="block px-4 py-2 hover:bg-gray-100">
                        Milford Sound Scenic Journey
                      </Link>
                    </li>
                    <li>
                      <Link href="/christchurch-city-tour" className="block px-4 py-2 hover:bg-gray-100">
                        Christchurch City Tour
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-south-island-package" className="block px-4 py-2 hover:bg-gray-100">
                        Custom South Island Package
                      </Link>
                    </li>
                  </ul>
                </div>
          </li>
          <li>
            <Link
              href="/blogs"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </li>
            {user && user.role === 'admin' && (
            <li>
              <Link
                href="/admin"
                className="font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            <button onClick={logout} className="rounded-full cursor-pointer ms-2 px-4 py-2 bg-red-600 text-white hover:opacity-90 transition-opacity">
              Logout
            </button>
            </>
          ) : (
          <div className="flex flex-col text-sm justify-start">
            Contact for Airport transfers:
            <button onClick={() => window.location.href = 'tel:+642108111920'} className="text-sm flex items-center gap-1 cursor-pointer text-muted-foreground">
            <Phone size={15}/>  +64 2108111920
            </button>
          </div>
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
                <Link onClick={()=>setMobileOpen(false)} href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/airport-transfer-package" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Airport Transfer Package
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/remarkables-ski-transfer-package" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Remarkables Ski Transfer Package
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/our-fleet" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/queenstown-day-experience" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Queenstown Day Experience
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/milford-sound-scenic-journey" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Milford Sound Scenic Journey
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/christchurch-city-tour" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Christchurch City Tour
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/custom-south-island-package" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Custom South Island Package
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Blogs
                </Link>
              </li>
              <li>
                <Link onClick={()=>setMobileOpen(false)} href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              {user && user.role === 'admin' && (
              <li>
                <Link
                  onClick={()=>setMobileOpen(false)}
                  href="/admin"
                  className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Admin
                </Link>
              </li>
              )}
          </ul>

          {user ? (
            <>
            <button onClick={logout} className="mt-4 px-4 py-2 rounded-full bg-red-600 text-white">
              Logout
            </button>
            </>
          ) : (
          <div className="flex flex-col items-start">
            Contact for Airport transfers:
            <button onClick={() => window.location.href = 'tel:+642108111920'} className="flex items-center cursor-pointer text-muted-foreground">
             <Phone size={14}/> +64 2108111920
            </button>
          </div>
          )}

        </div>
      )}
    </nav>
  )
}

export default Navbar
