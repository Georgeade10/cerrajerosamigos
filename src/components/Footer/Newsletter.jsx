import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_d336jv6',
        'template_vzi8iae',
        form.current,
        'lhlBdp6tWAuvNxRzh'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='pide una cita' />
        <h1 className='headtext__cormorant'>Mandanos un mensaje</h1>
        <p className='p__opensans'>
          Nosotros responderemos lo más rápido posible!
        </p>
      </div>
      <div className='cita-Form'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type='text' name='user_name' />
          <label>Correo electronico</label>
          <input type='email' name='user_email' />
          <label>Mensaje</label>
          <textarea name='message' />
          <input type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
