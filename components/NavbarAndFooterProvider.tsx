'use client'
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const NavbarAndFooterProvider = ({ children }: {children: React.ReactNode}) => {
  const pathName = usePathname();
  return (
    <>
      {!pathName.includes('/admin') && <Navbar />}
        {children}
      {!pathName.includes('/admin') && <Footer/>}
    </>
  )
}

export default NavbarAndFooterProvider
