import TOCInline from './TOCInline'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from '../Link'
import TableWrapper from './TableWrapper'
import Pre from './Pre'
import RoughHighlight from './RoughHighlight'

export const components: MDXComponents = {
  Image,
  TOCInline,
  RoughHighlight,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
}
