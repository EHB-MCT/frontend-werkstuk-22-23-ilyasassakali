import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Parallax} from 'react-parallax'
import verspreiding from '../../assetsparallax/verspreiding.gif';
import { TypeAnimation } from 'react-type-animation';

function FirstMainParallax() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if(inView) {
      setStartTyping(true);
    }
  }, [inView]);

  return (
    <div className="firstmain" ref={ref}>
      <Parallax strength={100} blur={{min:-5, max:10}} bgImage={verspreiding}>
        <div className="content" >
          <div className="text-section">
            <motion.div className="long-text-content">
              {startTyping && (
                <TypeAnimation
                  sequence={[
                    'Sinds het ontstaan van de islam in de 7e eeuw heeft de islam zich over de hele wereld verspreid. De kern van de islamitische beschaving is het Midden-Oosten, maar het gebied waar islam de belangrijkste religie is, strekt zich uit van Marokko in het westen tot China en Indonesië in het oosten.In al die delen van de wereld heeft de islamitische architectuur elementen gecombineerd. Traditionele invloeden op de islamitische architectuur zijn de culturen van het Oude Griekenland, het Byzantijnse Rijk en haar vroegchristelijke bouwkunst, het Perzische Rijk met het zoroastrisme en de culturen van India en China.',
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
        </div>  
      </Parallax>
    </div>
  );
}

export default FirstMainParallax;
