import CastleHillDayTourPage from '@/components/CastleHillDayTourPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Castle Hill Day Tour from Christchurch | Private NZ Tour',
  description:
    'Explore Kura Tāwhiti on a Castle Hill day tour from Christchurch. Enjoy limestone landscapes, scenic walks and private, comfortable transport with MilkyWays.',
  alternates: {
    canonical: '/castle-hill-day-tour-christchurch',
  },
}

const Page = () => {
  return <CastleHillDayTourPage />
}

export default Page
