import React, { useEffect, useState } from 'react'

import cloudTest from "../../Assets/Clouds/cloud-test.svg"

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
        console.log('document Element scroll hieght: ', document.documentElement.scrollHeight);

    }, [scrollYValue])


    return (
        <div>
            <img 
            src={cloudTest}
            alt="" />
        </div>
    )
}
