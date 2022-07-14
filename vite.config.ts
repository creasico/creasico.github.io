/// <reference types="vitest" />
/// <reference types="vite-ssg" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/vite-plugin-vue-i18n'
import sitemap from 'vite-ssg-sitemap'
import windicss from 'vite-plugin-windicss'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import markdown, { meta } from 'vite-plugin-md'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import mdAnchor from 'markdown-it-anchor'
import mdLinkAttr from 'markdown-it-link-attributes'
import mdPrism from 'markdown-it-prism'
import type { RouteRecord } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      // https://github.com/jbaubree/vite-ssg-sitemap
      sitemap()
    },
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    globals: true,
    deps: {
      inline: ['@vue', 'vue-demi'],
    },
  },

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

      frontmatterDefaults: {
        container: 'wide',
        locale: 'id',
        layout: 'pages',
      },

      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        quotes: '""\'\'',
      },

      builders: [
        meta({
          routeProps: ['layout', 'locale', 'container'],
        }),
      ],

      markdownItSetup(md) {
        md.use(mdPrism)

        md.use(mdAnchor, {
          permalink: true,
          // permalinkBefore: true,
          permalinkSymbol: '🔗',
          permalinkSpace: false,
          permalinkAttrs: () => ({ 'aria-hidden': true }),
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
        console.log(route) // eslint-disable-line no-console
        return route
      },
    }),

    windicss(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    layouts(),

    autoImport({
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
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
      includeAssets: ['favicon.ico', 'favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Creasi.CO',
        short_name: 'Creasi.CO',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
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
})
