import React, { /*useRef,*/useState,useEffect } from 'react';
import { motion, /*useScroll, useTransform */} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Parallax} from 'react-parallax'
import mosqueImage from '../../assetsparallax/firstMosque.jpeg';
import secondmosqueImage from '../../assetsparallax/secondMosque.jpeg';
import thirdmosqueImage from '../../assetsparallax/thirdMosque.jpeg';
import fourthmosqueImage from '../../assetsparallax/fourthMosque.jpeg';
import fivemosqueImage from '../../assetsparallax/fiveMosque.jpeg';
import sixmosqueImage from '../../assetsparallax/sixMosque.jpeg';
import sevenmosqueImage from '../../assetsparallax/sevenMosque.jpeg';
import { TypeAnimation } from 'react-type-animation';

 

 
function IntroParallax() {
  const [check, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if(inView) {
      setStartTyping(true);
    }
  }, [inView]);

  //const ref = useRef(null);
  //const { scrollYProgress } = useScroll();
  //const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  //const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  const [refff1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });

  const [refff2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });

  const [refff3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });
  
  const [refff4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });
  
  const [refff5, inView5] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });
  
  const [refff6, inView6] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });

  
  

  return (
        <div className="intro">

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
            //style={{ scale }}
        >
            Dompel jezelf onder in de pracht van Islamitische bouwkunst!
        </motion.h1>

        
      </div>  
      </Parallax>

      <Parallax strength={200} blur={{min:-5, max:10}} bgImage={secondmosqueImage}>
        <div className="content" ref={check}>
        <motion.div className="long-text-content">
              {startTyping && (
                <TypeAnimation
                  sequence={[
                    'De term islamitische architectuur of islamitische bouwkunst wordt gebruikt om de architectuur aan te duiden van gebouwen die een relatie hebben met de islam of die voortkomen uit de islamitische cultuur. Het gaat daarbij zowel om gebouwen met een religieuze functie als met een wereldlijke functie. De moskee, het fort, het paleis en de tombe zijn bouwwerken die veel voorkomen in de islamitische architectuur.',
                    1000
                  ]}
                  speed={60}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '30px', display: 'block' }}
                />
              )}
            </motion.div>
          
        </div>  
      </Parallax>

      <Parallax strength={300} bgImage={thirdmosqueImage}>
        <div className="content">
          <motion.div ref={refff1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1:0, y: inView1 ? 0:100 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-content">Sheikh Zayed moskee</motion.div>
          <motion.div className="left-text-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView1 ? 1:0, x: inView1 ? 0:-100 }}
          transition={{ delay: 0.2, duration: 1 }}>
            Verenigde Arabische Emiraten<br/>Abu Dhabi<br/>Islamitische architectuur
          </motion.div>
        </div>  
      </Parallax>

     
      <Parallax strength={250} bgImage={fourthmosqueImage}>
        <div className="content">
          <motion.div ref={refff2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1:0, y: inView2 ? 0:100 }}
          transition={{ delay: 0.2, duration: 1 }} className="text-content">Hassan II-moskee</motion.div>
          <motion.div className="left-text-content" initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView2 ? 1:0, x: inView2 ? 0:-100 }}
          transition={{ delay: 0.2, duration: 1 }}>Marokko<br/>Casablanca<br/>Moorse architectuur</motion.div>
        </div>  
      </Parallax>

      <Parallax strength={250} bgImage={secondmosqueImage}>
        <div className="content">
          <motion.div ref={refff3}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView3 ? 1:0, y: inView3 ? 0:100 }}
            transition={{ delay: 0.2, duration: 1 }} className="text-content">Kristalmoskee</motion.div>
          <motion.div className="left-text-content" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView3 ? 1:0, x: inView3 ? 0:-100 }}
            transition={{ delay: 0.2, duration: 1 }}>Maleisië<br/>Terengganu<br/>Mogol-architectuur</motion.div>
        </div>  
      </Parallax> 

      <Parallax strength={250} bgImage={fivemosqueImage}>
        <div className="content">
          <motion.div ref={refff4}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView4 ? 1:0, y: inView4 ? 0:100 }}
            transition={{ delay: 0.2, duration: 1 }} className="text-content">Hagia Sophia</motion.div>
          <motion.div className="left-text-content" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView4 ? 1:0, x: inView4 ? 0:-100 }}
            transition={{ delay: 0.2, duration: 1 }}>Turkije<br/>İstanbul<br/>Ottomaanse architectuur</motion.div>
        </div>  
      </Parallax>

      <Parallax strength={250} bgImage={sixmosqueImage}>
        <div className="content">
      <motion.div ref={refff5}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView5 ? 1:0, y: inView5 ? 0:100 }}
        transition={{ delay: 0.2, duration: 1 }} className="text-content">Nasir al Molkmoskee</motion.div>
      <motion.div className="left-text-content" initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView5 ? 1:0, x: inView5 ? 0:-100 }}
        transition={{ delay: 0.2, duration: 1 }}>Iran<br/>Shiraz<br/>Iraanse architectuur</motion.div>
        </div>  
    </Parallax>

    <Parallax strength={250} bgImage={sevenmosqueImage}>
  <div className="content">
    <motion.div ref={refff6}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView6 ? 1:0, y: inView6 ? 0:100 }}
      transition={{ delay: 0.2, duration: 1 }} className="text-content">Omajjadenmoskee</motion.div>
    <motion.div className="left-text-content" initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView6 ? 1:0, x: inView6 ? 0:-100 }}
      transition={{ delay: 0.2, duration: 1 }}>Syrië<br/>Damascus<br/>Omajjadische architectuur</motion.div>
  </div>  
</Parallax>
</div>
          
      
  );
}

export default IntroParallax;
