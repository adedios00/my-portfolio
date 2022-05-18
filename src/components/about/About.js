import './About.css';

import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Sobre mí</h3>
        <p>
          Apasionado del desarrollo web y la tecnología en general. Empecé
          realizando mis proyectos en Wordpress hace 10 años y después pasé a
          estudiar programación. Me gusta realizar aplicaciones que sean útiles
          para los demás.
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
