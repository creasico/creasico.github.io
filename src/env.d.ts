/// <reference lib="DOM" />
/// <reference types="@intlify/unplugin-vue-i18n/messages" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vitest" />
/// <reference types="vue/ref-macros" />

interface ImportMetaEnv {
  VITE_GTM_ID: string
  VITE_PROJECT_ID: string
}

declare interface Window {
  // extend the window
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
