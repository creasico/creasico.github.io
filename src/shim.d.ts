import type { FirebaseOptions } from 'firebase/app'
import { AppLocale } from './types'

export {}

declare global {
  const FIREBASE_CONFIG: FirebaseOptions
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    locale?: AppLocale
    title?: string
    description?: string
  }
}
