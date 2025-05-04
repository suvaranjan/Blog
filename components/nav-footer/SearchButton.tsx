import { KBarButton } from '../kbar/KBarButton'

const SearchButton = ({ size }: { size: number }) => {
  return (
    <KBarButton aria-label="Search">
      {/* Mobile view: Only icon */}
      <div className="sm:hidden">
        <svg
          width={size}
          height={size}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      {/* Desktop view: Full button */}
      <div className="hidden cursor-pointer items-center rounded-md bg-neutral-100 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-black sm:flex sm:w-30 md:w-48 lg:w-64 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white">
        <span className="flex-1 truncate text-left">Search</span>
        <div className="ml-2 flex items-center gap-0.5 rounded bg-neutral-200 px-1.5 py-0.5 text-xs text-black dark:bg-neutral-700 dark:text-white">
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
