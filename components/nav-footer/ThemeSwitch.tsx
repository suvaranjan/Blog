// components/ThemeSwitch.tsx
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '../icons/Icon'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <button>
        {/* <Icon size={22} name="Moon" /> */}
        <Icon size={22} name="Theme" />
      </button>
    )

  const isDark = resolvedTheme === 'dark'

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle Theme">
      {/* {isDark ? <Icon size={24} name="Sun" /> : <Icon size={22} name="Moon" />} */}
      <Icon size={24} name="Theme" className="dark:text-white" />
    </button>
  )
}

export default ThemeSwitch
