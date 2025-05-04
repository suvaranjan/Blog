import { Github, Linkedin, Mail, X, Home, Blog, Book, MenuOpen, MenuClose } from './index' // Importing the SVG components

// === Social Icon Types ===
export type SocialIconType = 'github' | 'linkedin' | 'mail' | 'x'

// === Normal Icon Types ===
export type NormalIconType = 'home' | 'blog' | 'menuopen' | 'menuclose'

// === Icons Mapping ===
export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  x: X,
} as const

export const normalIcons = {
  home: Home,
  blog: Blog,
  book: Book,
  menuopen: MenuOpen,
  menuclose: MenuClose,
} as const

// === Social Icon Component Props ===
type SocialIconProps = {
  kind: SocialIconType // Social icon type (github, linkedin, mail, x)
  href: string | undefined
  size?: number
}

export const SocialIcon = ({ kind, href, size = 6 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:[^@]+@[^.]+\..+$/.test(href))) {
    return null
  }

  const SvgIcon = socialIcons[kind] // Select the correct SVG component for social icons

  return (
    <a
      href={href}
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{kind}</span>
      <SvgIcon
        width={size}
        height={size}
        className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200"
      />
    </a>
  )
}

// === Normal Icon Component Props ===
type NormalIconProps = {
  name: NormalIconType
  size?: number | string
  className?: string
}

export const NormalIcon = ({ name, size = 24, className = '', ...props }: NormalIconProps) => {
  const SvgIcon = normalIcons[name] // Select the correct SVG component for normal icons

  return <SvgIcon className={className} width={size} height={size} {...props} />
}
