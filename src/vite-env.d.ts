/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly LYNNE_AUTHOR: string;
  readonly LYNNE_GITHUB: string;
  readonly LYNNE_JUEJIN: string;
  readonly LYNNE_AVATAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
