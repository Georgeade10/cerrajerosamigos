import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='24h a tu servicio' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Encuéntranos
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Avenida Madrid.1blk b,5 / 2.08227 terrassa
        </p>
      </div>
      <button
        type='button'
        className='custom__button'
        style={{ marginTop: '2rem' }}
      >
        Visítanos
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findUsImg} alt='finus_img' />
    </div>
  </div>
);

export default FindUs;
