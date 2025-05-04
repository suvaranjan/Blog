'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-10 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage ? (
          <button className="cursor-auto disabled:opacity-50" disabled>
            Previous
          </button>
        ) : (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage ? (
          <button className="cursor-auto disabled:opacity-50" disabled>
            Next
          </button>
        ) : (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({ posts, title, pagination }: ListLayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-3xl divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-1 pt-6 pb-8">
          <h1 className="text-2xl tracking-tight text-gray-900 dark:text-gray-100">{title}</h1>

          <p className="text-md text-gray-500 dark:text-gray-400">
            Just me, overthinking... again.
          </p>
        </div>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.map(({ path, date, title, summary, tags }) => (
            <li key={path} className="py-8">
              <article className="space-y-2">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div className="space-y-2">
                    <h3 className="hover:text-primary-600 dark:hover:text-primary-400 text-xl text-gray-800 dark:text-gray-200">
                      <Link href={`/${path}`}>{title}</Link>
                    </h3>
                    <div className="flex flex-wrap">
                      {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
