/// <reference types="vitest" />
/// <reference types="vite-ssg" />

import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vueI18n as i18n } from '@intlify/vite-plugin-vue-i18n'
import sitemap from 'vite-ssg-sitemap'
import windicss from 'vite-plugin-windicss'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import markdown from 'vite-plugin-md'
import meta from '@yankeeinlondon/meta-builder'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import mdAnchor from 'markdown-it-anchor'
import mdLinkAttr from 'markdown-it-link-attributes'
import mdPrism from 'markdown-it-prism'
import type { RouteRecord } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', ['FIREBASE', 'PROJECT'])
  const FIREBASE_CONFIG = {
    projetId: env.PROJECT_ID,
    appId: env.FIREBASE_APP_ID,
    apiKey: env.FIREBASE_API_KEY,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
    storageBucket: `${env.PROJECT_ID}.appspot.com`,
    authDomain: `${env.PROJECT_ID}.firebaseapp.com`,
  }

  const routeMeta: Record<string, any> = {
    locale: 'id',
    layout: 'default',
  }

  return {
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },

    optimizeDeps: {
      include: [
        '@vueuse/core',
        '@vueuse/head',
        'vue-i18n',
        'vue-router',
        'vue',
      ],
      exclude: [
        'vue-demi',
      ],
    },

    define: {
      FIREBASE_CONFIG: JSON.stringify(FIREBASE_CONFIG),
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      onFinished() {
        // https://github.com/jbaubree/vite-ssg-sitemap
        sitemap({
          hostname: process.env.BASE_URL || 'http://localhost',
          exclude: ['/index', '/404'],
          robots: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/assets', '/images', '/CNAME', '/.nojekyll'] },
            { userAgent: 'Googlebot-Image', disallow: '/' },
          ],
        })
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'happy-dom',
      globals: true,
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },

    // ssr: {
    //   // TODO: workaround until they support native ESM
    //   noExternal: ['workbox-window', /vue-i18n/],
    // },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true,
      }),

      // https://github.com/antfu/vite-plugin-md
      markdown({
        wrapperComponent: 'page-content',
        wrapperClasses: 'prose max-w-none',
        // headEnabled: true,
        excerpt: true,
        style: {
          baseStyle: 'github',
        },

        frontmatterDefaults: routeMeta,

        // see: https://markdown-it.github.io/markdown-it/
        markdownItOptions: {
          quotes: '""\'\'',
        },

        builders: [
          meta({
            routeProps: ['layout', 'locale', 'container', 'title', 'description'],
          }),
        ],

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

      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        extensions: ['vue', 'md'],
        extendRoute: (route: RouteRecord) => {
          route.meta = Object.assign({}, routeMeta, route.meta)
          // console.log(route) // eslint-disable-line no-console
          return route
        },
      }),

      windicss(),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      layouts(),

      // https://github.com/antfu/unplugin-auto-import
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
          'vue-router',
          'vue/macros',
          'vue',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/vite-plugin-pwa
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
