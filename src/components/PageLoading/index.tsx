import { CircularProgress, Container, Typography, useTheme } from '@mui/material'

const PageLoading: React.FC = () => {
  const theme = useTheme()
  const { background, primary } = theme.palette

  return (
    <Container
      className="fixed inset-0 flex-col-center"
      sx={{
        background: background.default,
      }}
    >
      <Typography
        sx={{
          color: primary.main,
        }}
        variant="h2"
      >
        Loading...
      </Typography>
      <CircularProgress color="primary" />
    </Container>
  )
}

export default PageLoading
