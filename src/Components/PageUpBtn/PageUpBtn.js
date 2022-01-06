import React, { useState, useEffect } from 'react';

// Asset importation
import chevronDownIconPageUp from "../../Assets/Icons/chevron-down-page-up.svg"

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
        if (scrollYValue > 2000 && oldScrollYValue > scrollYValue) {
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
                    <img className='w-40 scale-x-150 rotate-180 opacity-60' src={chevronDownIconPageUp} alt="To top" />
                </button>
            }
        </div>
    )
}