import { ThemeProvider } from 'next-themes'
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
    <ThemeProvider attribute="class" enableSystem={true}>
      <div
        className={`${montserrat.className} min-h-screen bg-neutral-white text-body-3 text-neutral-lightGrey dark:bg-neutral-black dark:text-neutral-silver sm:text-body-2`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
