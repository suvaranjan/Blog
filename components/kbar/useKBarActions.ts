'use client'

import { useRouter } from 'next/navigation'
import { Action } from 'kbar'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const useKBarActions = () => {
  const router = useRouter()

  const defaultActions: Action[] = [
    {
      id: 'home-page',
      name: 'Home',
      shortcut: ['h'],
      section: 'Navigation',
      icon: 'home',
      perform: () => router.push('/'),
    },
    {
      id: 'blog-page',
      name: 'Blog',
      shortcut: ['b'],
      section: 'Navigation',
      icon: 'book',
      perform: () => router.push('/blog'),
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
      icon: 'blog',
      perform: () => router.push('/' + post.path),
    }))
  }

  return { defaultActions, fetchBlogActions }
}
