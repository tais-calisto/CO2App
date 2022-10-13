import { NextApiRequest, NextApiResponse } from 'next'
import { defaultEndpoint } from '@/utils/apiEndpoint'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  if (apiKey) {
    fetch(defaultEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch((error) => console.log(error))
  }
}
