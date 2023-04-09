import { act, renderHook } from '@testing-library/react'
import { StoreApi, useStore } from 'zustand'
import { shallow } from 'zustand/shallow'

import { createSettingsStore } from '@/stores'
import type { SettingsStore } from '@/types'

import { useColorModeFollowSystemLogic } from '../useColorModeFollowSystemLogic'

describe('深浅色模式跟随操作系统', () => {
  let settingsStore: StoreApi<SettingsStore>

  /** @description 模拟系统深浅色模式 */
  const mockMatchMedia = (isDark: boolean) => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: isDark,
      addListener: jest.fn(),
      removeListener: jest.fn(),
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
    settingsStore = createSettingsStore()
    renderHook(() => useColorModeFollowSystemLogic(settingsStore))
  })

  test('开启后应当跟随系统深浅色模式变化', () => {
    const { result } = renderHook(() =>
      useStore(
        settingsStore,
        (settings) => ({
          colorMode: settings.colorMode,
          setShouldColorModeFollowSystem: settings.setShouldColorModeFollowSystem,
        }),
        shallow,
      ),
    )

    act(() => {
      // 开启跟随系统深浅色模式变化
      result.current.setShouldColorModeFollowSystem(true)
    })

    // 系统切换到深色模式
    mockMatchMedia(true)
    // 监听操作系统深浅色模式变更的事件监听回调的执行不是同步的，因此立刻断言会导致获取不到回调执行引起的变更结果
    // 因此将断言放到下一个宏任务中
    setTimeout(() => {
      expect(result.current.colorMode).toBe('dark')
    })

    // 系统切换到浅色模式
    mockMatchMedia(false)
    setTimeout(() => {
      expect(result.current.colorMode).toBe('light')
    })
  })

  test('关闭后不应当跟随系统深浅色模式变化', () => {
    const { result } = renderHook(() =>
      useStore(
        settingsStore,
        (settings) => ({
          colorMode: settings.colorMode,
          setColorMode: settings.setColorMode,
          setShouldColorModeFollowSystem: settings.setShouldColorModeFollowSystem,
        }),
        shallow,
      ),
    )

    act(() => {
      // 初始处于浅色模式
      result.current.setColorMode('light')

      // 关闭跟随系统深浅色模式变化功能
      result.current.setShouldColorModeFollowSystem(false)
    })
    expect(result.current.colorMode).toBe('light')

    // 系统切换到深色模式
    mockMatchMedia(true)
    setTimeout(() => {
      expect(result.current.colorMode).toBe('light')
    })

    // 系统切换到浅色模式
    mockMatchMedia(false)
    setTimeout(() => {
      expect(result.current.colorMode).toBe('light')
    })
  })
})
