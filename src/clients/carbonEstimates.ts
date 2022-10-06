import { defaultEndpoint } from '@/utils/apiEndpoint'

export const getEstimate = async () => {
  const res = await fetch(defaultEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    body: JSON.stringify({
      emission_factor: {
        activity_id: 'heat-and-steam-type_purchased',
      },
      parameters: {
        energy: 100,
        energy_unit: 'kWh',
      },
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))

  return res
}
