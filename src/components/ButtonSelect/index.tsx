import { Button, Container, Stack, Typography } from '@mui/material'
import { cloneElement, isValidElement, useCallback, useMemo, type Key, type ReactNode } from 'react'

export type OptionValue = string | number | boolean

export interface ButtonSelectOption {
  key: Key
  buttonContent: ReactNode
  value: OptionValue
}

interface ButtonSelectProps {
  label: string
  options: ButtonSelectOption[]
  selectedOptionKey: Key
  onSelectedOptionChange: (optionKey: Key, optionValue: OptionValue) => void
}

const ButtonSelect: React.FC<ButtonSelectProps> = (props) => {
  const { label, options, selectedOptionKey, onSelectedOptionChange } = props

  const renderOptions = useMemo(() => {
    return options.map((option) => {
      const { key, buttonContent, value } = option
      const color = selectedOptionKey === key ? 'primary' : 'secondary'

      return (
        <Button
          className="w-full h-full"
          variant="outlined"
          color={color}
          key={key}
          onClick={() => onSelectedOptionChange(key, value)}
        >
          {isValidElement(buttonContent)
            ? cloneElement(buttonContent, {
                ...buttonContent.props,
                color,
              } as { color: string })
            : null}
        </Button>
      )
    })
  }, [options, selectedOptionKey, onSelectedOptionChange])

  return (
    <Container className="w-full p-0">
      <Typography variant="body2" color="GrayText">
        {label}
      </Typography>

      <Stack className="flex flex-row gap-2 h-16 mt-4">{renderOptions}</Stack>
    </Container>
  )
}

export default ButtonSelect
