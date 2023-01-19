import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
        {/* eslint-disable-next-line */}
        <iframe
          title='mapMarker'
          src='https://maps.google.com/maps?q=mplussoft pune&t=&z=10&ie=UTF8&iwloc=&output=embed'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
    </div>
  )
}

export default Map
