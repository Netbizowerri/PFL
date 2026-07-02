/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRIVYR_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
