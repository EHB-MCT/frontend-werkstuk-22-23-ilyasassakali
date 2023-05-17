import React from 'react';
import './parallaxPage.css';
import { motion } from 'framer-motion';
import mosqueImage from '../../assetsparallax/firstMosque.jpeg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function ParallaxPage() {
  return (
    <Parallax pages={4}>
    

        <ParallaxLayer>
        <div className='parallax-page'>
        <motion.div 
            className="image-container"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 20
            }} 
        >
            <img src={mosqueImage} alt="Mosque" />
        </motion.div>
        <motion.h1
            className="title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
        >
            Islamitische Architectuur
        </motion.h1>
        </div>
        </ParallaxLayer>
        

        <ParallaxLayer offset={1}>
          <h1>section 2</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
        <h1>section 3</h1>

        </ParallaxLayer>

        <ParallaxLayer offset={3}>
        <h1>section 4</h1>

        </ParallaxLayer>


    
    </Parallax>

  );
}

export default ParallaxPage;
