import React from 'react';
import './parallaxPage.css';
import IntroParallax from '../../components/ParallaxComponents/introParallax.jsx';
import FirstMainParallax from '../../components/ParallaxComponents/firstMainParallax.jsx';
import SecondMainParallax from '../../components/ParallaxComponents/secondMainParallax.jsx';
import ThirdMainParallax from '../../components/ParallaxComponents/thirdMainParallax.jsx';
import FourthMainParallax from '../../components/ParallaxComponents/fourthMainParallax.jsx';
import OutroParallax from '../../components/ParallaxComponents/outroParallax.jsx';




function ParallaxPage() {

  return (
    <div className='parallax-page'>
        <IntroParallax />
        <FirstMainParallax />
        <SecondMainParallax />
        <ThirdMainParallax/>
        <FourthMainParallax/>
        <OutroParallax/>
      </div>
  );
}

export default ParallaxPage;
