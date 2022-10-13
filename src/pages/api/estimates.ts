import { NextApiRequest, NextApiResponse } from 'next'
import { defaultEndpoint } from '@/utils/apiEndpoint'

export interface Carbon {
  data: Data
}
export interface Data {
  id: string
  type: string
  attributes: Attributes
}
export interface Attributes {
  carbon_kg: number
}

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
      .then((data: Carbon) => {
        res.status(200).json(data.data.attributes.carbon_kg)
      })
      .catch((error) => console.log(error))
  }
}
