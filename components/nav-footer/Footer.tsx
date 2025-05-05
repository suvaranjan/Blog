import CustomLink from '../Link'

// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-6 text-center">
      <div className="flex flex-col items-center justify-center">
        <SocialLinks />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {' '}
          © {currentYear} Suvaranjan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function SocialLinks() {
  return (
    <div className="mt-5 flex items-center gap-2 py-3 text-sm text-gray-500 dark:text-gray-400">
      <CustomLink
        href="https://github.com/suvaranjan"
        className="hover:text-primary-500 dark:hover:text-gray-300"
      >
        GitHub
      </CustomLink>
      <span className="text-gray-400 dark:text-gray-600">/</span>
      <CustomLink
        href="mailto:suvaranjan01@example.com"
        className="hover:text-primary-500 dark:hover:text-gray-300"
      >
        Email
      </CustomLink>
      <span className="text-gray-400 dark:text-gray-600">/</span>
      <CustomLink
        href="https://twitter.com/suvaranjan000"
        className="hover:text-primary-500 dark:hover:text-gray-300"
      >
        Twitter
      </CustomLink>
    </div>
  )
}
