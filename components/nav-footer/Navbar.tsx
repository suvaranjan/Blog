'use client'

import Image from 'next/image'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-2">
      <div>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              className="h-10 w-10 rounded-full"
              src="/static/images/myavatar.jpg"
              alt="Avatar"
              width={40}
              height={40}
            />
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
