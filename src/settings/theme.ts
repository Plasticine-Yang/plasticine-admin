import themeJson from './theme.json'

const defaultThemeSetting: Theme.Setting = {
  darkMode: false,
  themeColor: '#1890ff',
}

// 没有配置文件的时候就使用默认配置
export const themeSetting = (themeJson as Theme.Setting) || defaultThemeSetting
