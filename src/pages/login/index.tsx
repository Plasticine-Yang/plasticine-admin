import { Container } from '@mui/material'

import { LoginForm } from '@/page-components/login'

const Login: React.FC = () => {
  return (
    <Container className="flex-col-center gap-4 min-h-screen px-8 md:px-0">
      <LoginForm />
    </Container>
  )
}

export default Login
