import { act, renderHook } from '@testing-library/react'
import type { StoreApi } from 'zustand'

import { createSettingsStore } from '@/stores'
import type { SettingsStore } from '@/types'

import { useThemeSystemLogic } from '../useThemeSystemLogic'

describe('主题系统逻辑', () => {
  let settingsStore: StoreApi<SettingsStore>
  let rootEl: HTMLElement

  const getRootElColorMode = () => rootEl.dataset.colorMode
  const getRootElTheme = () => rootEl.dataset.theme

  /** @description 模拟系统深浅色模式 */
  const mockMatchMedia = (isDarkMode: boolean) => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: isDarkMode,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })

    // window.matchMedia 是只读属性，需要通过配置 writable 为 true 来修改为 mock 版本的 matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    })

    return matchMediaMock
  }

  beforeEach(() => {
    // 默认系统处于深色模式
    mockMatchMedia(true)

    rootEl = document.documentElement
    settingsStore = createSettingsStore()

    renderHook(() => useThemeSystemLogic(settingsStore))
  })

  test('深浅色模式', () => {
    const setColorMode = settingsStore.getState().setColorMode

    act(() => {
      setColorMode('dark')
    })
    expect(getRootElColorMode()).toBe('dark')

    act(() => {
      setColorMode('light')
    })
    expect(getRootElColorMode()).toBe('light')
  })

  test('主题', () => {
    const setTheme = settingsStore.getState().setTheme

    act(() => {
      setTheme('foo' as any)
    })
    expect(getRootElTheme()).toBe('foo')

    act(() => {
      setTheme('bar' as any)
    })
    expect(getRootElTheme()).toBe('bar')
  })

  test('跟随系统深浅色模式设置', () => {
    const setShouldColorModeFollowSystem = settingsStore.getState().setShouldColorModeFollowSystem

    act(() => {
      // 开启跟随系统深浅色模式变化
      setShouldColorModeFollowSystem(true)
    })

    // 系统切换到深色模式
    mockMatchMedia(true)
    // 监听操作系统深浅色模式变更的事件监听回调的执行不是同步的，因此立刻断言会导致获取不到回调执行引起的变更结果
    // 因此将断言放到下一个宏任务中
    setTimeout(() => {
      expect(getRootElColorMode()).toBe('dark')
    })

    // 系统切换到浅色模式
    mockMatchMedia(false)
    setTimeout(() => {
      expect(getRootElColorMode()).toBe('light')
    })

    setTimeout(() => {
      act(() => {
        // 关闭跟随系统深浅色模式变化功能
        setShouldColorModeFollowSystem(false)
      })
      expect(getRootElColorMode()).toBe('light')

      // 系统无论如何切换深浅色模式 - rootEl 的 colorMode 都不受影响
      mockMatchMedia(true)
      setTimeout(() => {
        expect(getRootElColorMode()).toBe('light')
      })

      mockMatchMedia(false)
      setTimeout(() => {
        expect(getRootElColorMode()).toBe('light')
      })
    })
  })
})
