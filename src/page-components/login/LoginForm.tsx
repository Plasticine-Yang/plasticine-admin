import { Box, Card, CardContent, Typography } from '@mui/material'

export const LoginForm: React.FC = () => {
  return (
    <Card className="use-layer-bg-color p-8">
      <CardContent>
        {/* 标题 & 介绍信息 */}
        <Box>
          <Typography className='mb-6 text-center' variant="h4">Plasticine Admin</Typography>
          <Typography variant="h6">Welcome to Plasticine Admin 👋🏻</Typography>
          <Typography variant="body2" className='text-gray-400 dark:text-gray-400'>Please sign-in to your account and start the adventure</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
