import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import './style.css';

const Navbar = () => {
  // animated app-bar purpose
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('.app_bar')
        .classList.toggle('scrolling', window.scrollY > 0);
    });
  }, []);

  return (
    <header className='app_bar'>
      <div className='logo'>
        <h1>FancyDish</h1>
      </div>
      <ul className='nav_bar'>
        <li className='navbar_item'>
          <NavLink to='/' activeClassName='active' exact>
            Home
          </NavLink>
        </li>
        <li className='navbar_item'>
          <NavLink to='/favorite' activeClassName='active'>
            Favorite
          </NavLink>
        </li>
        <li className='navbar_item'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/pramudya-indra/'
          >
            About Us
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
