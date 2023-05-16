import React from 'react';
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
  return (
    <div className="sidebar">
      <img src={require("../../assets/wikiwallLogo.png")} alt="Logo" className="logo" />
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setSelectedTopic(category.name)} className={selectedTopic === category.name ? 'selected' : ''}>
            <img src={process.env.PUBLIC_URL + category.img} alt={category.name} />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
