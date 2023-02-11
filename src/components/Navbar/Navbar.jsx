import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiHouseKeys } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'> Inicio </a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Servicios</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'> Sobre nosotros </a>
        </li>

        <li className='p__opensans'>
          <a href='#awards'> Valores </a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'> Contacta con nosotros </a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          Pide una cita
        </a>
        <div />
        <a href='https://wa.me/message/SHKPI3H6X3KEO1' className='p__opensans'>
          Wsp / Tel +34 693 00 68 12
        </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiHouseKeys
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li>
                <a href='#home' onClick={() => setToggleMenu(false)}>
                  Inicio
                </a>
              </li>
              <li>
                <a href='#about' onClick={() => setToggleMenu(false)}>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href='#menu' onClick={() => setToggleMenu(false)}>
                  Servicio
                </a>
              </li>
              <li>
                <a href='#awards' onClick={() => setToggleMenu(false)}>
                  Valores
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setToggleMenu(false)}>
                  Contacta Con Nosotros
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
