import React from 'react';
import './wikiDetailPage.css'
import Footer from '../../components/footer/index.jsx';
import {motion} from 'framer-motion';
import eximg from "../../assets/islam.jpeg";
import backImg from "../../assets/back.png";
import { useNavigate } from 'react-router-dom';
 

function DetailPage() {
    const navigate = useNavigate();


 

  return (
    <div className='page-background'>

        <img src={backImg} alt="Back" className="back-button" onClick={() => navigate('/')} />


        <div className="detail-content">
            <motion.div  
            className="detail-box" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} 
            >
                <div className="text-content">
                    <h2>Topic Detail</h2>
                    <p>Topic: Islamic Architecture</p>
                    <p className='info'>Info: Islamic architecture is a mesmerizing
                        blend of intricate geometric patterns, vibrant 
                        colors, and rich cultural symbolism, showcasing 
                        timeless beauty and craftsmanship.</p>
                    <p>Creator: Ilyas Assakali</p>
                    <button onClick={() => navigate('/parallax')}>VISIT TOPIC SITE</button>
                </div>
                <div className="image-content">
                    <img src={eximg} alt="Topic" />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
      
  );
}

export default DetailPage;
