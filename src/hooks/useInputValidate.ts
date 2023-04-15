import { useCallback, useState } from 'react'

interface InputValidateRule {
  required?: boolean
  errorMsg?: string
  validate?: (value: string) => string
}

interface UseInputValidateOptions {
  rules: InputValidateRule[]
}

export function useInputValidate(options: UseInputValidateOptions) {
  const { rules } = options

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const validate = useCallback(
    (value: string) => {
      for (const rule of rules) {
        const { validate } = rule

        if (validate !== undefined) {
          const validatedErrorMsg = validate(value)
          if (validatedErrorMsg !== '') {
            setError(true)
            setErrorMsg(validatedErrorMsg)
            return false
          }
        } else {
          const { required, errorMsg: ruleErrorMsg } = rule
          if (required && !value) {
            setError(true)
            setErrorMsg(ruleErrorMsg || '')
            return false
          }
        }
      }

      setError(false)
      setErrorMsg('')

      return true
    },
    [rules],
  )

  return [error, errorMsg, validate] as const
}
