import { NextPage } from 'next'
import photo from '@/assets/photos/calculate.svg'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { CalculateStyle } from './style'
import { options } from '@/utils/estimationOptions'
import { useRef, useState } from 'react'
import { Electricity, Flight, Shipping, Vehicle } from '@/components/activities'
import { useGlobalContext } from '@/context/AppContext'

const Calculate: NextPage = () => {
  const selection = useRef<null | HTMLSelectElement>(null)
  const [activity, setActivity] = useState<string | undefined>('')

  const { eletricityValue, flightInfo, shippingInfo } = useGlobalContext()

  const handleChange = () => {
    setActivity(selection.current?.value)
  }

  const handleSubmit = async (info: object) => {
    try {
      const response = await fetch('http://localhost:3000/api/estimates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CalculateStyle>
      <div>
        <Header />
        <h1>Cálculo de emissões de carbono</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            switch (activity) {
              case 'electricity':
                handleSubmit({
                  type: 'electricity',
                  electricity_unit: 'kwh',
                  electricity_value: eletricityValue,
                  country: 'us',
                })
                break
              case 'flight':
                handleSubmit({
                  type: 'flight',
                  passengers: flightInfo.passengers,
                  legs: flightInfo.legs,
                })
                break
              case 'shipping':
                handleSubmit({
                  type: 'shipping',
                  weight_value: shippingInfo.weight,
                  weight_unit: 'g',
                  distance_value: shippingInfo.distance,
                  distance_unit: 'km',
                  transport_method: shippingInfo.method,
                })
                break
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
              )
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
      </div>
      <Image src={photo} />
    </CalculateStyle>
  )
}

export default Calculate
