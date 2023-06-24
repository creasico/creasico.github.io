import { createGtm } from '@gtm-support/vue-gtm'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app, isClient, router }) => {
  if (!isClient && !import.meta.env.VITE_GTM_ID)
    return

  const gtm = createGtm({
    id: import.meta.env.VITE_GTM_ID,
    vueRouter: router,
    debug: import.meta.env.DEV,
  })

  app.use(gtm)
}
