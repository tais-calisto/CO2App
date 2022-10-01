import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo/co2Logo.svg'

const Header = () => {
  return (
    <header>
      <div>
        <Image src={logo} />
        <h4>CO2App</h4>
      </div>
      <Link href={'/calculate'}>Calculadora</Link>
      <Link href={'/info'}>Saiba mais</Link>
    </header>
  )
}

export default Header
