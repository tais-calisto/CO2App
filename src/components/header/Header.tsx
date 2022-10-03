import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo/co2Logo.svg'
import { HeaderStyle } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div className='logo'>
        <Image src={logo} />
        <h4>CO2App</h4>
      </div>
      <div className='links'>
        <Link href={'/calculate'}>Calculadora</Link>
        <Link href={'/info'}>Saiba mais</Link>
      </div>
    </HeaderStyle>
  )
}

export default Header
