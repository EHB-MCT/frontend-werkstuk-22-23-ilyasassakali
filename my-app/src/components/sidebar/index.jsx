import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.css'

const categories = [
  { name: "Everyday life", img: require("../../assets/everydaylife.png") },
  { name: "Geography", img: require("../../assets/geography.png") },
  { name: "History", img: require("../../assets/history.png") },
  { name: "Knowledge", img: require("../../assets/knowledge.png") },
  { name: "Language", img: require("../../assets/languag.png") },
  { name: "Literature", img: require("../../assets/literature.png") },
  { name: "People", img: require("../../assets/people.png") },
  { name: "Religion", img: require("../../assets/religion.png") },
  { name: "Science", img: require("../../assets/science.png") },
]

function Sidebar({ setSelectedTopic, selectedTopic }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleClick = (categoryName) => {
    setSelectedTopic(categoryName);
    setIsCollapsed(true);
  }

  const handleLogoClick = () => {
    setIsCollapsed(false);
  }
 
  return (
    <motion.div 
      className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <img src={require("../../assets/wikiwallLogo.png")} alt="Logo" className="logo" onClick={handleLogoClick} />
      {!isCollapsed && <h2>Categories</h2>}
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleClick(category.name)} className={selectedTopic === category.name ? 'selected' : ''}>
            <img src={process.env.PUBLIC_URL + category.img} alt={category.name} />
            {!isCollapsed && category.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
