import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="related-topics">
        <h2>Related Topics</h2>
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
          <li>Topic 4</li>
        </ul>
      </div>
      <div className="middle-links">
        <a href="#">Privacybeleid</a>
        <a href="#">Statistieken</a>
        <a href="#">Over Wikiwall</a>
        <a href="#">Over Developers</a>
        <a href="#">Disclaimers</a>
      </div>
      <div className="logo">
        {/*  logo */}
      </div>
    </div>
  );
}

export default Footer;
