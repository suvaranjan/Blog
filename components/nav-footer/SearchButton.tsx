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
      <div className="hidden min-w-[240px] cursor-pointer items-center justify-between rounded-md bg-gray-200 px-1.5 py-1.5 text-sm text-gray-700 hover:bg-gray-300 hover:text-black sm:flex dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
        <div className="flex items-center gap-2">
          {/* <Icon size={19} name="Search"  /> */}
          <span className="ml-2 truncate">Search</span>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black dark:bg-neutral-100 dark:text-black">
            <span>Ctrl</span>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black dark:bg-neutral-100 dark:text-black">
            <span>K</span>
          </div>
        </div>
      </div>
    </KBarButton>
  )
}

export default SearchButton
