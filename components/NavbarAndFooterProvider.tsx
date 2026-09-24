'use client'
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import GoogleMapEmbed from './GoogleMapEmbed'

const NavbarAndFooterProvider = ({ children }: {children: React.ReactNode}) => {
  const pathName = usePathname();
  const isAdmin = pathName.includes('/admin')
  return (
    <>
      {!isAdmin && <Navbar />}
        {children}
      {!isAdmin && (
        <>
          <GoogleMapEmbed />
          <Footer/>
        </>
      )}
    </>
  )
}

export default NavbarAndFooterProvider
