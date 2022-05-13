import './Slider.css';

import React from 'react';

const slidesInfo = [
  {
    src: 'https://cdn.pixabay.com/photo/2020/10/15/14/42/man-5656933_960_720.png',
    alt: 'Project 1',
    desc: 'Heroes APP',
    href: 'https://paniser.github.io/hero-app',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png',
    alt: 'Project 2',
    desc: 'Gif Expert APP',
    href: 'https://paniser.github.io/react-gifexpertapp/',
  },
];

const slides = slidesInfo.map((slide) => (
  <div className='slide-container'>
    <a href={slide.href}>
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className='slide-desc'>
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
