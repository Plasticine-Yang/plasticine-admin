import themeJson from './theme.json'

const defaultThemeSetting: Theme.Setting = {
  themeColor: '#24283b',
}

// 没有配置文件的时候就使用默认配置
export const themeSetting = (themeJson as Theme.Setting) || defaultThemeSetting
