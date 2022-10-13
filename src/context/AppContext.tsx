import { createContext, ReactNode, useContext, useState } from 'react'

type flight = {
  passengers: string | undefined
  legs: [
    {
      departure_airport: string | undefined
      destination_airport: string | undefined
    }
  ]
}

type shipping = {
  weight: string | undefined
  distance: string | undefined
  method: string | undefined
}

type activitiesContextType = {
  result: number | undefined
  setResult: (value: number) => void
  eletricityValue: string
  setEletricityValue: (value: string) => void
  flightInfo: flight
  setFlightInfo: (value: flight) => void
  shippingInfo: shipping
  setShippingInfo: (value: shipping) => void
  vehicleDistance: string
  setVehicleDistance: (value: string) => void
}

const activitiesContextDefaultValues: activitiesContextType = {
  result: 0,
  setResult: () => {
    return
  },
  eletricityValue: '',
  setEletricityValue: () => {
    return
  },
  flightInfo: {
    passengers: '',
    legs: [{ departure_airport: 'sfo', destination_airport: 'yyz' }],
  },
  setFlightInfo: () => {
    return
  },
  shippingInfo: {
    weight: '',
    distance: '',
    method: '',
  },
  setShippingInfo: () => {
    return
  },
  vehicleDistance: '',
  setVehicleDistance: () => {
    return
  },
}

export const AppContext = createContext<activitiesContextType>(
  activitiesContextDefaultValues
)

export function useGlobalContext() {
  return useContext(AppContext)
}

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [result, setResult] = useState<number>()
  const [eletricityValue, setEletricityValue] = useState<string>('')
  const [flightInfo, setFlightInfo] = useState<flight>({
    passengers: '',
    legs: [{ departure_airport: '', destination_airport: '' }],
  })
  const [shippingInfo, setShippingInfo] = useState<shipping>({
    weight: '',
    distance: '',
    method: '',
  })
  const [vehicleDistance, setVehicleDistance] = useState<string>('')

  const value = {
    result,
    setResult,
    eletricityValue,
    setEletricityValue,
    flightInfo,
    setFlightInfo,
    shippingInfo,
    setShippingInfo,
    vehicleDistance,
    setVehicleDistance,
  }

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  )
}
