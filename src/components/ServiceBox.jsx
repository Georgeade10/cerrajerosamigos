import React from 'react';

const ServiceBox = (props) => (
  <div className='service-container'>
    <div className='gold-banner'>
      <div className='box-flex'>
        <div style={{ margin: 'auto' }}>
          <img className='service-icon' src={props.src} alt={props.alt} />
        </div>
        <h3>
          <b>{props.title}</b>
        </h3>
      </div>
    </div>

    <div className='service-Description'>
      <p>{props.description}</p>
    </div>
  </div>
);
export default ServiceBox;
