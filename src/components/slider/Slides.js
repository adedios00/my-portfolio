import './Slider.css';

import React from 'react';

const slidesInfo = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png',
    alt: 'Project 1',
    desc: 'Gif Expert APP',
    href: 'https://paniser.github.io/react-gifexpertapp/',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
    alt: 'Project 2',
    desc: 'GifExpertApp',
    href: 'https://paniser.github.io/react-gifexpertapp/',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
    alt: 'Project 3',
    desc: 'Project 3',
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
