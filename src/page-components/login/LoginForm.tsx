import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { useBoolean, useInputValidate } from '@/hooks'
import { ChangeEvent, useCallback, useState } from 'react'

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordHidden, , togglePasswordHidden] = useBoolean(true)

  const [usernameError, usernameErrorMsg, validateUsername] = useInputValidate({
    rules: [
      {
        required: true,
        errorMsg: '请输入用户名',
      },
    ],
  })

  const [passwordError, passwordErrorMsg, validatePassword] = useInputValidate({
    rules: [
      {
        required: true,
        errorMsg: '请输入密码',
      },
    ],
  })

  const handleUsernameInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = e.target.value
      validateUsername(inputValue)
      setUsername(inputValue)
    },
    [validateUsername],
  )

  const handlePasswordInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = e.target.value
      validatePassword(inputValue)
      setPassword(inputValue)
    },
    [validatePassword],
  )

  const handleLoginBtnClick = useCallback(() => {
    let allowSubmit = true

    if (!validateUsername(username)) {
      allowSubmit = false
    }

    if (!validatePassword(password)) {
      allowSubmit = false
    }

    if (allowSubmit) {
      alert('success')
    }
  }, [password, username, validatePassword, validateUsername])

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
          {/* username */}
          <TextField
            required
            label="Username"
            value={username}
            error={usernameError}
            helperText={usernameErrorMsg}
            onChange={handleUsernameInputChange}
          />

          {/* password */}
          <FormControl variant="outlined" required error={passwordError}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              value={password}
              type={passwordHidden ? 'password' : 'text'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordHidden} edge="end">
                    {passwordHidden ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handlePasswordInputChange}
            />
            <FormHelperText>{passwordErrorMsg}</FormHelperText>
          </FormControl>
        </Stack>
      </CardContent>

      <CardActions className="px-4">
        <Button className="w-full" variant="contained" onClick={handleLoginBtnClick}>
          Sign In
        </Button>
      </CardActions>
    </Card>
  )
}
