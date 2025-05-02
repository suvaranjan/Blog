'use client'

import { KBarSearchProvider } from './KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            shortcut: ['h'],
            section: 'Navigation',
            perform: () => router.push('/'),
          },
        ],
        onPostsToActions(posts: CoreContent<Blog>[]) {
          return posts.map((post, index) => ({
            id: `${post.path}-${index}`,
            name: post.title,
            keywords: post.summary || '',
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
