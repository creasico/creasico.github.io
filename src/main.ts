import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

import 'virtual:windi-devtools'

import 'virtual:windi.css'
import './style.css'
import App from './app.vue'
import type { UserModule } from './types'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
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
