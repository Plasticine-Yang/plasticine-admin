import { API_VALIDATE_TOKEN_PATH } from '@/constants'
import type { ApiValidateTokenRequestData, ApiValidateTokenResponseData } from '@/types'

import { apiFetcher } from './apiFetcher'

export async function checkIsAuthed(token?: string) {
  if (token === undefined) {
    return false
  }

  const { isAuthed } = await apiFetcher.post<ApiValidateTokenResponseData, ApiValidateTokenRequestData>(
    API_VALIDATE_TOKEN_PATH,
    {
      token,
    },
  )

  return isAuthed
}
