import { NextPage } from 'next'
import { useGlobalContext } from '@/context/AppContext'
import Header from '@/components/header/Header'
import { ResultStyle } from '@/styles/resultStyle'

const Result: NextPage = () => {
  const { result } = useGlobalContext()
  return (
    <ResultStyle>
      <Header />
      <section>
        <h1>Resultado:</h1>
        <h3>A estimativa de emissão de carbono é de {result} kg</h3>
      </section>
    </ResultStyle>
  )
}

export default Result
