import './Cover.css';

import React from 'react';

const Cover = () => {
  return (
    <div className='cover-container'>
      <video
        className='video'
        src='https://i.imgur.com/cpdeafB.mp4'
        autoPlay
        loop
        muted
      />
      <h1>Antonio Francisco de Dios Moreno</h1>
      <p>React Front-end Developer</p>
    </div>
  );
};

export default Cover;
