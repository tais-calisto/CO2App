import { NextPage } from 'next'
import { useGlobalContext } from '@/context/AppContext'
import Header from '@/components/header/Header'
import { ResultStyle } from '@/styles/resultStyle'
import photo from '@/assets/photos/results.svg'
import Image from 'next/image'

const Result: NextPage = () => {
  const { result } = useGlobalContext()
  return (
    <ResultStyle>
      <div>
        <Header />
        <section>
          <h1>Resultado:</h1>
          <h3>A estimativa de emissão de carbono é de {result} kg</h3>
        </section>
      </div>
      {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
      <Image src={photo} alt='Emissões de carbono' />
    </ResultStyle>
  )
}

export default Result
