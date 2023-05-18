import React, { useRef } from 'react';
import './parallaxPage.css';
import { motion, useInView } from 'framer-motion';
import {Parallax} from 'react-parallax'
import mosqueImage from '../../assetsparallax/firstMosque.jpeg';
import secondmosqueImage from '../../assetsparallax/secondMosque.jpeg';
import thirdmosqueImage from '../../assetsparallax/thirdMosque.jpeg';
import fourthmosqueImage from '../../assetsparallax/fourthMosque.jpeg';


function ParallaxPage() {

  const ref = useRef(null);
  const inView = useInView(ref);
  
  

  return (
    <div className='parallax-page'>

      <Parallax strength={250} bgImage={mosqueImage}>
      <div className="content">

      <motion.h1
            className="title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            Islamitische Architectuur
        </motion.h1>
        <motion.h1
            className="subtitle"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ delay: 1, duration: 1 }}
        >
            Dompel jezelf onder in de pracht van Islamitische bouwkunst!
        </motion.h1>

        
      </div>  
      </Parallax>

      <Parallax strength={200} blur={{min:-5, max:10}} bgImage={secondmosqueImage}>
      <div className="content" ref={ref}>
          <motion.div 
            className="long-text-content"
            initial={{ opacity: 0 , y: 50}}
            animate={{ opacity: inView ? 1 : 0 ,y: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 5 }}
          >
            De term islamitische architectuur of islamitische bouwkunst wordt gebruikt om de architectuur aan te duiden van gebouwen die een relatie hebben met de islam of die voortkomen uit de islamitische cultuur. Het gaat daarbij zowel om gebouwen met een religieuze functie als met een wereldlijke functie. De moskee, het fort, het paleis en de tombe zijn bouwwerken die veel voorkomen in de islamitische architectuur.
          </motion.div>
        </div>  
      </Parallax>

      <Parallax strength={300} bgImage={thirdmosqueImage}>
      <div className="content">
        <div className="text-content">Islamitische Architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={0} bgImage={fourthmosqueImage}>
      <div className="content">
        <div className="text-content">Islamitische Architectuur</div>
      </div>  
      </Parallax>

          
      </div>
  );
}

export default ParallaxPage;
