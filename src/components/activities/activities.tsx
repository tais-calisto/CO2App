import { useRef, useState } from 'react'
import { useGlobalContext } from '@/context/AppContext'
import { options } from '@/utils/transportationMethods'
import { MotionValue } from 'framer-motion'

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
  const [invalidPass, setInvalidPass] = useState(false)
  const [invalidDep, setInvalidDep] = useState(false)
  const [invalidDes, setInvalidDes] = useState(false)

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

  const handleBlur = (value: string) => {
    const passengers = passValue.current?.value
    const departure = depAir.current?.value
    const destination = desAir.current?.value
    switch (value) {
      case 'passengers':
        if (!passengers) {
          setInvalidPass(true)
        } else {
          setInvalidPass(false)
        }
        break
      case 'departure_airport':
        if (!departure) {
          setInvalidDep(true)
        } else {
          setInvalidDep(false)
        }
        break
      case 'destination_airport':
        if (!destination) {
          setInvalidDes(true)
        } else {
          setInvalidDes(false)
        }
        break
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
        onBlur={() => {
          handleBlur('passengers')
        }}
        className={invalidPass ? 'invalid' : undefined}
      />

      <label htmlFor='departure_airport'>
        Aeroporto de saída: {'(código do aeroporto )'}
      </label>
      <input
        type='text'
        id='departure_airport'
        ref={depAir}
        onChange={handleChange}
        onBlur={() => {
          handleBlur('departure_airport')
        }}
        className={invalidDep ? 'invalid' : undefined}
      />
      <label htmlFor='destination_airport'>
        Aeroporto de chegada: {'(código do aeroporto )'}
      </label>
      <input
        type='text'
        id='destination_airport'
        ref={desAir}
        onChange={handleChange}
        onBlur={() => {
          handleBlur('destination_airport')
        }}
        className={invalidDes ? 'invalid' : undefined}
      />
      {invalidPass || invalidDep || invalidDes ? (
        <p className='error'>Preencha corretamente todos os campos</p>
      ) : null}
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
  const [invalidWeight, setInvalidWeight] = useState(false)
  const [invalidDistance, setInvalidDistance] = useState(false)

  const weightRef = useRef<HTMLInputElement | null>(null)
  const distanceRef = useRef<HTMLInputElement | null>(null)
  const methodRef = useRef<HTMLSelectElement | null>(null)

  const weight = weightRef.current?.value
  const distance = distanceRef.current?.value
  const method = methodRef.current?.value

  const handleChange = () => {
    if (weight || distance || method) {
      setShippingInfo({
        weight: weight,
        distance: distance,
        method: method,
      })
    }
  }

  const handleBlur = (value: string) => {
    switch (value) {
      case 'weight':
        if (!weight) {
          setInvalidWeight(true)
        } else {
          setInvalidWeight(false)
        }
        break
      case 'distance':
        if (!distance) {
          setInvalidDistance(true)
        } else {
          setInvalidDistance(false)
        }
        break
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
        onBlur={() => {
          handleBlur('weight')
        }}
        className={invalidWeight ? 'invalid' : undefined}
      />
      <label htmlFor='distance_unit'>Distância {'(em km)'}</label>
      <input
        type='number'
        id='distance_unit'
        ref={distanceRef}
        onChange={handleChange}
        onBlur={() => {
          handleBlur('distance')
        }}
        className={invalidDistance ? 'invalid' : undefined}
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
      {invalidDistance || invalidWeight ? (
        <p className='error'>Preencha corretamente todos os campos</p>
      ) : null}
    </>
  )
}

export const Vehicle = () => {
  const { setVehicleDistance } = useGlobalContext()
  const [invalid, setInvalid] = useState(false)

  const distance = useRef<HTMLInputElement | null>(null)

  const value = distance.current?.value
  const handleChange = () => {
    if (value) {
      setVehicleDistance(value)
    }
  }

  const handleBlur = () => {
    if (!value) {
      setInvalid(true)
    } else {
      setInvalid(false)
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
        onBlur={() => {
          handleBlur()
        }}
        className={invalid ? 'invalid' : undefined}
      />
      {invalid ? (
        <p className='error'>Preencha corretamente todos os campos</p>
      ) : null}
    </>
  )
}
