import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="related-topics">
        <p>Related Topics:</p>
        <ul>
          <li>Tantalus</li>
          <li>Narcissus</li>
          <li>Lillith</li>
          <li>perseus and andromeda</li>
        </ul>
      </div>
      <div className="middle-links">
        <div>
        <p>Privacybeleid</p>
        <p>Statistieken</p>
        <p>Over Wikiwall</p>
        </div>
        <div className='below'>
        <p className='left'>Over Developers</p>
        <p className='right'>Disclaimers</p>
        </div>
      </div>
      <div className="logo">
        <img src={require("../../assets/largewikiwalllogo.png")} alt=''/>
      </div>
    </div>
  );
}

export default Footer;
