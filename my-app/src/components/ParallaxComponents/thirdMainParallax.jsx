import React from 'react';
import { Parallax } from 'react-parallax';


function ThirdMainParallax() {
  return (
    <div className="thirdmain">

      <Parallax strength={400}>
        <div className="content">
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Great Mosque of Mecca"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen"
              width="100%"
              height="100%"
              src="https://sketchfab.com/models/014cf5f9545b4e9c89f461c114a0c2f4/embed?autostart=1&annotations_visible=1&preload=1"
            ></iframe>
          </div>
        </div>
      </Parallax>

      <Parallax strength={400}>
        <div className="content">
          
        </div>
      </Parallax>

    </div>
  );
}

export default ThirdMainParallax;
