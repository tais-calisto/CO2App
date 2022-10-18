import { NextPage } from 'next'
import photo from '@/assets/photos/calculate.svg'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { CalculateStyle } from '../../styles/calculateStyle'
import Form from '@/components/form/Form'

const Calculate: NextPage = () => {
  return (
    <CalculateStyle>
      <div>
        <Header />
        <h1>Cálculo de emissões de carbono</h1>
        <Form />
      </div>
      {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
      <Image src={photo} alt='Vegetação' />
    </CalculateStyle>
  )
}

export default Calculate
