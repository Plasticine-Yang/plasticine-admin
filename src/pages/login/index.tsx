import { Box, Button } from '@chakra-ui/react'
import { useStore } from 'zustand'

import { LoginForm } from '@/page-components/login'
import { settingsStore } from '@/stores'

const Login: React.FC = () => {
  const toggleColorMode = useStore(settingsStore, (settings) => settings.toggleColorMode)
  const setShouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.setShouldColorModeFollowSystem)
  const setTheme = useStore(settingsStore, (settings) => settings.setTheme)

  return (
    <Box className="flex-col-center gap-4 min-h-screen">
      <LoginForm />
      <Button className="btn-primary">default</Button>
      <Button className="btn-primary" variant="contained" onClick={toggleColorMode}>
        切换深浅色模式
      </Button>

      <Button
        className="btn-primary"
        onClick={() => {
          setShouldColorModeFollowSystem(true)
        }}
      >
        深浅色模式跟随系统
      </Button>

      <Button
        className="btn-primary"
        onClick={() => {
          setShouldColorModeFollowSystem(false)
        }}
      >
        深浅色模式不跟随系统
      </Button>

      <Button
        className="btn-primary"
        onClick={() => {
          setTheme('default')
        }}
      >
        切换主题 - default
      </Button>

      <Button
        className="btn-primary"
        onClick={() => {
          setTheme('plasticine-cyan')
        }}
      >
        切换主题 - plasticine-cyan
      </Button>
    </Box>
  )
}

export default Login
