import React, { useState, useEffect } from 'react';

// Asset importation
import chevronDownIconPageUp from "../../Assets/Icons/chevron-down-page-up.svg"

// Animation importation
import "./pageUpBtnAnimation.css"

export default function PageUpBtn() {

    // Display btn state
    const [pageTopBtnDisplay, setPageTopBtnDisplay] = useState(false);
    const [isTimerOn, setIsTimerOn] = useState(false);
    const [scrollYValue, setScrollYValue] = useState(0);
    const [oldScrollYValue, setOldScrollYValue] = useState(0);

    // Add event listener while scrolling
    useEffect(() => {
        window.addEventListener("scroll", () => setScrollYValue(window.scrollY))
        return () => {
            window.removeEventListener("scroll", () => setScrollYValue(window.scrollY))
        }
    }, [])

    // Update btn display state with scrolling
    useEffect(() => {
        if (scrollYValue > 1000 && oldScrollYValue > scrollYValue) {
            setPageTopBtnDisplay(true);
            if (!isTimerOn) {
                setIsTimerOn(true);
                setTimeout(() => {
                    setIsTimerOn(false);
                    setPageTopBtnDisplay(false);
                }, 2000)
            }
        } else {
            setPageTopBtnDisplay(false);
        }
        setOldScrollYValue(scrollYValue);
    }, [scrollYValue])

    return (
        <div className='lg:invisible'>
            {pageTopBtnDisplay &&
                <button onClick={() => { window.scrollTo(0, 0) }}>
                    <img className='perso-animation' src={chevronDownIconPageUp} alt="To top" />
                </button>
            }
        </div>
    )
}