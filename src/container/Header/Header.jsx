import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import { BsWhatsapp } from 'react-icons/bs';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='24h A tu Servicio' />
      <h1 className='app__header-h1'>Rapido y eficiente cerrajeros</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        ¡Solo llámenos y estaremos allí! <br></br> Ahorre tiempo y dinero.
        <br></br>
        Satisfacción garantizada para cierres de casas y automóviles.{' '}
      </p>
      <div className='custom__button-flex'>
        <button type='button' className='custom__button'>
          <BsWhatsapp fontSize={27} className='contact__icon' />
          693006812
        </button>
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.heroImage} alt='header_img' />
    </div>
  </div>
);

export default Header;
