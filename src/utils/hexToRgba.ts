export function hexToRgba(hex: string, alpha: number) {
  // 将十六进制颜色值转换为 RGB 值
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // 如果 alpha 值未定义，则默认为 1
  if (alpha === undefined) {
    alpha = 1
  }

  // 返回 RGBA 颜色值
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
