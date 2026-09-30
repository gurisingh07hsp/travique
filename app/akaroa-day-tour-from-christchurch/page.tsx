import AkaroaDayTourPage from '@/components/AkaroaDayTourPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akaroa Day Tour from Christchurch | Private Tours NZ',
  description:
    'Explore Akaroa from Christchurch with a private day tour across Banks Peninsula. Enjoy scenic views, Akaroa Harbour, local charm and flexible travel.',
  alternates: {
    canonical: '/akaroa-day-tour-from-christchurch',
  },
}

const Page = () => {
  return <AkaroaDayTourPage />
}

export default Page
