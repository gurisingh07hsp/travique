import AirportTransferServicePage from '@/components/AirportTransferServicePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Transfer Service in Queenstown | MilkyWays Tours & Transfers',
  description:
    'Reliable airport shuttle and private airport transfers in Queenstown, New Zealand. Professional pickup, drop-off and group transport with MilkyWays Tours & Transfers.',
}

const Page = () => {
  return <AirportTransferServicePage />
}

export default Page
