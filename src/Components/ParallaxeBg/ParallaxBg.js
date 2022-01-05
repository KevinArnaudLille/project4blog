import React, { useEffect, useState } from 'react'


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
        console.log('window inner height: ', window.innerHeight);

        console.log('document Element client hieght: ', document.documentElement.clientHeight);

        console.log('document Element scroll hieght: ', document.documentElement.scrollHeight);

        console.log('document Element offset height: ', document.documentElement.offsetHeight);

        console.log('document element scrolltop: ', document.documentElement.scrollTop);

        console.log('window page Y Offset: ', window.pageYOffset);

        console.log('window document body offsetheight: ', window.document.body.offsetHeight);
    }, [scrollYValue])


    return (
        <div>
            
        </div>
    )
}
