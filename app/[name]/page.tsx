'use client'
import PackageDetail from '@/components/PackageDetail'
import QueensTownTexiServices from '@/components/pages/QueensTownTexiServices'
import QueensTownTransfers from '@/components/pages/QueensTownTransfers'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {name} = useParams();
  console.log(name);
  const renderComponent = () =>{
    switch (name) {
    case "queenstown-airport-transfers":
      return < QueensTownTransfers/>;
    case "queenstown-taxi-services":
      return < QueensTownTexiServices/>;
    default:
      return <PackageDetail/>;
  }
  }
  return (
    <div>
      {renderComponent()}
    </div>
  )
}

export default page
