import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

/**
 * @description 按照一定比例混合两种颜色
 * @param color1 -- 颜色 1
 * @param color2 -- 颜色 2
 * @param ratio -- 颜色 2 的比重
 */
export function mixColor(color1: string, color2: string, ratio: number) {
  return colord(color1).mix(color2, ratio).toHex()
}
