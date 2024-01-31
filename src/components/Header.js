import logo from '../images/logo.svg'

function Header() {
  return (
    <header>
      <nav className='sm:px-28 px-4 flex relative justify-between items-center h-36 w-full'>
        <img src={logo} alt="" />
        <ul className='flex gap-6'>
          <li className='text-base font-normal'>Pricing</li>
          <li className='text-base font-normal'>Product</li>
          <li className='text-base font-normal'>About us</li>
          <li className='text-base font-normal'>Careers</li>
          <li className='text-base font-normal'>Community</li>
        </ul>
        <button className='bg-brightRed z-50 px-6 py-2 rounded-3xl text-white text-base font-medium'>Get started</button>
      </nav>
    </header>
  )
}

export default Header