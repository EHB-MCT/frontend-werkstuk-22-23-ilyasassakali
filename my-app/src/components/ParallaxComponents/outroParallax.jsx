import CallToPrayerService from "../../services/callToPrayerService.js"
import React, { useState,useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Parallax} from 'react-parallax'



function OutroParallax() {
    const { data,error,loading} = CallToPrayerService()

    //console.log(data);
    return(
        <div className="outro">

                <div className="content">


                </div>

        </div>
        
    )
}

export default OutroParallax;
