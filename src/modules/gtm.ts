import { createGtm, useGtm } from '@gtm-support/vue-gtm'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app, isClient, router }) => {
  if (!isClient || !import.meta.env.VITE_GTM_ID)
    return

  const gtm = createGtm({
    id: import.meta.env.VITE_GTM_ID,
    vueRouter: router,
  })

  // console.log(routes)

  router.afterEach((to) => {
    const tag = useGtm()

    // console.log(to)
    tag?.trackView(to.name as string, to.fullPath)
  })

  app.use(gtm)
}
