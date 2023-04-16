import { Container } from '@mui/material'
import clsx from 'clsx'

import styles from './styles.module.scss'

export const Dashboard: React.FC = () => {
  return <Container className={clsx([styles.container])}>Dashboard</Container>
}
