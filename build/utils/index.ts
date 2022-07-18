import { resolve } from 'path'

// 项目根目录
const ROOT_PATH = process.cwd()

/**
 * @description 以项目根目录为基础路径进行路径拼接
 */
export const resolvePath = (...pathSegments: string[]): string => {
  return resolve(ROOT_PATH, ...pathSegments)
}

export const srcPath = resolvePath('src')
export const rootPath = ROOT_PATH
