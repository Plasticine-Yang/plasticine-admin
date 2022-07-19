import { EStorageKey } from '@/enum'

export function getThemeColor() {
  return localStorage.getItem(EStorageKey.themeColor)
}
