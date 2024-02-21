import { NavListData } from '@/constants/data'
import Link from 'next/link'

const MobileMenuDrawer = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean
  closeMenu: () => void
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 top-14 z-20 bg-black/70 md:hidden" />
      )}
      <nav className="fixed inset-0 top-14 z-20 flex flex-col overflow-hidden bg-neutral-white dark:bg-neutral-black md:hidden ">
        <ul className="mt-10 px-8">
          {NavListData.map((item) => (
            <li key={item.id} onClick={closeMenu} className="group">
              <Link href={item.url}>
                <div className="text-3xl border-b py-10 font-bold uppercase group-hover:opacity-80">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MobileMenuDrawer
