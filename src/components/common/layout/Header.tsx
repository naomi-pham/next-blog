import { NavListData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggler from '../ThemeToggler'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="container mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-0">
      <h2 className="text-heading-2 text-neutral-darkGrey dark:text-neutral-white">
        <Link href="/">Next Blog</Link>
      </h2>
      <nav>
        <ul className="inline-flex items-center gap-8">
          {NavListData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className={`${pathname === item.url ? 'text-neutral-darkGrey underline dark:text-neutral-white' : 'text-neutral-lightGrey dark:text-neutral-white/60'} text-heading-4`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Dark/Light mode toggle */}
      <ThemeToggler />
    </header>
  )
}

export default Header
