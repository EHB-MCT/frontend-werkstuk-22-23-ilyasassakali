import React,{ useState,useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { motion,useAnimation ,AnimatePresence} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function ThirdMainParallax() {
    const [isIntroVisible, setIsIntroVisible] = useState(true);

  const handleGoClick = () => {
    setIsIntroVisible(false);
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
  });
  const titleAnimation = useAnimation();

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false,
  });
  const buttonAnimation = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleAnimation.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      titleAnimation.start({ y: -200, opacity: 0, transition: { duration: 1 } });
    }

    if (buttonInView) {
      buttonAnimation.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      buttonAnimation.start({ y: 200, opacity: 0, transition: { duration: 1 } });
    }
  }, [titleInView, buttonInView]);

 
  return (
    <div className="thirdmain">

      <Parallax strength={400} bgImageStyle={{zIndex: -1}}>
      <AnimatePresence>

      {isIntroVisible && 
          <motion.div className="intro-foreground"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
          transition={{ delay: 2.5, duration: 2.5 }}>
          <motion.h1
            className="title"
            initial={{ opacity: 1, y: -100 }}
            animate={titleAnimation}
            ref={titleRef}
          >
            Rondleiding doorheen Al-Masjid al-Haram
            <br />
            Grootste moskee ter wereld!
          </motion.h1>
          <motion.button
            className="startButton"
            onClick={handleGoClick}
            initial={{ opacity: 1, y: 100 }}
            animate={buttonAnimation}
            ref={buttonRef}
          >
            Start
          </motion.button>
        </motion.div>
        
        }
        </AnimatePresence>


            <div className="content">
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Great Mosque of Mecca"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen"
              width="100%"
              height="100%"
              src="https://sketchfab.com/models/014cf5f9545b4e9c89f461c114a0c2f4/embed?autostart=1&annotations_visible=1&preload=1"
            ></iframe>
          </div>
        </div>
      </Parallax>

    </div>
  );
}

export default ThirdMainParallax;