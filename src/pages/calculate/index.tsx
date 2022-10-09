import { NextPage } from 'next'
import photo from '@/assets/photos/calculate.svg'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { CalculateStyle } from './style'
import { options } from '@/utils/estimationOptions'
import { useRef, useState } from 'react'

const Calculate: NextPage = () => {
  const selection = useRef<null | HTMLSelectElement>(null)
  const [activity, setActivity] = useState<string | undefined>('')

  const handleChange = () => {
    setActivity(selection.current?.value)
  }

  return (
    <CalculateStyle>
      <div>
        <Header />
        <h1>Cálculo de emissões de carbono</h1>
        <form>
          <label htmlFor='activity'>Atividade:</label>
          <select
            id='activity'
            ref={selection}
            onChange={handleChange}
            defaultValue={''}
          >
            <option value='' key='' hidden disabled>
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
          {activity === 'electricity' ? (
            <>
              <label htmlFor='electricity_value'>Consumo {'(em kwh)'}:</label>
              <input type='number' id='electricity_value' />
            </>
          ) : activity === 'flight' ? (
            <>
              <label htmlFor='passengers'>Passageiros</label>
              <input type='number' id='passengers' />
              <label htmlFor='departure_airport'>Aeroporto de saída:</label>
              <input type='text' id='departure_airport' />
              <label htmlFor='destination_airport'>Aeroporto de chegada:</label>
              <input type='text' id='destination_airport' />
            </>
          ) : activity === 'shipping' ? (
            <>
              <label htmlFor='weight_value'>
                Peso da mercadoria {'(em kg)'}:
              </label>
              <input type='number' id='weight_value' />
              <label htmlFor='distance_unit'>Distância {'(em km)'}</label>
              <input type='number' id='distance_unit' />
              <fieldset
                onChange={() => {
                  console.log('oi')
                }}
              >
                <legend>Meio de transporte:</legend>
                <div>
                  <input
                    type='radio'
                    id='ship'
                    name='transport_method'
                    value='ship'
                  />
                  <label htmlFor='ship'>Marítmo</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='train'
                    name='transport_method'
                    value='train'
                  />
                  <label htmlFor='train'>Ferroviário</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='truck'
                    name='transport_method'
                    value='truck'
                  />
                  <label htmlFor='truck'>Rodoviário</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='plane'
                    name='transport_method'
                    value='plane'
                  />
                  <label htmlFor='plane'>Aéreo</label>
                </div>
              </fieldset>
            </>
          ) : activity === 'vehicle' ? (
            <>
              <label htmlFor='distance_value'>
                Distância percorrida {'(em km)'}
              </label>
              <input type='number' id='distance_value' />
              <p>Vehicle makes request</p>
            </>
          ) : null}
          <button>Calcular</button>
        </form>
      </div>
      <Image src={photo} />
    </CalculateStyle>
  )
}

export default Calculate
