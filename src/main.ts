import { ViteSSG } from 'vite-ssg'

import autoRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'

import './assets/css/tailwind.css'
import App from './app.vue'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(autoRoutes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i =>
      i.install?.(ctx),
    )
  },
)
