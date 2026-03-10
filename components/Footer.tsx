'use client'
import { useState } from "react";
import Image from "next/image";
export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={'/logo.png'} alt="Logo" width={36} height={36}></Image>
            {/* <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#F5A623" fillOpacity="0.15" />
              <path
                d="M18 6C13.0294 6 9 10.0294 9 15C9 21.75 18 30 18 30C18 30 27 21.75 27 15C27 10.0294 22.9706 6 18 6Z"
                fill="#F5A623"
              />
              <path
                d="M18 10L14 18H22L18 10Z"
                fill="white"
              />
            </svg> */}
            <span className="text-xl font-bold text-gray-900 tracking-tight">Travique</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-50">
            Leo elementum iaculis quam massa vitae odio sed. Morbi tincidunt senectus.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {/* Twitter */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-main flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-main flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-main flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Home", "About Us", "Services", "Blogs"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Holiday Package", "Corporate Travel", "Custom Tours"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-5">Subscribe to Newsletter</h4>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email.."
              className="w-full bg-gray-100 rounded-full px-5 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-300 transition"
            />
            <button className="w-fit bg-main hover:bg-amber-500 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>Copyigt © 2026 Travique &nbsp;|    </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}