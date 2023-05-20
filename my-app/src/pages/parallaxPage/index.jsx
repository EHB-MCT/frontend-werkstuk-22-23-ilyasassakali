import React from 'react';
import './parallaxPage.css';
import IntroParallax from '../../components/ParallaxComponents/introparallax/index.jsx';
import FirstMainParallax from '../../components/ParallaxComponents/firstmainparallax/index.jsx';





function ParallaxPage() {

  return (
    <div className='parallax-page'>
        <IntroParallax />
        <FirstMainParallax />

        

          
      </div>
  );
}

export default ParallaxPage;
