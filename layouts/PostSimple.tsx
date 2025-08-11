import { ReactNode } from 'react'
import { formatDate } from 'utils/formatDate'
import { CoreContent } from 'utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import ScrollTop from '@/components/ScrollTop'
import { Icon } from '@/components/icons/Icon'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content

  return (
    <>
      <ScrollTop />
      <article>
        <div>
          <header>
            <div className="space-y-2 border-b border-gray-200 py-10 dark:border-gray-700">
              <Link
                href="/blog"
                className="group mb-8 inline-flex items-center text-sm text-gray-500 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" /> Writing
              </Link>
              <div>
                <h1 className="text-2xl leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
                  {title}
                </h1>
              </div>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8 text-[15px] leading-relaxed">
                {children}
              </div>
            </div>

            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && prev.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && next.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
