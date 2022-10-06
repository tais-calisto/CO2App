import { defaultEndpoint } from '@/utils/apiEndpoint'

export const getEstimate = async () => {
  try {
    const res = await fetch(defaultEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'vehicle',
        distance_unit: 'mi',
        distance_value: 100,
        vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9',
      }),
    })
    const data = res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
