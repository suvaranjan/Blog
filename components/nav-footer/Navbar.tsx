'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 ${
      pathname === path ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
    }`

  return (
    <nav>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center gap-6">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/blog" className={linkClass('/blog')}>
            Writings
          </Link>
          <div className="flex items-center gap-6">
            <ThemeSwitch />
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
