import { Card, CardBody, CardFooter, CardHeader, Heading, Input, Stack, Text } from '@mui/material'

export const LoginForm: React.FC = () => {
  return (
    <Card className="use-bg-layer max-w-md">
      <CardHeader>
        <Stack direction="column" spacing={4}>
          <Heading size="lg" alignSelf="center">
            Plasticine Admin
          </Heading>
          <Stack direction="column" spacing={1}>
            <Heading as="h3" size="xs">
              Welcome to Plasticine Admin!👋🏻
            </Heading>
            <Text className="text-gray-400 dark:text-gray-300 text-xs">
              Please sign-in to your account and start the adventure
            </Text>
          </Stack>
        </Stack>
      </CardHeader>

      <CardBody>
        <Stack>
          <Input className="input-primary" placeholder="Username" />
          <Input className="input-primary" placeholder="Password" />
        </Stack>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  )
}

// <CardContent>
//   {/* 标题 & 介绍信息 */}
//   <Box>
//     <Typography className="mb-6 text-center" variant="h4">
//       Plasticine Admin
//     </Typography>
//     <Typography variant="h6">Welcome to Plasticine Admin 👋🏻</Typography>
//     <Typography variant="body2" className="text-gray-400 dark:text-gray-400">
//       Please sign-in to your account and start the adventure
//     </Typography>
//   </Box>
// </CardContent>
