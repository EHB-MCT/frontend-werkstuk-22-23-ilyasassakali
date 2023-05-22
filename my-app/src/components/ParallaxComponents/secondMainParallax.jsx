import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Parallax} from 'react-parallax'
import kaabaa from '../../assetsparallax/kaabaa.jpeg';
import kairoun from '../../assetsparallax/kairoun.jpeg';
import aqsa from '../../assetsparallax/aqsa.jpeg';
import zhar from '../../assetsparallax/zhar.jpeg';
import hambra from '../../assetsparallax/hambra.jpeg';
import registan from '../../assetsparallax/registan.jpeg';






function SecondMainParallax() {

    const [ref1, inView1] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });
    
      const [ref2, inView2] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });

      const [ref3, inView3] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });

      const [ref4, inView4] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });

      const [ref5, inView5] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });

      const [ref6, inView6] = useInView({
        triggerOnce: false,
        threshold: 0.8
      });
  

  return (
    <div className="secondmain" >

<Parallax strength={-400} bgImage={kaabaa} >
        <div className="image-overlay" />
        <div className="content">    
          <div className="text-section">
            <motion.div 
              ref={ref1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView1 ? 1:0, x: inView1 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
              De Kaäba het centrale heiligdom van de islam en het staat in de Grote Moskee in het bedevaartsoord Mekka. Het staat ook wel bekend als Bayt Allah ("Huis van God"). Als onderdeel van de hadj, de bedevaart naar Mekka, lopen de bedevaartgangers (pelgrims) zeven keer rond de Kaäba. Ook bepaalt volgens de tweede soera van de Koran de Kaäba de islamitische gebedsrichting - een moslim bidt altijd in de richting van de Kaäba, dat is dus, als die niet in Mekka is, in de richting van Mekka.
            </motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={kaabaa} 
              alt="Kaabaa" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView1 ? 1:0, x: inView1 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 
            />
          </div>
        </div>  
      </Parallax>

      <Parallax strength={400} bgImage={kairoun}>
        <div className="image-overlay" />
        <div className="content" >
          <div className="text-section">
            <motion.div 
              ref={ref2}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView2 ? 1:0, x: inView2 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
              De grote moskee van Kairouan was ooit de grootste moskee van Noord-Afrika. Het is gebouwd in 670 n. Chr. en stond model voor latere moskeeën in de Maghreb. De moskee beslaat een oppervlakte van 9.000 vierkante meter. De moskee heeft een grote binnenplaats omgeven door een zuilengalerij. De 31,5 meter hoge vierkante minaret is mogelijk de oudste minaret ter wereld. Sinds 1988 staat de moskee samen met de stad Kairouan op de Werelderfgoedlijst van UNESCO.
            </motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={kairoun} 
              alt="Kairoun" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView2 ? 1:0, x: inView2 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 

            />
          </div>
        </div>  
      </Parallax>

      <Parallax strength={-400} bgImage={aqsa}>
        <div className="image-overlay" />
        <div className="content" >
          <div className="text-section">
            <motion.div 
              ref={ref3}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView3 ? 1:0, x: inView3 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
De Rotskoepel , is een islamitische schrijn op de Tempelberg/Haram al-Sharif in de Oude Stad Jeruzalem. De Rotskoepel is gebouwd tussen 688 en 692. Deze koepel domineert het gezicht van Jeruzalem al ruim 1300 jaar. Het gebouw is geen moskee maar een historische islamitische gedenkplaats. Aangezien hij heden ten dage ook als moskee dienst doet, wordt soms de benaming Rotskoepelmoskee gebruikt. De Al-Aqsamoskee, een van de eerste en heiligste moskeeën van de islam, bevindt zich naast de koepel. De Rotskoepel is als 'koepel op de rots' gebouwd door kalief Abd al-Malik van de Omajjaden uit Damascus. </motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={aqsa} 
              alt="aqsa" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView3 ? 1:0, x: inView3 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 

            />
          </div>
        </div>  
      </Parallax>

      <Parallax strength={400} bgImage={zhar}>
        <div className="image-overlay" />
        <div className="content" >
          <div className="text-section">
            <motion.div 
              ref={ref4}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView4 ? 1:0, x: inView4 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
De Al-Azhar-universiteit, of Al-Azhar Al-Shareef (letterlijk "De Edele Al-Azhar"), is een universiteit in Caïro, Egypte. Het is een van de oudste universiteiten in de wereld, gesticht in 988. De theologische faculteit, die met de Al-Azhar-moskee verbonden is, geldt als een van de belangrijkste religieuze autoriteiten binnen de soennitische islam. In de buurt van de universiteit wordt jaarlijks de grote Internationale Boekenbeurs van Caïro gehouden.</motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={zhar} 
              alt="zhar" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView4 ? 1:0, x: inView4 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 

            />
          </div>
        </div>  
      </Parallax>

      <Parallax strength={-400} bgImage={hambra}>
        <div className="image-overlay" />
        <div className="content" >
          <div className="text-section">
            <motion.div 
              ref={ref5}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView5 ? 1:0, x: inView5 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
Het Alhambra (qasr alhamrā' - Rode Paleis) is een middeleeuws paleis (ontworpen in 1238) en fort van de Moorse heersers van het koninkrijk Granada in Andalusië (Zuid-Spanje). Het bevindt zich op een heuvelachtig plateau aan de zuidoostelijke grens van de stad Granada. Het hele complex van het Alhambra heeft een enorme oppervlakte van 140.000 m². Een mooie voorbeeld van een Moorse architectuur oorspronkelijk vanuit Marokko.</motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={hambra} 
              alt="hambra" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView5 ? 1:0, x: inView5 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 

            />
          </div>
        </div>  
      </Parallax>

      <Parallax strength={400} bgImage={registan}>
        <div className="image-overlay" />
        <div className="content" >
          <div className="text-section">
            <motion.div 
              ref={ref6}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView6 ? 1:0, x: inView6 ? 0:-100 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-content"
            >
Het Registan is het grote plein in het historische hart van Samarkand in Oezbekistan. Het plein wordt omringd door drie madrassa's. Het Registan werd in de 15e eeuw ontworpen door Ulug Bey en verfraaid door zijn opvolgers. De naam Registan betekent Plaats van zand, omdat dit ooit een zanderig marktplein was. Het rechthoekige plein wordt aan drie zijden omringd door madrassa's in de Perzisch-Timuridische stijl.</motion.div>
          </div>
          <div className="image-section">
            <motion.img 
              src={registan} 
              alt="registan" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView6 ? 1:0, x: inView6 ? 0:100 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.5 }} 

            />
          </div>
        </div>  
      </Parallax>

                
      
    </div>
  );
}

export default SecondMainParallax;

