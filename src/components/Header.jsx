import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import Button from './Button';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Initial state changed to false

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full sm:px-24 px-4 h-[100px] flex justify-between items-center">
      <img src={logo} alt="logo" className="w-[150px]" />
      <ul className="sm:flex hidden justify-around items-center w-5/12 font-BeVietnam text-FmarineBlue text-lg cursor-pointer font-bold">
        <li>Pricing</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <div className="w-2/12 sm:flex justify-end hidden">
        <Button width="full">Get Started</Button>
      </div>
      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex items-center" onClick={toggleMobileMenu}>
        <img src={mobileMenuOpen ? close : hamburger} alt="hamburger menu" />
      </div>
      {/* Mobile Menu Hidden on larger screens */}
      {mobileMenuOpen && ( // Render the menu only if mobileMenuOpen is true
        <div className="w-full sm:hidden flex justify-center absolute top-20">
          <ul className="w-[340px] flex flex-col bg-white text-FmarineBlue py-6 gap-4 font-bold text-center font-BeVietnam shadow-md rounded-md">
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
