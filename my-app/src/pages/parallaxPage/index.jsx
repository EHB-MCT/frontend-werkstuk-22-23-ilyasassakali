import React, { useRef } from 'react';
import './parallaxPage.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Parallax} from 'react-parallax'
import mosqueImage from '../../assetsparallax/firstMosque.jpeg';
import secondmosqueImage from '../../assetsparallax/secondMosque.jpeg';
import thirdmosqueImage from '../../assetsparallax/thirdMosque.jpeg';
import fourthmosqueImage from '../../assetsparallax/fourthMosque.jpeg';
import fivemosqueImage from '../../assetsparallax/fiveMosque.jpeg';
import sixmosqueImage from '../../assetsparallax/sixMosque.jpeg';
import sevenmosqueImage from '../../assetsparallax/sevenMosque.jpeg';



function ParallaxPage() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  

  
  

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
            style={{ scale }}
        >
            Dompel jezelf onder in de pracht van Islamitische bouwkunst!
        </motion.h1>

        
      </div>  
      </Parallax>

      <Parallax strength={200} blur={{min:-5, max:10}} bgImage={secondmosqueImage}>
        <div className="content" ref={ref}>
          <motion.div 
            className="long-text-content"
            style={{ scale,opacity }}
          >
            De term islamitische architectuur of islamitische bouwkunst wordt gebruikt om de architectuur aan te duiden van gebouwen die een relatie hebben met de islam of die voortkomen uit de islamitische cultuur. Het gaat daarbij zowel om gebouwen met een religieuze functie als met een wereldlijke functie. De moskee, het fort, het paleis en de tombe zijn bouwwerken die veel voorkomen in de islamitische architectuur.
          </motion.div>
        </div>  
      </Parallax>

      <Parallax strength={300} bgImage={thirdmosqueImage}>
      <div className="content">
        <div className="text-content">Sheikh Zayed moskee</div>
        <div className="left-text-content">Verenigde Arabische Emiraten<br/>Abu Dhabi<br/>Islamitische architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={250} bgImage={fourthmosqueImage}>
      <div className="content">
        <div className="text-content">Hassan II-moskee</div>
        <div className="left-text-content">Marokko<br/>Casablanca<br/>Moorse architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={250} bgImage={secondmosqueImage}>
      <div className="content">
        <div className="text-content">Kristalmoskee</div>
        <div className="left-text-content">Maleisië<br/>Terengganu<br/>Mogol-architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={250} bgImage={fivemosqueImage}>
      <div className="content">
        <div className="text-content">Hagia Sophia</div>
        <div className="left-text-content">Turkije<br/>İstanbul<br/>Ottomaanse architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={250} bgImage={sixmosqueImage}>
      <div className="content">
        <div className="text-content">Nasir al Molkmoskee</div>
        <div className="left-text-content">Iran<br/>Shiraz<br/>Iraanse architectuur</div>
      </div>  
      </Parallax>

      <Parallax strength={250} bgImage={sevenmosqueImage}>
      <div className="content">
        <div className="text-content">Omajjadenmoskee</div>
        <div className="left-text-content">Syrië<br/>Damascus<br/>Omajjadische architectuur</div>
      </div>  
      </Parallax>

          
      </div>
  );
}

export default ParallaxPage;
