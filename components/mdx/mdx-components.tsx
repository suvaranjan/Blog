import React from 'react'
import * as _jsx_runtime from 'react/jsx-runtime'
import ReactDOM from 'react-dom'
import type { MDXComponents } from 'mdx/types'

export interface MDXLayoutRendererProps {
  code: string
  components?: MDXComponents
  [key: string]: unknown
}

type MDXComponentType = React.ComponentType<
  {
    components?: MDXComponents
  } & Record<string, unknown>
>

const getMDXComponent = (code: string, globals: Record<string, unknown> = {}): MDXComponentType => {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals }
  const fn = new Function(...Object.keys(scope), code)
  return fn(...Object.values(scope)).default as MDXComponentType
}

// Copy of https://github.com/contentlayerdev/contentlayer/blob/main/packages/next-contentlayer/src/hooks/useMDXComponent.ts
export const useMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
): MDXComponentType => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals])
}

export const MDXLayoutRenderer = ({ code, components, ...rest }: MDXLayoutRendererProps) => {
  const Mdx = useMDXComponent(code)

  return <Mdx components={components} {...rest} />
}
