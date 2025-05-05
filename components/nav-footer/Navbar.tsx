'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import { NormalIcon } from '../icons/Icon'
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = (path: string) =>
    `text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 ${
      pathname === path ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
    }`

  return (
    <nav className="relative py-2">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Avatar */}
          <div className="flex items-center">
            <Image
              className="h-10 w-10 rounded-full"
              src="/static/images/myavatar.jpg"
              alt="Avatar"
              width={40}
              height={40}
            />
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
              ref={buttonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-700"
              aria-expanded={isMobileMenuOpen}
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

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 left-0 z-50 mx-auto mt-1 w-[calc(100%-2.5rem)] max-w-4xl rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="space-y-1 px-2 py-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
