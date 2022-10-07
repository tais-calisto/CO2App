import { NextPage } from 'next'
import photo from '@/assets/photos/calculate.svg'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { CalculateStyle } from './style'
import { options } from '@/utils/estimationOptions'

const Calculate: NextPage = () => {
  return (
    <CalculateStyle>
      <div>
        <Header />
        <h1>Cálculo de emissões de carbono</h1>
        <form>
          <label htmlFor='activity'>Atividade:</label>
          <select id='activity'>
            <option value='' key='' selected hidden disabled>
              Selecione uma atividade
            </option>
            {options.map((op) => {
              return (
                <option value={op.value} key={op.id}>
                  {op.name}
                </option>
              )
            })}
          </select>
        </form>
      </div>
      <Image src={photo} />
    </CalculateStyle>
  )
}

export default Calculate
