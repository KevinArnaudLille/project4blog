import React, { useEffect, useState } from 'react'

// Assets importation
import cloudTest from "../../Assets/Clouds/cloud-test.svg"

import { ParallaxItem } from './parallaxItemConstructor';

export default function ParallaxBg() {

    const [scrollYValue, setScrollYValue] = useState(0);
    
    const [testCloud] = useState(new ParallaxItem(100,100,0,0,cloudTest,50,0.4));
    const [testCloud2] = useState(new ParallaxItem(10,200,-0.2,-0.1,cloudTest,200,0))
    const [testCloud3] = useState(new ParallaxItem(-100,500,0.7,0.5,cloudTest,100,0))

    // Add event listener while scrolling
    useEffect(() => {

        console.log('document Element scroll hieght: ', document.documentElement.scrollHeight);

        window.addEventListener("scroll", () => setScrollYValue(window.scrollY))
        return () => {
            window.removeEventListener("scroll", () => setScrollYValue(window.scrollY))
        }
    }, [])

    // Update  with scrolling
    useEffect(() => {
        console.log(Math.cos(scrollYValue/100));
    }, [scrollYValue])




    return (
        <div className='w-screen h-full overflow-hidden'>
            {testCloud.DOMElem(scrollYValue)}
            {testCloud2.DOMElem(scrollYValue)}
            {testCloud3.DOMElem(scrollYValue)}
        </div>
    )
}