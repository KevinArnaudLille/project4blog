import React, { useState } from 'react';

// React-redux methods importation
import { useSelector } from 'react-redux';

// Asset importation
import chevronDownIcon from "../../Assets/Icons/chevron-down.svg"

export default function Article(props) {

  // Stored data fetching
  const { tutoArticleData } = useSelector(state => ({
    ...state.tutoReducer
  }))

  // Accordeon toggle state
  const [accordeonToggle, setAccordeonToggle] = useState(false);
  const switchAccordeonToggle = () => {
    setAccordeonToggle(!accordeonToggle)
  }

  // Find article with uid
  const [articleToDisplay] = useState(tutoArticleData.find(obj => obj.uid === props.uid))

  return (
    <>
      <div className='relative w-11/12 z-0 my-1'>
        <div className='absolute opacity-50 w-full h-full bg-wave-1 border-4 border-wave-5 border-double rounded z-0'>
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

          {accordeonToggle &&
            <div className="text-gray-900">
              {articleToDisplay.content}
            </div>
          }

          <div className='flex flex-col items-center'>
            <button onClick={switchAccordeonToggle}>
              <img className={accordeonToggle ? 'w-12 rotate-180' : "w-12"} src={chevronDownIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
