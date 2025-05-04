'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import { NormalIcon } from '../icons/Icon'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 ${
      pathname === path ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
    }`

  return (
    <nav className="py-2">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Avatar (always visible) */}
          <div className="flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <svg
                className="h-full w-full text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>

          {/* Right: Links and buttons */}
          <div className="flex items-center gap-4">
            {/* Desktop Nav Links */}
            <div className="hidden items-center gap-7 md:flex">
              <Link href="/" className={linkClass('/')}>
                Home
              </Link>
              <Link href="/blog" className={linkClass('/blog')}>
                Blog
              </Link>
            </div>

            <ThemeSwitch size={20} />
            <SearchButton size={22} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md text-gray-700 md:hidden dark:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <NormalIcon size={24} name="menuopen" />
              ) : (
                <NormalIcon size={24} name="menuclose" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 shadow-lg sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
