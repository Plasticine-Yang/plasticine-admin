import { Container } from '@mui/material'

import { Dashboard, Menu } from '@/page-components/home'

const Home: React.FC = () => {
  return (
    <Container className='flex'>
      <Menu />
      <Dashboard />
    </Container>
  )
}

export default Home
