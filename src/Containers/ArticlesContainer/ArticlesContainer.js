// <<<<< Articles container that fetch db then display and order article, with Article component, on home page >>>>>

import React, { useState, useEffect } from 'react'

// React-redux hooks importation
import { useSelector, useDispatch } from 'react-redux';

// Middleware function importation for firebase data loading
import { fetchDbData } from '../../redux/reducers/articlesDbReducer';

// Components importation
import Article from '../../Components/Article/Article'



export default function ArticlesContainer() {
  const dispatch = useDispatch();

  // Stored data fetching
  const { articlesData, tagsListToDisplay, isDoneLoading } = useSelector(state => ({
    ...state.articlesDbReducer,
    ...state.articlesTagsFilteringReducer
  }))

  // On mounted component ...
  useEffect(() => {
    // ... go top page at init
    dispatch(fetchDbData());

    // On unmounted, reset the boolean variable that indicate end of loading
    return () => {
      dispatch({
        type: "RESET",
      })
    }
  }, [])

  // Responsive style state
  const [tailWindStyle] = useState('flex flex-col items-center lg:mx-8 2xl:mx-60 lg:place-items-stretch lg:grid lg:grid-cols-2 lg:items-start lg:auto-cols-auto lg:gap-2 lg:p-2')

  // Check if data are loaded
  if (isDoneLoading) {

    // Check if user refined with tags ...
    if (tagsListToDisplay.length > 0) {
      // ... then display only filtered articles
      return (
        <div className={tailWindStyle}>
          {[...articlesData].reverse().map(item => {
            if (item.tags.some(tag => tagsListToDisplay.includes(tag))) {
              return (
                <Article key={item.uid} uid={item.uid} />
              )
            }
          })}
        </div>
      )

      // if user did not refined with tags ...
    } else {
      // ... then display all article
      return (
        <div className={tailWindStyle}>
          {articlesData.map(item => {
            return (
              <Article key={item.uid} uid={item.uid} />
            )
          })}
        </div>
      )
    }

    // if data are still loading ...
  } else {
    // ... then display loading screen
    return (
      <div className='text-center text-10xl mt-20 text-wave-6'>
        . . .
      </div>
    )
  }
}