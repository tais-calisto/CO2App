import { NextApiRequest, NextApiResponse } from 'next'
import { getEstimate } from '@/clients/carbonEstimates'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getEstimate(req.body)
  res.status(200).json(data)
}
