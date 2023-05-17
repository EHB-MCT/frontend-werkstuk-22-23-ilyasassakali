import React from 'react';
import './main.css'
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Main({ selectedTopic }) {

    const navigate = useNavigate();
      
    const handlePreviewBoxClick = () => {
        navigate('/detailpage');
    }


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
            {Array(21).fill().map((_, i) => (
                <motion.div 
                className="preview-box" 
                key={i}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }} 
                onClick={handlePreviewBoxClick}
                >
                <h2>Site {i+1}</h2>
                </motion.div>
            ))}
        </div>

      </div>
    );
}
  
export default Main;
