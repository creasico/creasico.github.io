/// <reference types="vite/client" />

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
