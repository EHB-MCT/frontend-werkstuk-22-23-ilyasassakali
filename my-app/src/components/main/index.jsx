import React, { useEffect, useState } from 'react';
import './main.css'
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import data from '../../services/studentData.json'


function Main({ selectedTopic }) {
  const [topics, setTopics] = useState([]); 

  useEffect(() => {
    setTopics(data);
  }, []);


    const navigate = useNavigate();
      
    const handlePreviewBoxClick = (id) => {
        navigate(`/detailpage/${id}`);
    }

    console.log(data);

    return (
      <div className="main">
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }} 
          transition={{ type: 'spring', stiffness: 120 }}
        >
          TAKE A LOOK AT <br /> {selectedTopic}
        </motion.h1>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        >
        <input type="text" placeholder="Search..." className="search-bar" />
        </motion.div>
        

        <div className="site-previews">
        {topics.map((topic, i) => (
                <motion.div 
                className="preview-box" 
                key={i}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }} 
                onClick={() => handlePreviewBoxClick(topic.id)}
                style={{ backgroundImage: `url(${topic.picture})`, backgroundSize: 'cover' }} 
                >
                <h2>{topic.title}</h2>
                </motion.div>
            ))}
        </div>

      </div>
    );
}
  
export default Main;
