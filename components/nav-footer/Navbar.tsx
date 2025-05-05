'use client'

import Image from 'next/image'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900">
      <div>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="prose text-lg font-semibold tracking-normal text-gray-800 dark:text-gray-100"
          >
            <Image
              className="h-8 w-8 rounded-full"
              src="/static/images/myavatar.jpg"
              alt="Avatar"
              width={30}
              height={30}
            />
            {/* Suvaranjan Blog */}
          </Link>

          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
