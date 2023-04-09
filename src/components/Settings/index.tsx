import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Container, Divider, Drawer, Fab, IconButton, Stack, Typography, useTheme } from '@mui/material'
import clsx from 'clsx'
import { useCallback, useMemo, useState, type Key } from 'react'
import { useStore } from 'zustand'

import { settingsStore } from '@/stores'
import { ColorModeType } from '@/types'
import { hexToRgba } from '@/utils'

import ButtonSelect, { OptionValue, type ButtonSelectOption } from '../ButtonSelect'
import styles from './settings.module.scss'

const colorModeSelectOptions: ButtonSelectOption[] = [
  {
    key: 'dark',
    buttonContent: <DarkModeIcon />,
    value: 'dark',
  },
  {
    key: 'light',
    buttonContent: <WbSunnyIcon />,
    value: 'light',
  },
  {
    key: 'followSystem',
    buttonContent: <SettingsSuggestIcon />,
    value: 'followSystem',
  },
]

const Settings: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const colorMode = useStore(settingsStore, (settings) => settings.colorMode)
  const shouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.shouldColorModeFollowSystem)
  const setColorMode = useStore(settingsStore, (settings) => settings.setColorMode)
  const setShouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.setShouldColorModeFollowSystem)
  const resetSettings = useStore(settingsStore, (settings) => settings.reset)

  const theme = useTheme()

  const primaryColor = theme.palette.primary.dark
  const backgroundColor = theme.palette.background.default

  const fabShadow = useMemo(() => `${primaryColor} 0 6px 14px 0`, [primaryColor])
  const colorModeSelectedKey = useMemo(() => {
    if (shouldColorModeFollowSystem) {
      return 'followSystem'
    }

    return colorMode
  }, [colorMode, shouldColorModeFollowSystem])

  const handleFabClick = useCallback(() => {
    setDrawerVisible(true)
  }, [])

  const handleDrawerClose = useCallback(() => {
    setDrawerVisible(false)
  }, [])

  const handleColorModeChange = useCallback(
    (_: Key, colorMode: OptionValue) => {
      const resolvedColorMode = colorMode as ColorModeType | 'followSystem'
      if (resolvedColorMode === 'dark' || resolvedColorMode === 'light') {
        setShouldColorModeFollowSystem(false)
        setColorMode(colorMode as ColorModeType)
      }

      if (resolvedColorMode === 'followSystem') {
        setShouldColorModeFollowSystem(true)
      }
    },
    [setColorMode, setShouldColorModeFollowSystem],
  )

  return (
    <>
      <Fab
        className={clsx([
          styles.settings,
          // 固定在屏幕右下角
          'fixed right-8 bottom-8 translate-y-1/2',
          // 形状
          'rounded-none rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[4px]',
        ])}
        sx={{
          boxShadow: fabShadow,
        }}
        color="primary"
        aria-label="settings"
        onClick={handleFabClick}
      >
        <SettingsIcon className={styles['settings-icon']} />
      </Fab>

      <Drawer anchor="right" open={drawerVisible} onClose={handleDrawerClose}>
        <Container
          className="h-full w-64 p-0"
          sx={{ backgroundColor: hexToRgba(backgroundColor, 0.9), backdropFilter: 'blur(6px)' }}
        >
          {/* 顶部 */}
          <Stack className="flex flex-row justify-between items-center pl-4 pr-2 py-4">
            <Typography>设置</Typography>

            <Stack className="flex flex-row justify-end items-center">
              <IconButton onClick={resetSettings}>
                <RestartAltIcon />
              </IconButton>

              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Divider />

          {/* 内容 */}
          <Stack className="flex flex-col items-center w-full p-4">
            <ButtonSelect
              label="色彩模式"
              options={colorModeSelectOptions}
              selectedOptionKey={colorModeSelectedKey}
              onSelectedOptionChange={handleColorModeChange}
            />
          </Stack>
        </Container>
      </Drawer>
    </>
  )
}

export default Settings
