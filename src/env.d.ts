/// <reference lib="DOM" />
/// <reference types="vitest" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="@intlify/unplugin-vue-i18n/messages" />

declare interface Window {
  // extend the window
}

interface ImportMetaEnv {
  VITE_GTM_ID: string
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
