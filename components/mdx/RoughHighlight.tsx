'use client'

import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'

interface RoughHighlightProps {
  children: React.ReactNode
  className?: string
  type?: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket'
  color?: string
  animate?: boolean
  animationDuration?: number
  strokeWidth?: number
  padding?: number | [number, number] | [number, number, number, number]
  multiline?: boolean
  iterations?: number
  brackets?: 'left' | 'right' | 'top' | 'bottom' | Array<'left' | 'right' | 'top' | 'bottom'>
  rtl?: boolean
  show?: boolean
}

const RoughHighlight = ({
  children,
  className = '',
  type = 'underline',
  color = '#f59e0b',
  animate = true,
  animationDuration = 800,
  strokeWidth = 1,
  padding = 5,
  multiline = true,
  iterations = 2,
  brackets = 'right',
  rtl = false,
  show = true,
}: RoughHighlightProps) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const annotation = annotate(ref.current, {
      type,
      color,
      animate,
      animationDuration,
      strokeWidth,
      padding,
      multiline,
      iterations,
      brackets,
      rtl,
    })

    if (show) {
      annotation.show()
    }

    return () => {
      annotation.remove()
    }
  }, [
    type,
    color,
    animate,
    animationDuration,
    strokeWidth,
    padding,
    multiline,
    iterations,
    brackets,
    rtl,
    show,
  ])

  return (
    <span ref={ref} className={clsx('inline', className)}>
      {children}
    </span>
  )
}

export default RoughHighlight
