import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineResturantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="Resturant" />
    </div>
    <ul className="app_navbar-links">
      <li className='p__opensans'> <a href="#home">Home</a></li>
      <li className='p__opensans'> <a href="#menu">Menu</a></li>
      <li className='p__opensans'> <a href="#about us">About Us</a></li>
      <li className='p__opensans'> <a href="#award">Awards</a></li>
      <li className='p__opensans'> <a href="#contact">contact</a></li>
    </ul>

    <div className='app__navbar-login'> <a href="#login" className='p__opensans'>Login In / Register</a></div>
    <div></div>
    <div className='app__navbar-login'> <a href="#login" className='p__opensans'>Book a Table</a></div>
  </nav>
);

export default Navbar;
