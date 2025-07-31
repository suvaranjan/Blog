'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'All', href: '/blog' },
  { label: 'Technology', href: '/tags/javascript' },
  { label: 'Book Journal', href: '/tags/good' },
  { label: 'Thoughts', href: '/tags/bad' },
]
// const navItems = [
//   { label: 'All', href: '/blog' },
//   { label: 'Technology', href: '/tags/technology' },
//   { label: 'Book Journal', href: '/tags/book-journal' },
//   { label: 'My Thoughts', href: '/tags/my-thoughts' },
// ]

export function CatagoryNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/blog') {
      return pathname === '/blog'
    }
    return pathname === href
  }

  return (
    <nav className="inline-flex items-center space-x-1 rounded-lg bg-gray-100 p-1 dark:border-none dark:bg-neutral-800">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            isActive(item.href)
              ? 'bg-white text-gray-900 dark:bg-white dark:text-black'
              : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
