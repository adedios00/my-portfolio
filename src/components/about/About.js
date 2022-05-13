import './About.css';

import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Sobre mí</h3>
        <p>
          Apasionado del desarrollo web y la tecnología en general. Desde
          pequeño siempre he estado metido en el mundo de la informática.
        </p>
      </div>
      <div className='about-img'>
        <img
          src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
          alt='about'
        />
      </div>
    </div>
  );
};

export default About;
