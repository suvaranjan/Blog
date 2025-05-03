'use client'

import { useRouter } from 'next/navigation'
import { Action } from 'kbar'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { formatDate } from 'utils/formatDate'

export const useKBarActions = () => {
  const router = useRouter()

  const defaultActions: Action[] = [
    {
      id: 'homepage',
      name: 'Homepage',
      shortcut: ['h'],
      section: 'Navigation',
      icon: 'Home',
      perform: () => router.push('/'),
    },
  ]

  const fetchBlogActions = async (): Promise<Action[]> => {
    const response = await fetch('/search.json')
    const posts: CoreContent<Blog>[] = await response.json()

    return posts.map((post, index) => ({
      id: `${post.path}-${index}`,
      name: post.title,
      keywords: post.summary || '',
      section: 'Blog',
      icon: 'Reader',
      perform: () => router.push('/' + post.path),
    }))
  }

  return { defaultActions, fetchBlogActions }
}
