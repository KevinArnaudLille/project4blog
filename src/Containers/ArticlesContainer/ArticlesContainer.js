import React, { useState, useEffect } from 'react'

// React-redux methods importation
import { useSelector, useDispatch } from 'react-redux';

// Thunk function for firebase data loading
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

  useEffect(() => {
    dispatch(fetchDbData());

    return () => {
      console.log("Home leaved");
      dispatch({
        type: "RESET",
    })
    }
  }, [])

  // Responsive style
  const [tailWindStyle] = useState('flex flex-col items-center lg:mx-8 2xl:mx-60 lg:place-items-stretch lg:grid lg:grid-cols-2 lg:items-start lg:auto-cols-auto lg:gap-2 lg:p-2')

  if (isDoneLoading) {
    if (tagsListToDisplay.length > 0) {
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
    } else {
      return (
        <div className={tailWindStyle}>
          {articlesData.map(item => {
            return (
              // <div>item.uid</div>
              <Article key={item.uid} uid={item.uid} />
            )
          })}
        </div>
      )
    }
  } else {
    return (
      <div className='text-center text-10xl mt-20 text-wave-6'>
        . . .
      </div>
    )
      
    
  }

}
