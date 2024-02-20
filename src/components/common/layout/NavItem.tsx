'use client'

import { INavItem } from '@/constants/interfaces'
import Link from 'next/link'
import React from 'react'

const NavItem = ({ item }: { item: INavItem }) => {
  return (
    <li key={item.id}>
      <Link
        href={item.url}
        className="text-neutral-darkGrey text-heading-4 underline"
      >
        {item.label}
      </Link>
    </li>
  )
}

export default NavItem
