import KaikouraDayTourPage from '@/components/KaikouraDayTourPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaikoura Day Tour from Christchurch | Milkyways Tours',
  description:
    'Plan a private Kaikoura day tour from Christchurch: whale watching, seal swim, coastal walk and crayfish lunch. Timings, costs and tips from local drivers.',
  alternates: {
    canonical: '/kaikoura-day-tour-from-christchurch',
  },
}

const Page = () => {
  return <KaikouraDayTourPage />
}

export default Page
