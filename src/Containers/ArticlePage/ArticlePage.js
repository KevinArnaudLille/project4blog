import React, { useState, useEffect } from 'react'

// React-redux methods importation
import { useSelector, useDispatch } from 'react-redux';

// Routeur methods importation
import { Link, useParams } from 'react-router-dom'

// Components importation
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Thunk function for firebase data loading
import { fetchDbData } from '../../redux/reducers/articlesDbReducer';

export default function ArticlePage() {

    const dispatch = useDispatch();

    // Fetch route state
    const param = useParams()

    // Store
    const { articlesData, isDoneLoading } = useSelector(state => ({
        ...state.articlesDbReducer
    }))

    // Go top page at init
    useEffect(() => {
        console.log("Article page entered");

        window.scrollTo(0, 0)
        dispatch(fetchDbData());

        return () => {
            console.log("Article page leaved");
            dispatch({
                type: "RESET",
            })
        }
    }, [])


    if (isDoneLoading) {

        // Find article to display with id
        const articleToDisplay = articlesData.find(obj => obj.id.toString() === param.id.toString());

        // Formatting date from firebase
        let articleDate = new Date(articleToDisplay.date.seconds * 1000)

        return (
            <div className='Home-bg absolute top-0 left-0 w-screen min-h-screen flex flex-col justify-between'>
                <Link to="/">
                    <Header toggleBtn={true} />
                </Link>
                <div className='relative z-0 my-1 flex-grow'>
                    <div className='absolute opacity-50 w-full h-full border-t-8 border-b-8 border-wave-5 border-double bg-wave-1  rounded z-0'>
                    </div>
                    <div className='relative bg-transparent z-10 p-2'>
                        <h1 className='text-2xl text-gray-800 lg:text-3xl'>
                            {articleToDisplay.title}
                        </h1>

                        <div className="date lg:text-lg">
                            {`Le ${("0" + (articleDate.getDay() + 2)).slice(-2)}/${("0" + (articleDate.getMonth() + 1)).slice(-2)}/${articleDate.getFullYear()} à ${articleDate.getHours()}h`}
                        </div>

                        <div className='italic text-gray-600 text-lg lg:text-xl'>
                            Tags:
                            {articleToDisplay.tags.map(item => {
                                return (
                                    <span key={item}>{` ${item}`}</span>
                                )
                            })}
                        </div>

                        <div className='flex justify-center lg:float-left'>
                            <img className='object-contain lg:max-h-80 lg:m-2' src={articleToDisplay.imgURL} alt="img" />
                        </div>

                        <div className="text-gray-900 lg:text-lg lg:p-1">
                            {articleToDisplay.content}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className='text-center text-10xl mt-20 text-wave-6'>
                . . .
            </div>
        )

    }
}
