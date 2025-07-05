import { Icon } from '../icons/Icon'
import { KBarButton } from '../kbar/KBarButton'

const SearchButton = () => {
  return (
    <KBarButton aria-label="Search">
      {/* Mobile: icon-only */}
      <div className="flex items-center justify-center rounded-full sm:hidden">
        <Icon size={24} name="Search" />
      </div>

      {/* Desktop: full search label + shortcut */}
      <div className="hidden min-w-[240px] cursor-pointer items-center justify-between rounded-full bg-gray-200 px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-black sm:flex dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
        <div className="flex items-center gap-2">
          <Icon size={19} name="Search" />
          <span className="truncate">Search</span>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-black dark:bg-neutral-100 dark:text-black">
          <span>CtrlK</span>
        </div>
      </div>
    </KBarButton>
  )
}

export default SearchButton
