// <<<<< Article component that is displayed multiple times in the articles container >>>>>

import React, { useState } from 'react';

// Router hook importation
import { Link } from 'react-router-dom';

// React-redux hooks importation
import { useSelector } from 'react-redux';

// Asset importation
import chevronDownIcon from "../../Assets/Icons/chevron-down.svg"
import chevronDownIconTwo from "../../Assets/Icons/chevron-down-page-up.svg"



export default function Article(props) {

  // Stored data fetching
  const { articlesData } = useSelector(state => ({
    ...state.articlesDbReducer
  }))

  // Accordeon toggle state
  const [accordeonToggle, setAccordeonToggle] = useState(false);
  const switchAccordeonToggle = () => {
    setAccordeonToggle(!accordeonToggle)
  }

  // Find article with matching uid
  const [articleToDisplay] = useState(
    articlesData.find(obj => obj.uid === props.uid)
  )

  // Formatting date data from firebase
  const [articleDate] = useState(
    new Date(articleToDisplay.date.seconds * 1000)
  )

  return (
    <div className='relative w-11/12 z-0 my-1 lg:w-auto lg:h-full '>

      {/* Isolated background div to allow opacity */}
      <div className='absolute opacity-75 w-full h-full bg-wave-1 border-4 border-wave-5 border-double rounded z-0'>
      </div>

      {/* Content div */}
      <div className='relative bg-transparent z-10 p-2'>

        {/* TITLE AND GO TO ARTICLE PAGE LINK */}
        <Link to={`/article/${articleToDisplay.id}`}>
          <div className='flex justify-between'>
            <h1 className='text-2xl text-gray-800 lg:text-3xl'>
              {articleToDisplay.title}
            </h1>
            <img className='w-8 -rotate-90' src={chevronDownIconTwo} alt="goBack" />
          </div>
        </Link>

        {/* DATE */}
        <div className="date lg:text-xl">{`Le ${("0" + (articleDate.getDay() + 2)).slice(-2)}/${("0" + (articleDate.getMonth() + 1)).slice(-2)}/${articleDate.getFullYear()} à ${articleDate.getHours()}h`}</div>

        {/* ARTICLE TAGS */}
        <div className='italic text-gray-600 text-lg lg:text-2xl'>
          Tags:
          {articleToDisplay.tags.map(item => {
            return (
              <span key={item}>{` ${item}`}</span>
            )
          })}
        </div>

        {/* ARTICLE IMG */}
        <div className='flex justify-center'>
          <img className='object-contain rounded-md lg:max-h-96 lg:m-2' src={articleToDisplay.imgURL} alt="img" />
        </div>

        {/* ARTICLE CONTENT */}

        {/* While on mobile, if user click on accordeon toggle ... */}
        {accordeonToggle ?
          // ... then display full article content ...
          <div className="text-gray-900">
            {articleToDisplay.content}
          </div>
          :
          // ... else display a few wordd preview
          <div className="text-gray-900 lg:hidden">
            {articleToDisplay.content.substring(0, 150) + "..."}
          </div>
        }
        {/* While on large screen, always display article content */}
        <div className="text-gray-900 hidden lg:block">
          {articleToDisplay.content}
        </div>

        {/* ACCORDEON TOGGLE BTN */}
        <div className='flex flex-col items-center lg:hidden'>
          <button onClick={switchAccordeonToggle}>
            <img className={accordeonToggle ? 'w-12 rotate-180' : "w-12"} src={chevronDownIcon} alt="" />
          </button>
        </div>
      </div>
    </div>

  )
}