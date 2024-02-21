import { NavListData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggler from '../ThemeToggler'
import { useEffect, useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import { IconClose, IconHamburger } from '../Icons'
import MobileMenuDrawer from './MobileMenuDrawer'

const Header = () => {
  const pathname = usePathname()

  const { width: windowWidth } = useWindowSize()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  useEffect(() => {
    if (windowWidth >= 640) {
      closeMenu()
    }
  }, [windowWidth])

  return (
    <header className="container mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-0">
      <h2 className="text-heading-3 text-neutral-darkGrey dark:text-neutral-white sm:text-heading-2">
        <Link href="/">Next Blog</Link>
      </h2>
      <nav>
        <ul className="hidden items-center gap-6 sm:inline-flex sm:gap-8">
          {NavListData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className={`${pathname === item.url ? 'text-neutral-darkGrey underline dark:text-neutral-white' : 'text-neutral-lightGrey dark:text-neutral-white/60'} text-body-3 font-medium sm:text-heading-4`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggler />
        <button
          onClick={toggleMenu}
          className="z-40 flex items-center gap-2 py-1 sm:hidden"
        >
          <i>{isOpen ? <IconClose /> : <IconHamburger />}</i>
        </button>
      </div>

      {isOpen && <MobileMenuDrawer isOpen={isOpen} closeMenu={closeMenu} />}
    </header>
  )
}

export default Header
