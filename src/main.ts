import { ViteSSG } from 'vite-ssg'

import autoRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'

import 'virtual:windi-devtools'

import 'virtual:windi.css'
import './style.css'
import App from './app.vue'
import type { UserModule } from './types'

// const messages = Object.fromEntries(Object.entries(
//   import.meta.glob<{ default: any }>('./../locales/*.y(a)?ml', { eager: true }),
// ).map(([key, value]) => {
//   const yaml = key.endsWith('.yaml')
//   return [key.slice(11, yaml ? -5 : -4), value.default]
// }))
// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(autoRoutes),
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      return { top: 0 }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })).forEach(i =>
      i.install?.(ctx),
    )
  },
)
