import type { NextApiRequest, NextApiResponse } from 'next'

import type { ApiLoginResponseData, UniverseResponse } from '@/types/api'

export default function handler(req: NextApiRequest, res: NextApiResponse<UniverseResponse<ApiLoginResponseData>>) {
  setTimeout(() => {
    res.status(200).json({
      code: 0,
      message: 'success',
      data: {
        userId: 'foo',
        username: 'plasticine',
      },
    })
  }, 1500)
}
