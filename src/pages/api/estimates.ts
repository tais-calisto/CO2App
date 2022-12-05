import { NextApiRequest, NextApiResponse } from 'next';
import { defaultEndpoint } from '@/utils/apiEndpoint';

export interface Carbon {
  data: Data;
}
export interface Data {
  id: string;
  type: string;
  attributes: Attributes;
}
export interface Attributes {
  carbon_kg: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /*eslint-disable @typescript-eslint/restrict-template-expressions*/

  fetch(defaultEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  })
    /*eslint-enable @typescript-eslint/restrict-template-expressions*/
    .then((response) => response.json())
    .then((data: Carbon) => {
      console.log(data);

      res.status(200).send(data.data.attributes.carbon_kg);
    })
    .catch((error) => res.status(500).send(error));
}
