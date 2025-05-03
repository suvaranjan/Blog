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
  const [actions, setActions] = useState<Action[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasFetched, setHasFetched] = useState(false)
  const { defaultActions, fetchBlogActions } = useKBarActions()

  useEffect(() => {
    if (!hasFetched) {
      fetchBlogActions()
        .then((blogActions) => {
          setActions(blogActions)
          setHasFetched(true)
        })
        .finally(() => setIsLoading(false))
    }
  }, [fetchBlogActions, hasFetched])

  return (
    <KBarProvider actions={[...defaultActions, ...actions]}>
      <KBarModal actions={actions} isLoading={isLoading} />
      {children}
    </KBarProvider>
  )
}
