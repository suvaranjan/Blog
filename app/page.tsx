import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, Blog } from 'contentlayer/generated'
import CustomLink from '@/components/Link'
import { formatDate } from 'utils/formatDate'
import Tag from '@/components/Tag'
import { CoreContent } from 'utils/contentlayer'

const MAX_DISPLAY = 3

export default async function HomePage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <div className="flex min-h-screen flex-col pb-10">
      <HeroSection />
      <RecentPosts posts={posts} />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="mt-[15vh] mb-5 border-b border-gray-200 pb-10 md:mt-[15vh] dark:border-gray-700">
      <div className="space-y-4 text-lg leading-relaxed">
        <div className="flex items-center gap-2">
          <span className="font-medium">Hi, I'm Suvaranjan..</span>
          {/* <CustomLink
            href="https://suvaranjan.vercel.app/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
          >
            @suvaranjan
          </CustomLink> */}
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          My brain likes to throw cool ideas at me... and then forget them five minutes later. This
          little archive is where I try to trap those cool thoughts before they vanish forever.
        </p>
      </div>
    </div>
  )
}

function RecentPosts({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <section className="w-full py-5">
      <h2 className="mb-8 text-sm font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
        Latest Writting
      </h2>

      <ul className="space-y-10">
        {posts.slice(0, MAX_DISPLAY).map(({ slug, date, title, summary, tags }) => (
          <li key={slug} className="py-4">
            <article className="space-y-2">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </dl>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="hover:text-primary-600 dark:hover:text-primary-400 text-xl font-medium text-gray-800 dark:text-gray-200">
                    <CustomLink href={`/blog/${slug}`}>{title}</CustomLink>
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                </div>
                <p className="prose max-w-none text-gray-700 dark:text-gray-300">{summary}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <CustomLink
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Browse all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </CustomLink>
      </div>
    </section>
  )
}
