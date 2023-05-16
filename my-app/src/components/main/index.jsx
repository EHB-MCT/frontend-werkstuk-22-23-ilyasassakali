import React from 'react';
import './main.css'

function Main({ selectedTopic }) {
    return (
      <div className="main">
        <h1>TAKE A LOOK AT <br /> {selectedTopic}</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="site-previews">
          {Array(21).fill().map((_, i) => (
            <div className="preview-box" key={i}>
              <h2>Site {i+1}</h2>
            </div>
          ))}
        </div>
      </div>
    );
}

  
export default Main;
