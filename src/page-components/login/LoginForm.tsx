import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { useBoolean } from '@/hooks'

export const LoginForm: React.FC = () => {
  const [passwordHidden, , togglePasswordHidden] = useBoolean(true)

  return (
    <Card className="max-w-md p-4">
      <CardHeader
        title={
          <Typography variant="h5" textAlign={'center'}>
            Plasticine Admin
          </Typography>
        }
        subheader={
          <Stack className="mt-4">
            <Typography variant="h6">Welcome to Plasticine Admin!👋🏻</Typography>
            <Typography variant="body2" color="GrayText">
              Please sign-in to your account and start the adventure
            </Typography>
          </Stack>
        }
      />

      <CardContent>
        <Stack spacing={2}>
          <TextField label="Username" />

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={passwordHidden ? 'password' : 'text'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordHidden} edge="end">
                    {passwordHidden ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      </CardContent>

      <CardActions className='px-4'>
        <Button className="w-full" variant="contained">
          Sign In
        </Button>
      </CardActions>
    </Card>
  )
}
