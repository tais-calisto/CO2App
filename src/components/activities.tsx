import { useRef } from 'react'
import { useGlobalContext } from '@/context/AppContext'
import { log } from 'console'

export const Electricity = () => {
  const { eletricityValue, setEletricityValue } = useGlobalContext()

  const elValue = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const value = elValue.current?.value
    if (value) {
      setEletricityValue(value)
    }
  }

  return (
    <>
      <label htmlFor='electricity_value'>Consumo {'(em kwh)'}:</label>
      <input
        type='number'
        id='electricity_value'
        ref={elValue}
        onChange={handleChange}
      />
    </>
  )
}

export const Flight = () => {
  const { flightInfo, setFlightInfo } = useGlobalContext()

  const passValue = useRef<HTMLInputElement | null>(null)
  const depAir = useRef<HTMLInputElement | null>(null)
  const desAir = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const passengers = passValue.current?.value
    const departure = depAir.current?.value
    const destination = desAir.current?.value
    if (passengers || departure || destination) {
      setFlightInfo({
        passengers: passengers,
        legs: [
          { departure_airport: departure, destination_airport: destination },
        ],
      })
    }
  }

  return (
    <>
      <label htmlFor='passengers'>Passageiros</label>
      <input
        type='number'
        id='passengers'
        ref={passValue}
        onChange={handleChange}
      />
      <label htmlFor='departure_airport'>Aeroporto de saída:</label>
      <input
        type='text'
        id='departure_airport'
        ref={depAir}
        onChange={handleChange}
      />
      <label htmlFor='destination_airport'>Aeroporto de chegada:</label>
      <input
        type='text'
        id='destination_airport'
        ref={desAir}
        onChange={handleChange}
      />
    </>
  )
}

export const Shipping = () => {
  const { eletricityValue, setEletricityValue } = useGlobalContext()

  const elValue = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const value = elValue.current?.value
    if (value) {
      setEletricityValue(value)
    }
  }

  return (
    <>
      <label htmlFor='weight_value'>Peso da mercadoria {'(em kg)'}:</label>
      <input type='number' id='weight_value' />
      <label htmlFor='distance_unit'>Distância {'(em km)'}</label>
      <input type='number' id='distance_unit' />
      <fieldset
        onChange={() => {
          console.log('oi')
        }}
      >
        <legend>Meio de transporte:</legend>
        <div>
          <input type='radio' id='ship' name='transport_method' value='ship' />
          <label htmlFor='ship'>Marítmo</label>
        </div>
        <div>
          <input
            type='radio'
            id='train'
            name='transport_method'
            value='train'
          />
          <label htmlFor='train'>Ferroviário</label>
        </div>
        <div>
          <input
            type='radio'
            id='truck'
            name='transport_method'
            value='truck'
          />
          <label htmlFor='truck'>Rodoviário</label>
        </div>
        <div>
          <input
            type='radio'
            id='plane'
            name='transport_method'
            value='plane'
          />
          <label htmlFor='plane'>Aéreo</label>
        </div>
      </fieldset>
    </>
  )
}

export const Vehicle = () => {
  const { eletricityValue, setEletricityValue } = useGlobalContext()

  const elValue = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const value = elValue.current?.value
    if (value) {
      setEletricityValue(value)
    }
  }

  return (
    <>
      <label htmlFor='distance_value'>Distância percorrida {'(em km)'}</label>
      <input type='number' id='distance_value' />
      <p>Vehicle makes request</p>
    </>
  )
}
