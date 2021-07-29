import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import './style.css';

const Navbar = () => {
  const scrollEvent = () => {
    document
      .querySelector('.app_bar')
      .classList.toggle('scrolling', window.scrollY > 50);
  };

  const hamburgerOnClick = async () => {
    document.querySelector('.nav_bar').classList.toggle('reveal');
  };

  const linkOnClick = () => {
    if (document.querySelector('.nav_bar').classList.contains('reveal')) {
      document.querySelector('.nav_bar').classList.remove('reveal');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
  }, []);

  return (
    <header className='app_bar'>
      <button className='app_menu_btn' onClick={hamburgerOnClick}>
        <i className='fas fa-bars app_menu_icon'></i>
      </button>
      <ul className='nav_bar'>
        <li className='navbar_item'>
          <NavLink to='/' activeClassName='active' exact onClick={linkOnClick}>
            Home
          </NavLink>
        </li>
        <li className='navbar_item'>
          <NavLink
            to='/favorite'
            activeClassName='active'
            onClick={linkOnClick}
          >
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
