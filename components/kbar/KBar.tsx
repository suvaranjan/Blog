'use client'

import { useState, useEffect, ReactNode } from 'react'
import { KBarProvider } from 'kbar'
import { KBarModal } from './KBarModal'
import { Action } from 'kbar'
import { useKBarActions } from './useKBarActions'

interface KBarSearchProviderProps {
  children: ReactNode
}

export const KBarSearchProvider = ({ children }: KBarSearchProviderProps) => {
  const [blogActions, setBlogActions] = useState<Action[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasFetched, setHasFetched] = useState(false)
  const { defaultActions, fetchBlogActions } = useKBarActions()

  useEffect(() => {
    if (!hasFetched) {
      fetchBlogActions()
        .then((blogActions) => {
          setBlogActions(blogActions)
          setHasFetched(true)
        })
        .finally(() => setIsLoading(false))
    }
  }, [fetchBlogActions, hasFetched])

  const allActions = isLoading ? defaultActions : [...defaultActions, ...blogActions]

  return (
    <KBarProvider>
      <KBarModal actions={allActions} isLoading={false} />
      {children}
    </KBarProvider>
  )
}
