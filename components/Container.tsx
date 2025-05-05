import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return <section className="mx-auto max-w-3xl px-6 sm:px-4 xl:px-0">{children}</section>
}
