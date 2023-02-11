import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { BsWhatsapp } from 'react-icons/bs';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Sobre Nos</h1>
        <img src={images.llave} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
          Somos <b> cerrajeros profesionales</b> con más de 15 años de
          experiencia brindando servicios de primer nivel a nuestros clientes.
          Nuestro valor fundamental es la excelencia y la diligencia para servir
          y deleitar a nuestros clientes.
        </p>
        <button type='button' className='custom__button'>
          <BsWhatsapp fontSize={27} className='contact__icon' />
          693006812
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.llave_centro} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Ubicaciones</h1>
        <img src={images.llave} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
          Entregamos nuestro servicio rápido dentro de <br></br>{' '}
          <b>Barcelona,</b>
          <br></br>
          <b>Manresa</b>
          <b> Sant Cugat del Vallès</b>
          <b> Sabadell,</b>
          <b>
            Terassa <br></br>
          </b>
          y alrededores <br></br>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
