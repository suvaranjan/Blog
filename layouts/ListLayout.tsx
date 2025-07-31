'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from '../utils/formatDate'
import { CoreContent } from '../utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { CatagoryNav } from '@/components/nav-footer/CatagoryNav'
import { SectionNav } from '@/components/nav-footer/SectionNav'
import SearchButton from '@/components/nav-footer/SearchButton'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  pagination?: PaginationProps
  initialDisplayPosts?: CoreContent<Blog>[]
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage ? (
          <button className="cursor-auto disabled:opacity-50" disabled>
            Previous
          </button>
        ) : (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}` : `/${basePath}/page/${currentPage - 1}`}
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

export default function ListLayout({
  posts,
  title,
  pagination,
  initialDisplayPosts = [],
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-3 space-y-1 pt-6 pb-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
              Writings
            </h1>
            <SearchButton />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">My Notes, Ideas and thoughts</p>
        </div>

        {/* <SectionNav /> */}

        <ul className="mt-3">
          {!displayPosts.length && 'No posts found.'}
          {displayPosts.map(({ path, date, title, summary, tags }) => (
            <li key={path} className="py-5">
              <article className="space-y-2">
                <div className="space-y-3 xl:col-span-3">
                  <div className="space-y-2">
                    <h3 className="hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium text-gray-800 dark:text-gray-200">
                      <Link href={`/${path}`}>{title}</Link>
                    </h3>
                    {/* <div className="flex flex-wrap">
                      {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                    </div> */}
                  </div>
                  <div className="max-w-lg text-sm leading-relaxed text-black dark:text-white">
                    {summary}
                  </div>
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-xs text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
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
