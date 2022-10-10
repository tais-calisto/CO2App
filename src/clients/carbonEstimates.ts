import { defaultEndpoint } from '@/utils/apiEndpoint'

type body = {
  type: string
  distance_unit: string
  distance_value: number
  vehicle_model_id: string
}

export const getEstimate = async (info: body) => {
  try {
    const res = await fetch(defaultEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    const data = res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
