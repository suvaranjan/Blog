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
import { Icon, IconType } from '../icons/Icon'

export const KBarModal = ({ actions, isLoading }: { actions: Action[]; isLoading: boolean }) => {
  useRegisterActions(actions, [actions])

  return (
    <KBarPortal>
      <KBarPositioner className="z-50 bg-neutral-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50">
        <KBarAnimator className="w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center space-x-4 p-4">
              <span className="block w-5">
                <Icon name="Search" size={20} className="text-neutral-400 dark:text-neutral-500" />
              </span>
              <KBarSearch className="h-8 w-full border-none bg-transparent pl-0 text-neutral-600 placeholder-neutral-400 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-neutral-500" />
              <kbd className="inline-block rounded border border-neutral-400 px-1.5 align-middle text-xs leading-4 font-medium tracking-wide whitespace-nowrap text-neutral-400">
                ESC
              </kbd>
            </div>
            {!isLoading && <RenderResults />}
            {isLoading && (
              <div className="block border-t border-neutral-100 px-4 py-8 text-center text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
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
              <div className="block px-4 pt-5 pb-2 text-xs font-semibold uppercase dark:border-neutral-800">
                {item}
              </div>
            ) : (
              <div
                className={`flex cursor-pointer justify-between px-4 py-2 ${
                  active
                    ? 'bg-neutral-200 text-black dark:bg-white'
                    : 'bg-transparent text-neutral-700 dark:text-neutral-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.icon && typeof item.icon === 'string' ? (
                    <Icon
                      name={item.icon as IconType}
                      size={20}
                      // className={`${active ? '' : ''}`}
                    />
                  ) : null}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {item.shortcut?.length ? (
                  <div aria-hidden className="flex flex-row items-center gap-x-2">
                    {item.shortcut.map((sc) => (
                      <kbd
                        key={sc}
                        className={`flex h-6 min-w-[1.5rem] items-center justify-center rounded-md bg-neutral-100 px-1 text-xs font-semibold text-neutral-600 ${
                          active
                            ? 'bg-white text-neutral-900'
                            : 'dark:bg-neutral-800 dark:text-neutral-400'
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
    <div className="block border-t border-neutral-100 px-4 py-8 text-center text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
      No results for your search...
    </div>
  )
}
