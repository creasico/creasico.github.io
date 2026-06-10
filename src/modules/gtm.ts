import type { UserModule } from '~/types'
import { createGtm } from '@gtm-support/vue-gtm'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app, router }) => {
  const gtmId = import.meta.env.VITE_GTM_ID || ''

  if (import.meta.env.SSR || gtmId.length === 0)
    return

  const gtm = createGtm({
    id: gtmId,
    vueRouter: router,
    debug: import.meta.env.DEV,
  })

  app.use(gtm)
}
