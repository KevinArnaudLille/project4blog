import React, { useState, useEffect } from 'react'

// React-redux methods importation
import { useSelector } from 'react-redux';

// Routeur methods importation
import {Link, useParams } from 'react-router-dom'

// Components importation
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function ArticlePage() {

    // Fetch route state
    const param = useParams()
    console.log(param);

    // Stored data fetching
    const { tutoArticleData } = useSelector(state => ({
        ...state.tutoReducer
    }))

    // Go top of the page at init
    useEffect(()=>{
        window.scrollTo(0, 0) 
    },[])

    // Find article with uid
    const [articleToDisplay] = useState(tutoArticleData.find(obj => obj.id === param.id))

    return (
        <div className='Home-bg absolute top-0 left-0 w-screen min-h-screen flex flex-col justify-between'>
            <Link to="/">
                <Header toggleBtn={true}/>
            </Link>
            <div className='relative z-0 my-1'>
                <div className='absolute opacity-50 w-full h-full border-t-8 border-b-8 border-wave-5 border-double bg-wave-1  rounded z-0'>
                </div>
                <div className='relative bg-transparent z-10 p-2'>
                    <h1 className='text-2xl text-gray-800'>
                        {articleToDisplay.title}
                    </h1>

                    <div className="date">{articleToDisplay.date.substr(4, 11)}</div>

                    <div className='italic text-gray-600 text-lg'>
                        Tags:
                        {articleToDisplay.tags.map(item => {
                            return (
                                <span key={item}>{` ${item}`}</span>
                            )
                        })}
                    </div>

                    <img className='' src={articleToDisplay.imgURL} alt="img" />
                    <div className="text-gray-900">
                        {articleToDisplay.content}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}