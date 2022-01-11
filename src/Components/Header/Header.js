// <<<<< Header component that is displayed in every page >>>>>

import React, { useState, useEffect } from 'react'

// Asset importation
import chevronDownIcon from "../../Assets/Icons/chevron-down-page-up.svg"



export default function Header(props) {

    // Go back main page visibility state
    const [goHomeBtnIsVisible, setGoHomeBtnToggle] = useState(false);

    // Update go home btn visibility on load
    useEffect(() => {
        // If Header is load from ArticlePage
        setGoHomeBtnToggle(props.IsGoHomeBtnVisible);
    }, [])

    return (
        <div className="titleFont text-4xl font-bold p-1 pt-1 text-gray-800 flex">

            {goHomeBtnIsVisible &&
                <img className='w-10 rotate-90' src={chevronDownIcon} alt="goBack" />}

            {/* MAIN TITLE */}
            <div className='bg-gradient-to-r from-gray-800 to-orange-700 text-transparent bg-clip-text'>
                Chimiste to Dev !
            </div>
        </div>
    )
}