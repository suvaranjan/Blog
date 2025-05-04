import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import CustomLink from '@/components/Link'

const MAX_DISPLAY = 3

export default async function HomePage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-10 md:px-0">
      <HeroSection />
      <RecentPosts posts={posts} />
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="mx-auto mt-[15vh] mb-5 w-full md:mt-[15vh]">
      <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span>Hi, I'm</span>
          <CustomLink
            href="https://suvaranjan.vercel.app/"
            className="hover:bg-nneutral-200 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-800 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
          >
            @suvaranjan
          </CustomLink>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          My brain likes to throw cool ideas at me... and then forget them five minutes later. This
          little archive is where I try to trap those cool thoughts before they vanish forever.
        </p>
      </div>
      {/* <SocialLinks /> */}
    </div>
  )
}

function RecentPosts({ posts }) {
  return (
    <section className="w-full py-5">
      <h2 className="mb-8 text-sm tracking-widest text-gray-700 uppercase dark:text-gray-400">
        Latest Blog
      </h2>

      <div className="grid gap-6">
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <article key={post.slug} className="group relative">
            <CustomLink href={`/blog/${post.slug}`} className="relative block rounded-lg">
              <div className="flex flex-col">
                <h3 className="text-lg text-gray-900 dark:text-white">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {post.summary.split(' ').slice(0, 10).join(' ')}...
                </p>
              </div>
            </CustomLink>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <CustomLink
          href="/blog"
          className="text-sm tracking-wider text-gray-700 dark:text-gray-400"
        >
          Browse all Blog
        </CustomLink>
      </div>
    </section>
  )
}

export function SocialLinks() {
  return (
    <div className="mt-5 flex items-center gap-2 py-3 text-sm text-gray-500 dark:text-gray-400">
      <CustomLink
        href="https://github.com/yourusername"
        className="hover:text-gray-700 hover:underline dark:hover:text-gray-300"
      >
        GitHub
      </CustomLink>
      <span className="text-gray-400 dark:text-gray-600">/</span>
      <CustomLink
        href="mailto:youremail@example.com"
        className="hover:text-gray-700 hover:underline dark:hover:text-gray-300"
      >
        Email
      </CustomLink>
      <span className="text-gray-400 dark:text-gray-600">/</span>
      <CustomLink
        href="https://twitter.com/yourusername"
        className="hover:text-gray-700 hover:underline dark:hover:text-gray-300"
      >
        Twitter
      </CustomLink>
    </div>
  )
}
