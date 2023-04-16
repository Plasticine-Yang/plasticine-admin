export interface UniverseResponse<T = any> {
  code: number
  message: string
  data?: T
}
