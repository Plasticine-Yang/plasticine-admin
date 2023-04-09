import { useCallback, useState } from 'react'

export function useBoolean(initialState: boolean) {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [state, setState, toggle] as const
}
