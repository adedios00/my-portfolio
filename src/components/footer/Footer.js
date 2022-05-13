import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info'>
        <h1>Antonio</h1>
        <p>Jaén, España</p>
      </div>
      <div className='footer-contact'>
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className='footer-sns'>
        <div className='design-by'></div>
        <div className='sns-links'>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
