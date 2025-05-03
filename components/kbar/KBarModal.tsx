// noinspection TypeScriptMissingConfigOption

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
import { Icon, IconName } from '../MyIcons'

export const KBarModal = ({ actions, isLoading }: { actions: Action[]; isLoading: boolean }) => {
  useRegisterActions(actions, [actions])

  return (
    <KBarPortal>
      <KBarPositioner className="z-50 bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50">
        <KBarAnimator className="w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-neutral-900">
            <div className="flex items-center space-x-4 p-4">
              <span className="block w-5">
                <svg
                  className="text-gray-400 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <KBarSearch className="h-8 w-full border-none bg-transparent pl-0 text-gray-600 placeholder-gray-400 focus:ring-0 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500" />
              <kbd className="inline-block rounded border border-gray-400 px-1.5 align-middle text-xs leading-4 font-medium tracking-wide whitespace-nowrap text-gray-400">
                ESC
              </kbd>
            </div>
            {!isLoading && <RenderResults />}
            {isLoading && (
              <div className="block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
                Loading...
              </div>
            )}
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

const RenderResults = () => {
  const { results } = useMatches()

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === 'string' ? (
              <div className="text-primary-600 dark:text-primary-400 block px-4 pt-5 pb-2 text-xs font-semibold uppercase dark:border-neutral-800">
                {item}
              </div>
            ) : (
              <div
                className={`flex cursor-pointer justify-between px-4 py-2 ${
                  active
                    ? 'bg-primary-600 dark:bg-primary-800 text-gray-100'
                    : 'bg-transparent text-gray-700 dark:text-gray-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.icon && typeof item.icon === 'string' ? (
                    <Icon
                      name={item.icon as IconName}
                      w={20}
                      h={20}
                      className={`${active ? 'text-white' : 'text-gray-400 dark:text-gray-300'}`}
                    />
                  ) : null}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {item.shortcut?.length ? (
                  <div aria-hidden className="flex flex-row items-center gap-x-2">
                    {item.shortcut.map((sc) => (
                      <kbd
                        key={sc}
                        className={`flex h-6 min-w-[1.5rem] items-center justify-center rounded-md bg-gray-100 px-1 text-xs font-semibold text-gray-600 ${
                          active
                            ? 'bg-white text-gray-900'
                            : 'dark:bg-neutral-800 dark:text-gray-400'
                        }`}
                      >
                        {sc}
                      </kbd>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}
      />
    )
  }

  return (
    <div className="block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
      No results for your search...
    </div>
  )
}
