import { KBarButton } from '../kbar/KBarButton'

const SearchButton = () => {
  return (
    <KBarButton aria-label="Search">
      {/* Mobile view: Only icon */}
      <div className="text-gray-500 hover:text-gray-900 sm:hidden dark:text-gray-400 dark:hover:text-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </div>

      {/* Desktop view: Full button */}
      <div className="hidden cursor-pointer items-center rounded-md bg-neutral-100 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-black sm:flex sm:w-30 md:w-48 lg:w-64 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
        <span className="flex-1 truncate text-left">Search</span>
        <div className="ml-2 flex items-center gap-0.5 rounded bg-neutral-300 px-1.5 py-0.5 text-xs text-black dark:bg-neutral-700 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="ml-0.5">K</span>
        </div>
      </div>
    </KBarButton>
  )
}

export default SearchButton
