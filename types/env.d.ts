interface ImportMetaEnv extends Record<string, string> {
  /** 项目部署时的基础地址 */
  readonly VITE_BASE_URL: string

  /** 项目名称 */
  readonly VITE_APP_NAME: string

  /** 路由模式: history | hash */
  readonly VITE_ROUTER_MODE: 'history' | 'hash'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
