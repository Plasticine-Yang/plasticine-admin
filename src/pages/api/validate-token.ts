import type { NextApiRequest, NextApiResponse } from 'next'

import { API_SUCCESS_CODE } from '@/constants'
import type { ApiValidateTokenRequestData, ApiValidateTokenResponseData, UniverseResponse } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UniverseResponse<ApiValidateTokenResponseData>>,
) {
  const reqBody: ApiValidateTokenRequestData = req.body || {}
  let resBody: UniverseResponse<ApiValidateTokenResponseData>

  if (reqBody.token === 'validated-token') {
    resBody = {
      code: API_SUCCESS_CODE,
      message: 'success',
      data: {
        isAuthed: true,
      },
    }
  } else {
    resBody = {
      code: 1001,
      message: 'token 无效',
    }
  }

  setTimeout(() => {
    res.status(200).json(resBody)
  }, 1000)
}
