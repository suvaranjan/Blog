import {
  KBarPortal,
  KBarSearch,
  KBarAnimator,
  KBarPositioner,
  KBarResults,
  useMatches,
  Action,
  useRegisterActions,
} from 'kbar'

export const KBarModal = ({ actions, isLoading }: { actions: Action[]; isLoading: boolean }) => {
  useRegisterActions(actions, [actions])

  return (
    <KBarPortal>
      <KBarPositioner className="z-50 bg-black/20 p-2 backdrop-blur-sm dark:bg-black/40">
        <KBarAnimator className="w-full max-w-xl overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center border-b border-neutral-100 px-4 py-3 dark:border-neutral-800">
            <span className="mr-3 text-neutral-400 dark:text-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <KBarSearch
              className="flex-1 border-none bg-transparent text-sm text-neutral-800 placeholder-neutral-400 focus:ring-0 focus:outline-none dark:text-neutral-200 dark:placeholder-neutral-600"
              placeholder="Search commands..."
            />

            <span className="rounded border border-neutral-200 px-2 py-1 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
              ESC
            </span>
          </div>

          {!isLoading ? <RenderResults /> : <LoadingIndicator />}
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

const LoadingIndicator = () => (
  <div className="px-4 py-6 text-center">
    <span className="text-sm text-neutral-500 dark:text-neutral-400">Loading...</span>
  </div>
)

const RenderResults = () => {
  const { results } = useMatches()

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === 'string' ? (
              <div className="px-4 pt-3 pb-1 text-xs tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                {item}
              </div>
            ) : (
              <div
                className={`mt-1 flex cursor-pointer items-center justify-between px-4 py-3 ${active ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-transparent'}`}
              >
                <div className="flex items-center">
                  {item.icon && (
                    <div
                      className={`mr-3 ${active ? 'text-neutral-600 dark:text-neutral-300' : 'text-neutral-400 dark:text-neutral-500'}`}
                    >
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <div
                      className={`text-sm ${active ? 'text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}
                    >
                      {item.name}
                    </div>
                    {item.subtitle && (
                      <div
                        className={`text-xs ${active ? 'text-neutral-500 dark:text-neutral-400' : 'text-neutral-400 dark:text-neutral-500'}`}
                      >
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
                {item.shortcut?.length && (
                  <div className="flex gap-1">
                    {item.shortcut.map((sc) => (
                      <kbd
                        key={sc}
                        className={`text-xs ${active ? 'bg-neutral-200 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400' : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500'} rounded px-2 py-1`}
                      >
                        {sc}
                      </kbd>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      />
    )
  }

  return (
    <div className="px-4 py-6 text-center">
      <span className="text-sm text-neutral-500 dark:text-neutral-400">No results found</span>
    </div>
  )
}
