import { useRef, useState } from 'react'
import { useGlobalContext } from '@/context/AppContext'
import { options } from '@/utils/transportationMethods'

export const Electricity = () => {
  const { setEletricityValue, eletricityValue } = useGlobalContext()
  const [invalid, setInvalid] = useState(false)

  const elValue = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const value = elValue.current?.value
    if (value) {
      setEletricityValue(value)
      setInvalid(false)
    }
  }

  const handleBlur = () => {
    const value = elValue.current?.value
    if (!value) {
      setInvalid(true)
    } else {
      setInvalid(false)
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
        onBlur={handleBlur}
        className={invalid ? 'invalid' : undefined}
      />
      {invalid ? (
        <p className='error'>Preencha corretamente todos os campos</p>
      ) : null}
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

      <label htmlFor='departure_airport'>
        Aeroporto de saída: {'(código do aeroporto )'}
      </label>
      <input
        type='text'
        id='departure_airport'
        ref={depAir}
        onChange={handleChange}
      />
      <label htmlFor='destination_airport'>
        Aeroporto de chegada: {'(código do aeroporto )'}
      </label>
      <input
        type='text'
        id='destination_airport'
        ref={desAir}
        onChange={handleChange}
      />
      <a
        className='code-search'
        href='https://www.iata.org/en/publications/directories/code-search/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Pesquisar códigos de aeroportos
      </a>
    </>
  )
}

export const Shipping = () => {
  const { setShippingInfo } = useGlobalContext()

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
  const { setVehicleDistance } = useGlobalContext()

  const distance = useRef<HTMLInputElement | null>(null)

  const handleChange = () => {
    const value = distance.current?.value
    if (value) {
      setVehicleDistance(value)
    }
  }

  return (
    <>
      <label htmlFor='distance_value'>Distância percorrida {'(em km)'}</label>
      <input
        type='number'
        id='distance_value'
        ref={distance}
        onChange={handleChange}
      />
    </>
  )
}
