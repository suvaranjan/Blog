import * as Icons from './AllSvg'
export type IconType = keyof typeof Icons

type IconProps = {
  name: IconType
  size?: number | string
  className?: string
}

export const Icon = ({ name, size = 24, className = '', ...props }: IconProps) => {
  const SvgIcon = Icons[name]
  return <SvgIcon className={className} width={size} height={size} {...props} />
}
