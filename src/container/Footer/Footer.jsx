import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contacta con nosotros</h1>
        <p className='p__opensans'>
          Avenida Madrid.1blk B,5 / 2.08227 Terrassa
        </p>
        <p className='p__opensans'>+34 693 00 68 12</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.cerranjeria_logo} alt='footer_logo' />
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>
        2023 Cerrajeros Amigos. todos los derechos reservados.
      </p>
    </div>
  </div>
);

export default Footer;
