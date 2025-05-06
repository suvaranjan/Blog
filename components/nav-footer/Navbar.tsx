'use client'

import Image from 'next/image'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80">
      <div>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/blog"
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/static/images/myavatar.jpg"
                alt="Avatar"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-100">Suvaranjan</span>
          </Link>

          <div className="flex items-center space-x-5">
            <SearchButton />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}
