import React from 'react';

import fourthmosqueImage from '../../assetsparallax/fourthMosque.jpeg';
import fivemosqueImage from '../../assetsparallax/fiveMosque.jpeg';
import sixmosqueImage from '../../assetsparallax/sixMosque.jpeg';
import sevenmosqueImage from '../../assetsparallax/sevenMosque.jpeg';

function FourthMainParallax() {
    const images1 = [fourthmosqueImage, fivemosqueImage, sixmosqueImage, sevenmosqueImage, sixmosqueImage, sevenmosqueImage];
    const images2 = [fivemosqueImage, fourthmosqueImage, sevenmosqueImage, sixmosqueImage, sixmosqueImage, sevenmosqueImage];
    const images3 = [sixmosqueImage, sevenmosqueImage, fourthmosqueImage, fivemosqueImage, sixmosqueImage, sevenmosqueImage];

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
