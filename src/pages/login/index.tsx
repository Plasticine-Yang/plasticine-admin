import { Box, Button } from '@mui/material'
import { useStore } from 'zustand'

import { LoginForm } from '@/page-components/login'
import { settingsStore } from '@/stores'

const Login: React.FC = () => {
  const toggleColorMode = useStore(settingsStore, (settings) => settings.toggleColorMode)
  const setShouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.setShouldColorModeFollowSystem)
  const setTheme = useStore(settingsStore, (settings) => settings.setTheme)

  const btnClassName =
    'bg-[--pa-primary-color] dark:bg-[--pa-dark-primary-color] hover:bg-[--pa-primary-color] dark:hover:bg-[--pa-dark-primary-color] use-text-color'

  return (
    <Box className="flex-col-center gap-4 min-h-screen">
      <LoginForm />
      <Button className={btnClassName} variant="contained" onClick={toggleColorMode}>
        切换深浅色模式
      </Button>

      <Button
        className={btnClassName}
        variant="contained"
        onClick={() => {
          setShouldColorModeFollowSystem(true)
        }}
      >
        深浅色模式跟随系统
      </Button>

      <Button
        className={btnClassName}
        variant="contained"
        onClick={() => {
          setShouldColorModeFollowSystem(false)
        }}
      >
        深浅色模式不跟随系统
      </Button>

      <Button
        className={btnClassName}
        variant="contained"
        onClick={() => {
          setTheme('default')
        }}
      >
        切换主题 - default
      </Button>

      <Button
        className={btnClassName}
        variant="contained"
        onClick={() => {
          setTheme('primary')
        }}
      >
        切换主题 - primary
      </Button>
    </Box>
  )
}

export default Login
