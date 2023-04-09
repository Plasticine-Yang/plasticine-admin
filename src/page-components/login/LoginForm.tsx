import { Card, CardContent, CardHeader, Input, Stack } from '@mui/material'

export const LoginForm: React.FC = () => {
  return (
    <Card className="use-bg-layer max-w-md">
      <CardHeader>
        <Stack direction="column" spacing={4}>
          <h2>Plasticine Admin</h2>
          <Stack direction="column" spacing={1}>
            <h3>Welcome to Plasticine Admin!👋🏻</h3>
            <p className="text-gray-400 dark:text-gray-300 text-xs">
              Please sign-in to your account and start the adventure
            </p>
          </Stack>
        </Stack>
      </CardHeader>

      <CardContent>
        <Stack>
          <Input className="input-primary" placeholder="Username" />
          <Input className="input-primary" placeholder="Password" />
        </Stack>
      </CardContent>
    </Card>
  )
}
