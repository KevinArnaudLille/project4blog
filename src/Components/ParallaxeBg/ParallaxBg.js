import React, { useEffect, useState } from 'react'

// Assets importation
import cloudTest from "../../Assets/Clouds/cloud-test.svg";
import shipTest from "../../Assets/Ships/shipTest.svg";
import bottomCloudA from "../../Assets/Clouds/bottom-cloud-a.svg"

// Parallax items constructor importation
import { ParallaxItem } from './parallaxItemConstructor';

export default function ParallaxBg() {

    const [scrollYValue, setScrollYValue] = useState(0);

    const [parallaxItems, setparallaxItems] = useState([
        // // ... from top, background item first
        
        // // ... from bottom, background item first
        // new ParallaxItem("item2",-300, 10, false, 0.2, 0, bottomCloudA, 500, 0),
        // new ParallaxItem("item2",100, 50, false, -0.1, 0, bottomCloudA, 500, 0),
        
        // // .. test
        // new ParallaxItem("item1",100, 100, true, 0, 0, cloudTest, 50, 0.4),
        // new ParallaxItem("item2",-100, 700, false, 0.5, -0.1, shipTest, 50, 0.15),
    ])

    // Add event listener while scrolling
    useEffect(() => {
        window.addEventListener("scroll", () => setScrollYValue(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setScrollYValue(window.scrollY))
        }
    }, [])

    // Update  with scrolling
    useEffect(() => {

        

        // console.log(Math.cos(scrollYValue/100));
        // console.log('document Element scroll hieght: ', document.documentElement.scrollHeight);
    }, [scrollYValue])



    return (
        <div className='w-screen h-full overflow-hidden'>
            {parallaxItems.map((item) => {
                return item.DOMElem(scrollYValue)
            })}
        </div>
    )
}