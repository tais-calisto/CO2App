import { createContext, ReactNode, useContext, useState } from 'react'

type activitiesContextType = {
  eletricityValue: string
  setEletricityValue: (value: string) => void
}

const activitiesContextDefaultValues: activitiesContextType = {
  eletricityValue: '',
  setEletricityValue: () => {},
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

  const value = {
    eletricityValue,
    setEletricityValue,
  }

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  )
}
