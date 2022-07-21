import { onUnmounted, watch } from 'vue'
import { useThemeStore } from '../modules'

export default function subscribeThemeStore() {
  const theme = useThemeStore()
  const { addDarkClass, removeDarkClass } = handleDarkMode()

  // 监听深色模式 -- watch 返回的函数可用于停止监听
  const stopDarkMode = watch(
    () => theme.darkMode,
    (newVal) => {
      if (newVal) {
        // darkMode 为 true --> 添加 dark 类名
        addDarkClass()
      } else {
        removeDarkClass()
      }
    },
  )

  // unmounted 的时候要将所有 watcher 清除
  onUnmounted(() => {
    stopDarkMode()
  })
}

/**
 * @description 配合 unocss 开启深色模式
 * 在根节点上添加和移除 class="dark" 类名
 */
function handleDarkMode() {
  const DARK_CLASS = 'dark'
  const addDarkClass = () => {
    document.documentElement.classList.add(DARK_CLASS)
  }

  const removeDarkClass = () => {
    document.documentElement.classList.remove(DARK_CLASS)
  }

  return {
    addDarkClass,
    removeDarkClass,
  }
}
