import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="hover:text-primary-600 dark:hover:text-primary-400 font-sm mr-3 text-sm text-gray-500 uppercase dark:text-gray-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
