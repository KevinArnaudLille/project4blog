import React, { useEffect, useState } from 'react'

import cloudTest from "../../Assets/Clouds/cloud-test.svg"

import "./ParallaxBg.css"

export default function ParallaxBg() {

    const [scrollYValue, setScrollYValue] = useState(0);

    // Add event listener while scrolling
    useEffect(() => {
        window.addEventListener("scroll", () => setScrollYValue(window.scrollY))
        return () => {
            window.removeEventListener("scroll", () => setScrollYValue(window.scrollY))
        }
    }, [])

    // Update  with scrolling
    useEffect(() => {
        // ICI
    }, [scrollYValue])

    let distanceToTop = `${500+(scrollYValue/1.5)}px`;
    let distanceToLeft = `${-200+(scrollYValue/4)}px`;

    return (
        <div className='w-screen h-full overflow-hidden'>
            <img
                className='noTW-cloud'
                style={{ top: distanceToTop, left: distanceToLeft }}
                src={cloudTest}
                alt="" />
        </div>
    )
}
