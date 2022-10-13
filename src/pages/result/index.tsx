import { NextPage } from 'next'
import { useGlobalContext } from '@/context/AppContext'
import Header from '@/components/header/Header'

const Info: NextPage = () => {
  const { result } = useGlobalContext()
  return (
    <>
      <Header />
      <h2>Resultado:</h2>
      <h3>A estimativa de emissão de carbono é de {result} kg</h3>
    </>
  )
}

export default Info
