import { options } from '@/utils/estimationOptions';
import { useRef, useState } from 'react';
import {
  Electricity,
  Flight,
  Shipping,
  Vehicle,
} from '@/components/activities/activities';
import { useGlobalContext } from '@/context/AppContext';
import { useRouter } from 'next/router';

const Form = () => {
  const selection = useRef<null | HTMLSelectElement>(null);
  const [activity, setActivity] = useState<string | undefined>('');

  const router = useRouter();

  const {
    eletricityValue,
    flightInfo,
    shippingInfo,
    vehicleDistance,
    setResult,
  } = useGlobalContext();

  const handleChange = () => {
    setActivity(selection.current?.value);
  };

  const handleSubmit = (info: object) => {
    console.log(info);

    fetch('api/estimates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((data: number) => {
        setResult(data);

        {
          /*eslint-disable @typescript-eslint/no-floating-promises*/
        }
        router.push('/result');
        {
          /*eslint-enable @typescript-eslint/no-floating-promises*/
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        switch (activity) {
          case 'electricity':
            handleSubmit({
              type: 'electricity',
              electricity_unit: 'kwh',
              electricity_value: eletricityValue,
              country: 'us',
            });
            break;
          case 'flight':
            handleSubmit({
              type: 'flight',
              passengers: flightInfo.passengers,
              legs: flightInfo.legs,
            });
            break;
          case 'shipping':
            handleSubmit({
              type: 'shipping',
              weight_value: shippingInfo.weight,
              weight_unit: 'g',
              distance_value: shippingInfo.distance,
              distance_unit: 'km',
              transport_method: shippingInfo.method,
            });
            break;
          case 'vehicle':
            handleSubmit({
              type: 'vehicle',
              distance_unit: 'km',
              distance_value: vehicleDistance,
              vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9',
            });
            break;
        }
      }}
    >
      <label htmlFor='activity'>Atividade:</label>
      <select
        id='activity'
        ref={selection}
        onChange={handleChange}
        defaultValue={''}
      >
        <option value='' key='' hidden disabled>
          Selecione uma atividade
        </option>
        {options.map((op) => {
          return (
            <option value={op.value} key={op.id}>
              {op.name}
            </option>
          );
        })}
      </select>
      {activity === 'electricity' ? (
        <Electricity />
      ) : activity === 'flight' ? (
        <Flight />
      ) : activity === 'shipping' ? (
        <Shipping />
      ) : activity === 'vehicle' ? (
        <Vehicle />
      ) : null}
      {activity && <button className='btnPrimary'>Calcular</button>}
    </form>
  );
};

export default Form;
