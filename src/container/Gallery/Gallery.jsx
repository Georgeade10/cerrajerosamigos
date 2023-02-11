import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsWhatsapp } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='24h a tu servicio' />
        <h1 className='headtext__cormorant'>Cerrajeria Amigos</h1>
        <p
          className='p__opensans'
          style={{ color: '#AAAAAA', marginTop: '2rem' }}
        >
          Si perdió las llaves de su automóvil o de su casa y está atascado, no
          entre en pánico, estamos a solo una llamada de distancia. Respondemos
          rápido y resolveremos cualquier problema por usted.
        </p>
        <button type='button' className='custom__button'>
          <BsWhatsapp fontSize={27} className='contact__icon' />
          693006812
        </button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03].map(
            (image, index) => (
              <div
                className='app__gallery-images_card flex__center'
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt='gallery_image' />
              </div>
            )
          )}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
