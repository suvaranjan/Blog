/* eslint-disable prettier/prettier */
// toc.tsx
'use client'

import { VFile } from 'vfile'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { Heading } from 'mdast'
import GithubSlugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import React from 'react'

export type TocItem = {
  value: string
  url: string
  depth: number
}

export type Toc = TocItem[]

export interface TOCInlineProps {
  toc: Toc
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
  collapse?: boolean
  ulClassName?: string
  liClassName?: string
}

export interface NestedTocItem extends TocItem {
  children?: NestedTocItem[]
}

// Remark plugin to extract headings from Markdown
export function remarkTocHeadings() {
  const slugger = new GithubSlugger()
  return (tree: Parent, file: VFile) => {
    const toc: Toc = []
    visit(tree, 'heading', (node: Heading) => {
      const textContent = toString(node)
      toc.push({
        value: textContent,
        url: '#' + slugger.slug(textContent),
        depth: node.depth,
      })
    })
    file.data.toc = toc
  }
}

// Run the plugin on a markdown string and get the TOC
export async function extractTocHeadings(markdown: string): Promise<Toc> {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)
  // @ts-ignore
  return vfile.data.toc
}

// Helper to nest TOC items
const createNestedList = (items: TocItem[]): NestedTocItem[] => {
  const nestedList: NestedTocItem[] = []
  const stack: NestedTocItem[] = []

  items.forEach((item) => {
    const newItem: NestedTocItem = { ...item }

    while (stack.length > 0 && stack[stack.length - 1].depth >= newItem.depth) {
      stack.pop()
    }

    const parent = stack.length > 0 ? stack[stack.length - 1] : null

    if (parent) {
      parent.children = parent.children || []
      parent.children.push(newItem)
    } else {
      nestedList.push(newItem)
    }

    stack.push(newItem)
  })

  return nestedList
}

// React component to render the TOC
const TOCInline = ({
  toc,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
  collapse = false,
  ulClassName = '',
  liClassName = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const nestedList = createNestedList(filteredToc)

  const createList = (items: NestedTocItem[] | undefined): React.ReactNode => {
    if (!items || items.length === 0) return null

    return (
      <ul className={ulClassName}>
        {items.map((item, index) => (
          <li key={index} className={liClassName}>
            <a href={item.url}>{item.value}</a>
            {createList(item.children)}
          </li>
        ))}
      </ul>
    )
  }

  return asDisclosure ? (
    <details open={!collapse}>
      <summary className="ml-6 pt-2 pb-2 text-xl font-bold">Table of Contents</summary>
      <div className="ml-6">{createList(nestedList)}</div>
    </details>
  ) : (
    <>{createList(nestedList)}</>
  )
}

export default TOCInline
