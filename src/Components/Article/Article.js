import React from 'react';

// React-redux methods importation
import { useSelector } from 'react-redux';

export default function Article(props) {

  // Stored data fetching
  const { tutoArticleData } = useSelector(state => ({
    ...state.tutoReducer
  }))

  return (
    <>
      <div className='relative w-11/12 z-0 my-1'>
        <div className='absolute opacity-50 w-full h-full bg-wave-1 border-4 border-wave-5 border-double rounded z-0'>
        </div>
        <div className='relative bg-transparent z-10 p-2'>
          <h1 className='text-2xl text-gray-800'>
            {tutoArticleData[props.articleIndex].title}
          </h1>
          <div className="date">{tutoArticleData[props.articleIndex].date}</div>
          <img className='' src={tutoArticleData[props.articleIndex].imgURL} alt="img" />
          <div className="text-gray-900">
            {tutoArticleData[props.articleIndex].content}
          </div>
        </div>
      </div>
    </>
  )
}
