'use client'

import { useState, useEffect, FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { KBarProvider } from 'kbar'
import { KBarModal } from './KBarModal'
import type { Action } from 'kbar'
import { CoreContent, MDXDocument } from '../../utils/contentlayer'
import { formatDate } from '../../utils/formatDate'

export interface KBarSearchProps {
  searchDocumentsPath: string | false
  defaultActions?: Action[]
  onPostsToActions?: (posts: CoreContent<MDXDocument>[]) => Action[]
}

export const KBarSearchProvider: FC<{
  children: ReactNode
  kbarConfig: KBarSearchProps
}> = ({ kbarConfig, children }) => {
  const router = useRouter()
  const { searchDocumentsPath, defaultActions, onPostsToActions } = kbarConfig

  const [dynamicActions, setDynamicActions] = useState<Action[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const defaultMapToActions = (posts: CoreContent<MDXDocument>[]) => {
      return posts.map((post) => ({
        id: post.path,
        name: post.title,
        keywords: post.summary || '',
        section: 'Content',
        subtitle: formatDate(post.date, 'en-US'),
        perform: () => router.push('/' + post.path),
      }))
    }

    async function loadSearchData() {
      if (!searchDocumentsPath) return

      const url = searchDocumentsPath.startsWith('http')
        ? searchDocumentsPath
        : new URL(searchDocumentsPath, window.location.origin)

      const res = await fetch(url.toString())
      const posts = await res.json()

      const actions = onPostsToActions ? onPostsToActions(posts) : defaultMapToActions(posts)
      setDynamicActions(actions)
      setLoaded(true)
    }

    if (!loaded && searchDocumentsPath) {
      loadSearchData()
    } else {
      setLoaded(true)
    }
  }, [searchDocumentsPath, defaultActions, loaded, onPostsToActions, router])

  return (
    <KBarProvider actions={defaultActions}>
      <KBarModal actions={dynamicActions} isLoading={!loaded} />
      {children}
    </KBarProvider>
  )
}
