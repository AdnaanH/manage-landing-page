import logo from '../assets/images/logo.svg'
import Button from './Button'

const Header = () => {
  return (
    <header className="w-full px-24 h-[100px] flex justify-between items-center">
        <img src={logo} alt="logo" className='w-[150px]' />
        <ul className="flex justify-around items-center w-5/12 font-BeVietnam text-FmarineBlue text-lg cursor-pointer font-bold">
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
        <Button width='2/12'>Get Started</Button>
    </header>
  )
}

export default Header
