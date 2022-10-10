import { useRef } from 'react'
import { useGlobalContext } from '@/context/AppContext'
import { options } from '@/utils/transportationMethods'

export const Electricity = () => {
  const { setEletricityValue } = useGlobalContext()

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
  const { setFlightInfo } = useGlobalContext()

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
  const { shippingInfo, setShippingInfo } = useGlobalContext()

  const weightRef = useRef<HTMLInputElement | null>(null)
  const distanceRef = useRef<HTMLInputElement | null>(null)
  const methodRef = useRef<HTMLSelectElement | null>(null)

  const handleChange = () => {
    const weight = weightRef.current?.value
    const distance = distanceRef.current?.value
    const method = methodRef.current?.value
    if (weight || distance || method) {
      setShippingInfo({
        weight: weight,
        distance: distance,
        method: method,
      })
    }
  }

  return (
    <>
      <label htmlFor='weight_value'>Peso da mercadoria {'(em g)'}:</label>
      <input
        type='number'
        id='weight_value'
        ref={weightRef}
        onChange={handleChange}
      />
      <label htmlFor='distance_unit'>Distância {'(em km)'}</label>
      <input
        type='number'
        id='distance_unit'
        ref={distanceRef}
        onChange={handleChange}
      />
      <label htmlFor='method'>Meio de transporte:</label>
      <select id='method' ref={methodRef} onChange={handleChange}>
        {options.map((op) => {
          return (
            <option value={op.value} key={op.id}>
              {op.name}
            </option>
          )
        })}
      </select>
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
