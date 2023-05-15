import React from 'react';
import './sidebar.css'

const categories = ["Categorie 1", "Categorie 2", "Categorie 3", "Categorie 4"];

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Categorieën</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
