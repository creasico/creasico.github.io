import type { UserModule } from './types'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

import App from './app.vue'

import './style.css'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    scrollBehavior() {
      return { top: 0 }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }),
    ).forEach(i => i.install?.(ctx))
  },
)
