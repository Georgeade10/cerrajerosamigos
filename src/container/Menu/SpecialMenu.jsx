import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import ServiceBox from '../../components/ServiceBox';
import { BsWhatsapp } from 'react-icons/bs';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='24h A Tu Servicio' />
      <h1 className='headtext__cormorant'> Servicio</h1>
    </div>
    <div className='Service-flex'>
      <ServiceBox
        title=' Corte de llaves '
        description='reparación de cerraduras rotas o averiadas'
        src={images.repairs}
      />
      <ServiceBox
        title='Reparación de cerraduras'
        description='reparación de cerraduras rotas o averiadas'
        src={images.repairs}
      />
      <ServiceBox
        title='Instalación de cerraduras'
        description='instalación de cerraduras nuevas en viviendas, comercios y vehículos'
        src={images.installation}
      />
      <ServiceBox
        title='Servicios de cierre de emergencia'
        description='apertura de puertas cerradas cuando el propietario ha sido bloqueado'
        src={images.emmergency}
      />
      <ServiceBox
        title='Sistemas de amaestramiento'
        description='diseño e instalación de un sistema de cerraduras que se puedan abrir con una sola llave'
        src={images.keyIcon}
      />
      <ServiceBox
        title='Instalación y reparación de cajas fuertes'
        description='instalación y mantenimiento de cajas fuertes y otros dispositivos de almacenamiento de seguridad'
        src={images.safety}
      />
      <ServiceBox
        title='Servicios de automoción'
        description='programación de llaves con transpondedor, extracción de llaves rotas y apertura de puertas de automóviles.'
        src={images.automotive}
      />

      <ServiceBox
        title='Reparación de Persianas'
        description='instalación y mantenimiento de cajas fuertes y otros dispositivos de almacenamiento de seguridad'
        src={images.window}
      />
      <ServiceBox
        title='Electricidad y fontaneria'
        description='mantenimiento y reparación de sistemas de agua y electricidad. '
        src={images.electricity}
      />
    </div>

    <div style={{ marginTop: 15 }}>
      <div className='custom__button-flex'>
        <button type='button' className='custom__button'>
          <BsWhatsapp fontSize={27} className='contact__icon' />
          693006812
        </button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
