import React from 'react';
import './parallaxPage.css';
import IntroParallax from '../../components/ParallaxComponents/introParallax.jsx';
import FirstMainParallax from '../../components/ParallaxComponents/firstMainParallax.jsx';
import SecondMainParallax from '../../components/ParallaxComponents/secondMainParallax.jsx';
import ThirdMainParallax from '../../components/ParallaxComponents/thirdMainParallax.jsx';





function ParallaxPage() {

  return (
    <div className='parallax-page'>
        <IntroParallax />
        <FirstMainParallax />
        <SecondMainParallax />
        <ThirdMainParallax/>


        

          
      </div>
  );
}

export default ParallaxPage;
