import React, { useEffect, useState } from 'react';
import './wikiDetailPage.css'
import Footer from '../../components/footer/index.jsx';
import {motion} from 'framer-motion';
import backImg from "../../assets/back.png";
import { useNavigate,useParams } from 'react-router-dom';
import data from '../../services/studentData.json'
 
 
function DetailPage() {
    const navigate = useNavigate(); 

    const { id } = useParams(); 
    const [topic, setTopic] = useState(null); 
    

    useEffect(() => {
        const currentTopic = data.find((topic) => topic.id === parseInt(id, 10));
        setTopic(currentTopic);
      }, [id]);

    if (!topic) {

        return <div>Loading...</div>;
        
    }
 
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
            <h2>{topic.title}</h2>
            <p>Topic: {topic.title}</p>
            <p className='info'>Info: {topic.description}</p>
            <p>Creator: {topic.author}</p>
            <a href={topic.link} target="_blank" rel="noopener noreferrer" className="your-button-class">VISIT TOPIC SITE</a>
          </div>
          <div className="image-content">
            <img src={topic.picture} alt="Topic" />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
      
  );
}

export default DetailPage;
