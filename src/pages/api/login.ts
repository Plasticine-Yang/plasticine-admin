import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { API_SUCCESS_CODE, COOKIE_AUTH_TOKEN } from '@/constants'
import type { ApiLoginRequestData, ApiLoginResponseData, UniverseResponse } from '@/types/api'

export default function handler(req: NextApiRequest, res: NextApiResponse<UniverseResponse<ApiLoginResponseData>>) {
  const reqBody: ApiLoginRequestData = req.body || {}
  let resBody: UniverseResponse<ApiLoginResponseData>

  if (reqBody.username === 'demo' && reqBody.password === 'demo') {
    const token = 'validated-token'
    resBody = {
      code: API_SUCCESS_CODE,
      message: 'success',
      data: {
        userId: 'foo',
        username: 'plasticine',
        token,
      },
    }
    res.setHeader(
      'Set-Cookie',
      serialize(COOKIE_AUTH_TOKEN, token, {
        httpOnly: true,
        maxAge: 60 * 60,
        path: '/',
        sameSite: true,
      }),
    )
  } else {
    resBody = {
      code: 1000,
      message: '账号或密码错误',
    }
  }

  setTimeout(() => {
    res.status(200).json(resBody)
  }, 1000)
}
