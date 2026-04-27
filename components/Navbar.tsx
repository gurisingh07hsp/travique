'use client'
import { useState } from "react";
import { Menu, MoveDown, X } from "lucide-react";
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
          <img src='/logo.png' alt="logo" className="md:w-48 w-28 rounded-lg" />
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
              href="about"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="services"
              className="flex items-center font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
              <MoveDown size={14}/> 
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
                  </ul>
                </div>
          </li>
          <li className="relative group">
            <Link
              href='/tours'
              className="flex items-center font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              Tours
              <MoveDown size={14}/> 
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
                    {/* <li>
                      <Link href="/milford-sound-day-tour" className="block px-4 py-2 hover:bg-gray-100">
                        Milford Sound Day Tour
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/luxury-private-wanaka-scenic-tour" className="block px-4 py-2 hover:bg-gray-100">
                        Luxury Private Wanaka Scenic Tour
                      </Link>
                    </li> */}
                  </ul>
                </div>
          </li>
          {/* <li>
            <Link
              href="/wine-tour"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Wine Tour
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="/milford-tour"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Milford Tour
            </Link>
          </li> */}
          <li>
            <Link
              href="blogs"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </li>
            {user && user.role === 'admin' && (
            <li>
              <Link
                href="admin"
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
            <Link href={'/tours'} className="rounded-full cursor-pointer px-4 py-2 bg-main text-white hover:opacity-90 transition-opacity">
              Book Now
            </Link>
            <button onClick={logout} className="rounded-full cursor-pointer ms-2 px-4 py-2 bg-red-600 text-white hover:opacity-90 transition-opacity">
              Logout
            </button>
            </>
          ) : (
          <button onClick={()=> setIsOpen(true)} className="rounded-full cursor-pointer ms-2 px-4 py-2 bg-main text-white hover:opacity-90 transition-opacity">
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
