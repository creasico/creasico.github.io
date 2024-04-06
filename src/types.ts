import 'vue-router'
import type { ViteSSGContext } from 'vite-ssg'
import type { Frontmatter } from 'unplugin-vue-markdown/types'

export type UserModule = (ctx: ViteSSGContext) => void

export type AppLocale = 'id' | 'en'

export interface PageFrontmatter extends Frontmatter {
  container?: 'wide' | 'narrow'
  image?: string
  layout?: string
  locale?: AppLocale
  showCTA?: boolean
}
