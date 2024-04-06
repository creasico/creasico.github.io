import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import sitemap from 'vite-ssg-sitemap'
import windicss from 'vite-plugin-windicss'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import markdown from 'unplugin-vue-markdown/vite'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import router from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-layouts'
import mdAnchor from 'markdown-it-anchor'
import mdLinkAttr from 'markdown-it-link-attributes'
import mdPrism from 'markdown-it-prism'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', [])
  const FIREBASE_CONFIG = {
    projetId: env.PROJECT_ID,
    appId: env.FIREBASE_APP_ID,
    apiKey: env.FIREBASE_API_KEY,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
    storageBucket: `${env.PROJECT_ID}.appspot.com`,
    authDomain: `${env.PROJECT_ID}.firebaseapp.com`,
  }

  // const routeMeta: Record<string, any> = {
  //   locale: 'id',
  //   layout: 'default',
  // }

  return {
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },

    // optimizeDeps: {
    //   include: [
    //     '@vueuse/core',
    //     '@vueuse/head',
    //     'vue-i18n',
    //     'vue-router',
    //     'vue',
    //   ],
    //   exclude: [
    //     'vue-demi',
    //   ],
    // },

    define: {
      FIREBASE_CONFIG: JSON.stringify(FIREBASE_CONFIG),
    },

    /**
     * @see https://github.com/antfu/vite-ssg
     */
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      onFinished() {
        /**
         * @see https://github.com/jbaubree/vite-ssg-sitemap
         */
        sitemap({
          hostname: env.BASE_URL || 'http://localhost',
          exclude: ['/index', '/404'],
          robots: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/assets', '/images', '/CNAME', '/.nojekyll'] },
            { userAgent: 'Googlebot-Image', disallow: '/' },
          ],
        })
      },
    },

    /**
     * @see https://github.com/vitest-dev/vitest
     */
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'happy-dom',
      globals: true,
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },

    ssr: {
      /**
       * TODO: workaround until they support native ESM
       * @link https://github.com/antfu/vite-ssg/issues/286#issuecomment-1285885878
       */
      noExternal: [/vue-i18n/],
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      /**
       * @see https://github.com/JohnCampionJr/vite-plugin-vue-layouts
       */
      layouts(),

      /**
       * @see https://github.com/antfu/vite-plugin-windicss
       */
      windicss({
        safelist: 'prose prose-sm m-auto text-left',
        preflight: {
          enableAll: true,
        },
      }),

      /**
       * @see https://github.com/posva/unplugin-vue-router
       */
      router({
        dts: 'src/typed-router.d.ts',
        extensions: ['.vue', '.md'],
      }),

      /**
       * @see https://github.com/antfu/unplugin-auto-import
       */
      autoImport({
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/store',
        ],
        imports: [
          '@vueuse/head',
          '@vueuse/core',
          'vue-i18n',
          VueRouterAutoImports,
          {
            // add any other imports you were relying on
            'vue-router/auto': ['useLink'],
          },
          'vue/macros',
          'vue',
        ],
        vueTemplate: true,
      }),

      /**
       * @see https://github.com/antfu/unplugin-vue-components
       */
      components({
        dts: 'src/components.d.ts',
        directoryAsNamespace: true,
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      /**
       * @see https://github.com/antfu/vite-plugin-md
       */
      markdown({
        wrapperComponent: 'site-content',
        wrapperClasses: 'prose max-w-none',
        headEnabled: true,
        excerpt: true,

        /**
         * @see https://markdown-it.github.io/markdown-it/
         */
        markdownItOptions: {
          html: true,
          typographer: true,
        },

        markdownItSetup(md) {
          md.use(mdPrism)

          md.use(mdAnchor, {
            permalink: mdAnchor.permalink.ariaHidden({
              renderAttrs: () => ({ 'aria-hidden': 'true' }),
            }),
          })

          md.use(mdLinkAttr, {
            matcher: (link: string) => /^(https?:\/\/|\/\/)/.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      /**
       * @see https://github.com/antfu/vite-plugin-pwa
       */
      pwa({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'assets/favicon.svg', 'assets/safari-pinned-tab.svg'],
        manifest: {
          name: 'Creasi.CO',
          short_name: 'Creasi.CO',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/assets/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/assets/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/assets/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
      i18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, 'locales/**')],
      }),
    ],
  }
})
