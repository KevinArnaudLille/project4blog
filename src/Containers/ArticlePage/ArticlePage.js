// <<<<< Single article page (not container, my mistake) >>>>>

import React, { useEffect } from 'react'

// React-redux hooks importation
import { useSelector, useDispatch } from 'react-redux';

// Routeur hooks and components importation
import { Link, useParams } from 'react-router-dom'

// Components importation
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Middleware function importation for firebase data loading
import { fetchDbData } from '../../redux/reducers/articlesDbReducer';

// Import parse function to turn string in JSX
import parse from 'html-react-parser';



export default function ArticlePage() {

    const dispatch = useDispatch();

    // Fetch route state from dynamic routing
    const param = useParams()

    // Stored data fetching
    const { articlesData, isDoneLoading } = useSelector(state => ({
        ...state.articlesDbReducer
    }))

    // On mounted component ...
    useEffect(() => {
        // ... go top page at init
        window.scrollTo(0, 0)

        // ... fetch data from db
        dispatch(fetchDbData());

        // On unmounted, reset the boolean variable that indicate end of loading
        return () => {
            dispatch({
                type: "RESET",
            })
        }
    }, [])


    // Check if data are loaded
    if (isDoneLoading) {

        // Find article to display with id
        const articleToDisplay = articlesData.find(obj => obj.id.toString() === param.id.toString());

        // Formatting date from firebase timestamp
        let articleDate = new Date(articleToDisplay.date.seconds * 1000)

        return (
            <div className='Home-bg absolute top-0 left-0 w-screen min-h-screen flex flex-col justify-between'>

                {/* HEADER COMP. */}
                <Link to="/">
                    <Header IsGoHomeBtnVisible={true} />
                </Link>

                {/* BODY */}
                <div className='relative z-0 my-1 flex-grow'>

                    {/* BODY COLORED BG */}
                    <div className='absolute opacity-50 w-full h-full border-t-8 border-b-8 border-wave-5 border-double bg-wave-1  rounded z-0'>
                    </div>

                    {/* BODY CONTENT */}
                    <div className='relative bg-transparent z-10 p-2'>

                        {/* TITLE */}
                        <h1 className='text-2xl text-gray-800 lg:text-3xl'>
                            {articleToDisplay.title}
                        </h1>

                        {/* DATE FORMATED */}
                        <div className="date lg:text-lg">
                            {`Le ${("0" + (articleDate.getDay() + 2)).slice(-2)}/${("0" + (articleDate.getMonth() + 1)).slice(-2)}/${articleDate.getFullYear()} à ${articleDate.getHours()}h`}
                        </div>

                        {/* TAGS */}
                        <div className='italic text-gray-600 text-lg lg:text-xl'>
                            Tags:
                            {articleToDisplay.tags.map(item => {
                                return (
                                    <span key={item}>{` ${item}`}</span>
                                )
                            })}
                        </div>

                        {/* IMG IMPORT. */}
                        <div className='flex justify-center lg:float-left'>
                            <img className='object-contain lg:max-h-80 lg:m-2' src={articleToDisplay.imgURL} alt="img" />
                        </div>

                        {/* ARTICLE TEXT CONTENT */}
                        <div className="text-gray-900 lg:text-lg lg:p-1">
                            {parse(articleToDisplay.content)}
                        </div>
                    </div>
                </div>

                {/* FOOTER COMP. */}
                <Footer />
            </div>
        )

        // if data are still loading ...
    } else {
        // ... then display loading screen
        return (
            // LOADING SCREEN
            <div className='text-center text-10xl mt-20 text-wave-6'>
                . . .
            </div>
        )

    }
}