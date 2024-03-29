import 'vue-router'
import type { ViteSSGContext } from 'vite-ssg'
import type { Frontmatter } from 'vite-plugin-md'

export type UserModule = (ctx: ViteSSGContext) => void

export type AppLocale = 'id' | 'en'

export interface UserFrontmatter extends Frontmatter {
  container?: 'wide' | 'narrow'
  layout?: string
  locale?: AppLocale
  showCTA?: boolean
}
