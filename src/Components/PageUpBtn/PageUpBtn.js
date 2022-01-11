// <<<<< Mobile only go to top page component that is displayed if user scrolls more than 1000px and tries go scroll up >>>>>

import React, { useState, useEffect } from 'react';

// Asset importation
import chevronDownIconPageUp from "../../Assets/Icons/chevron-down-page-up.svg"

// Animation importation
import "./pageUpBtnAnimation.css"



export default function PageUpBtn() {

    // Display btn state
    const [pageTopBtnDisplay, setPageTopBtnDisplay] = useState(false);

    // Timer toggle state
    const [isTimerOn, setIsTimerOn] = useState(false);

    // Scroll Y value state
    const [scrollYValue, setScrollYValue] = useState(0);
    // Previous scroll Y value (needed to determinate scroll direction)
    const [oldScrollYValue, setOldScrollYValue] = useState(0);

    // Add event listener on scroll
    useEffect(() => {
        window.addEventListener("scroll", () => setScrollYValue(window.scrollY))
        return () => {
            window.removeEventListener("scroll", () => setScrollYValue(window.scrollY))
        }
    }, [])

    // Update btn display state with scrolling
    useEffect(() => {

        // If user scrolls down more than 1000px AND is scrolling up ...
        if (scrollYValue > 1000 && oldScrollYValue > scrollYValue) {
            // ... then display go to top btn ...
            setPageTopBtnDisplay(true);
            // ... for only 2s ...
            if (!isTimerOn) {
                setIsTimerOn(true);
                setTimeout(() => {
                    setIsTimerOn(false);
                    setPageTopBtnDisplay(false);
                }, 2000)
            }

            // ... else hide go to top btn
        } else {
            setPageTopBtnDisplay(false);
        }

        // update old scroll Y value to deteminate direction
        setOldScrollYValue(scrollYValue);
    }, [scrollYValue])

    return (

        // Hide btn on large screen
        <div className='lg:hidden'>
            {pageTopBtnDisplay &&
                <button onClick={() => { window.scrollTo(0, 0) }}>
                    <img className='noTL-animation' src={chevronDownIconPageUp} alt="To top" />
                </button>
            }
        </div>
    )
}