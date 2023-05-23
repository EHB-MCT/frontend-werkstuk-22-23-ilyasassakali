import CallToPrayerService from "../../services/callToPrayerService.js"
import React, { useState,useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import moon from '../../assetsparallax/moon.png';
import lamp from '../../assetsparallax/lamp.gif';
import camel from '../../assetsparallax/camel.gif';


  


function OutroParallax() {
    const { data,error,loading} = CallToPrayerService()
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>


    return(
        <ParallaxProvider>
        <div className="outro"> 

                <Parallax translateY={[-6000,-1000]}  tagOuter="figure">
                <img className="camel" src={camel} alt="camel" />
                </Parallax>

            <div className="animations">
                <Parallax  translateY={[-30,120]}  tagOuter="figure">
                <img className="lampl" src={lamp} alt="lamp" />
                </Parallax>

                <Parallax translateY={[-30,100]} opacity={[1,0]} tagOuter="figure">
                <img className="moon" src={moon} alt="moon" />
                </Parallax>

                <Parallax translateY={[-30,150]}  tagOuter="figure">
                <img className="lampr" src={lamp} alt="lamp" />
                </Parallax>
            </div>
                

            <div className="content">
                {data && (
                    <>
                        <h1 className="hijri-date">{data.data.date.hijri.date}</h1>
                        <div className="islamic-year">Live Islamitische datum</div>
                        <h2>Live 5 Gebedstijden voor Brussel</h2>
                        <div className="prayer-times">
                            <div>Fajr: {data.data.timings.Fajr}</div>
                            <div>Dhuhr: {data.data.timings.Dhuhr}</div>
                            <div>Asr: {data.data.timings.Asr}</div>
                            <div>Maghrib: {data.data.timings.Maghrib}</div>
                            <div>Isha: {data.data.timings.Isha}</div>
                        </div>
                        <div className="timezone">Live Timezone: {data.data.meta.timezone}</div>
                    </>
                )}
            </div>

        </div>
        </ParallaxProvider>
    )
}

export default OutroParallax;
