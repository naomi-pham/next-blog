import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${montserrat.className} text-body-2 text-neutral-lightGrey`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
