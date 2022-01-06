import React, { useState, useEffect } from 'react'

// Asset importation
import chevronDownIcon from "../../Assets/Icons/chevron-down-page-up.svg"

export default function Header(props) {

    const [goHomeBtnToggle, setGoHomeBtnToggle] = useState(false);

    useEffect(() => {
        setGoHomeBtnToggle(props.toggleBtn);
    }, [])

    return (
        <div>
            <div className="titleFont text-4xl font-bold p-1 pt-1 text-gray-800 flex">
                {goHomeBtnToggle &&
                    <img className='w-10 rotate-90' src={chevronDownIcon} alt="goBack" />}
                <div className='bg-gradient-to-r from-gray-800 to-orange-700 text-transparent bg-clip-text'>
                    Chimiste to Dev !
                </div>
            </div>
        </div>
    )
}