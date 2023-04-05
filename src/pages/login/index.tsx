import { Box } from '@mui/material'

import { LoginForm } from '@/page-components/login'

const Login: React.FC = () => {
  return (
    <Box className="flex-row-center min-h-screen">
      <LoginForm />
    </Box>
  )
}

export default Login
