import type { BasicColorSchema, RemovableRef } from '@vueuse/core'

/**
 * A `console.log(...args)` wrapper that should only work while development.
 */
export function logger(...args: any) {
  if (import.meta.env.DEV)
    console.log.apply(null, args) // eslint-disable-line no-console
}

/**
 * Global application preference.
 */
interface SitePreference {
  locale: string
  theme: BasicColorSchema
  menuOpened: boolean
}

/**
 * State of global application preference.
 */
export const sitePreference: RemovableRef<SitePreference> = useSessionStorage<SitePreference>('site-preference', {
  locale: (typeof document !== 'undefined') ? document.documentElement.lang : 'id',
  theme: 'auto',
  menuOpened: false,
})
