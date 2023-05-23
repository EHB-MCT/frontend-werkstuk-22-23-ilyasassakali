import React from 'react';
import geo1 from '../../assetsparallax/geo1.jpeg';
import geo2 from '../../assetsparallax/geo2.jpeg';
import geo3 from '../../assetsparallax/geo3.jpeg';
import geo4 from '../../assetsparallax/geo4.jpeg';
import geo5 from '../../assetsparallax/geo5.jpeg';
import geo6 from '../../assetsparallax/geo6.jpeg';

import kal1 from '../../assetsparallax/kal1.jpeg';
import kal2 from '../../assetsparallax/kal2.jpeg';
import kal3 from '../../assetsparallax/kal3.jpeg';
import kal4 from '../../assetsparallax/kal4.jpeg';
import kal5 from '../../assetsparallax/kal5.jpeg';
import kal6 from '../../assetsparallax/kal6.jpeg';

import mu1 from '../../assetsparallax/mu1.jpeg';
import mu2 from '../../assetsparallax/mu2.jpeg';
import mu3 from '../../assetsparallax/mu3.jpeg';
import mu4 from '../../assetsparallax/mu4.jpeg';
import mu5 from '../../assetsparallax/mu5.jpeg';
import mu6 from '../../assetsparallax/mu6.jpeg';



function FourthMainParallax() {
    const images1 = [geo1, geo2, geo6, geo3, geo4, geo5];
    const images2 = [kal1, kal2, kal3, kal4, kal5, kal6];
    const images3 = [mu6, mu1, mu3,mu2, mu4, mu5 ];

    return (
        <div className="fourthmain">
            <div className="header">
                <h1>Typische decoratie</h1>
            </div>

            <div className="row">
                <div className="column">
                    <h2>Geometrie</h2>
                    {images1.map((src, i) => <img key={i} src={src}  alt="Geometrie" />)}
                </div>
                <div className="column">
                    <h2>Kalligrafie</h2>
                    {images2.map((src, i) => <img key={i} src={src}  alt="Kalligrafie" />)}
                </div>
                <div className="column">
                    <h2>Muqarnas</h2>
                    {images3.map((src, i) => <img key={i} src={src}  alt="Muqarnas" />)}
                </div>
            </div>
        </div>
    );
}

export default FourthMainParallax;
