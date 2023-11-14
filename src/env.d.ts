/// <reference lib="DOM" />
/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vue/ref-macros" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="@intlify/unplugin-vue-i18n/messages" />

interface ImportMetaEnv {
  VITE_GTM_ID: string
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
