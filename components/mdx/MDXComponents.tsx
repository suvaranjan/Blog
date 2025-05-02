import TOCInline from './TOCInline'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from '../Link'
import TableWrapper from './TableWrapper'
import Pre from './Pre'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
}
