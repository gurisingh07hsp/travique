import HokitikaDayTourPage from '@/components/HokitikaDayTourPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hokitika Day Tour from Christchurch | Private West Coast Tour',
  description:
    'Explore Hokitika from Christchurch with a private West Coast tour. Visit Hokitika Gorge, rainforest, pounamu attractions and more with MilkyWays.',
  alternates: {
    canonical: '/hokitika-day-tour',
  },
}

const Page = () => {
  return <HokitikaDayTourPage />
}

export default Page
