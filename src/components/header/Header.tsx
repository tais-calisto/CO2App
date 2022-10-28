import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo/co2Logo.svg'
import { HeaderStyle } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div className='logo'>
        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
        <Image src={logo} alt='C02App Logo' />
        <h4>CO2App</h4>
      </div>
      <div className='links'>
        <Link href={'/calculate'}>Calculadora</Link>
      </div>
    </HeaderStyle>
  )
}

export default Header
