'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Writing', href: '/blog' },
  { label: 'Art', href: '/art' },
]

export function SectionNav() {
  const pathname = usePathname()

  // ✅ Only render if exact match
  if (pathname !== '/blog' && pathname !== '/art') {
    return null
  }

  const isActive = (href: string) => pathname === href

  return (
    <div className="py-6">
      <div className="relative flex border-b border-gray-200 dark:border-neutral-700">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-4 py-3 text-sm font-medium ${
              isActive(item.href)
                ? 'text-black dark:text-white'
                : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            {item.label}
            {isActive(item.href) && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-black dark:bg-white" />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
