import { KBarButton } from '../kbar/KBarButton'

const SearchButton = () => {
  return (
    <KBarButton aria-label="Search">
      {/* Mobile: icon-only */}
      <div className="flex items-center justify-center rounded-full sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </div>

      {/* Desktop: full search label + shortcut */}
      <div className="hidden min-w-[240px] cursor-pointer items-center justify-between rounded-full bg-gray-200 px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-black sm:flex dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
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
