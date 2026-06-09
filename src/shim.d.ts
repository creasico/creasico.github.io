import type { FirebaseOptions } from 'firebase/app'
import type { RouterLinkProps } from 'vue-router'
import type { AppLocale } from './types'

export {}

declare global {
  const FIREBASE_CONFIG: FirebaseOptions

  interface SiteLinkProps extends RouterLinkProps {
    to: string
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    locale?: AppLocale
    title?: string
    description?: string
  }
}
