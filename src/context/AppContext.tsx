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
  eletricityValue: string
  setEletricityValue: (value: string) => void
  flightInfo: flight
  setFlightInfo: (value: flight) => void
  shippingInfo: shipping
  setShippingInfo: (value: shipping) => void
}

const activitiesContextDefaultValues: activitiesContextType = {
  eletricityValue: '',
  setEletricityValue: () => {},
  flightInfo: {
    passengers: '',
    legs: [{ departure_airport: 'sfo', destination_airport: 'yyz' }],
  },
  setFlightInfo: () => {},
  shippingInfo: {
    weight: '',
    distance: '',
    method: '',
  },
  setShippingInfo: () => {},
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

  const value = {
    eletricityValue,
    setEletricityValue,
    flightInfo,
    setFlightInfo,
    shippingInfo,
    setShippingInfo,
  }

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  )
}
