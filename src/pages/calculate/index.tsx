import { NextPage } from 'next'
import photo from '@/assets/photos/calculate.svg'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { CalculateStyle } from './style'

const Calculate: NextPage = () => {
  return (
    <CalculateStyle>
      <div>
        <Header />
        <h1>Cálculo de emissões de carbono</h1>
        <form>
          <label htmlFor='activity'>Atividade:</label>
          <input type='text' id='activity' />
        </form>
      </div>
      <Image src={photo} />
    </CalculateStyle>
  )
}

export default Calculate
