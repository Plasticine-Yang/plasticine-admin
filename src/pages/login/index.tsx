import { Button, Container } from '@mui/material'
import { useStore } from 'zustand'

import { settingsStore } from '@/stores'

const Login: React.FC = () => {
  const toggleColorMode = useStore(settingsStore, (settings) => settings.toggleColorMode)
  const setShouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.setShouldColorModeFollowSystem)

  return (
    <Container className="flex-col-center gap-4 min-h-screen px-8 md:px-0">
      {/* <LoginForm /> */}

      <Button variant="contained" color="primary" onClick={toggleColorMode}>
        切换深浅色模式
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setShouldColorModeFollowSystem(true)
        }}
      >
        深浅色模式跟随系统
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setShouldColorModeFollowSystem(false)
        }}
      >
        深浅色模式不跟随系统
      </Button>
    </Container>
  )
}

export default Login
