import { NavListData } from '@/constants/data'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="container mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-0">
      <h2 className="text-neutral-darkGrey text-heading-2">Next Blog</h2>
      <nav>
        <ul className="inline-flex items-center gap-8">
          {NavListData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className={`${pathname === item.url ? 'text-neutral-darkGrey underline' : ''} text-heading-4 hover:text-neutral-grey`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Dark/Light mode toggle */}
      <button>Dark mode</button>
    </header>
  )
}

export default Header
