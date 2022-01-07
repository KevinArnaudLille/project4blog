import React, { useState } from 'react';

// Router methods importation
import { Link } from 'react-router-dom';

// React-redux methods importation
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

  // Find article with uid
  const [articleToDisplay] = useState(
    articlesData.find(obj => obj.uid === props.uid)
  )

  // Formatting date from firebase
  const [articleDate] = useState(
    new Date(articleToDisplay.date.seconds * 1000)
  )

  return (

    <div className='relative w-11/12 z-0 my-1 lg:w-auto lg:h-full '>
      <div className='absolute opacity-50 w-full h-full bg-wave-1 border-4 border-wave-5 border-double rounded z-0'>
      </div>
      <div className='relative bg-transparent z-10 p-2'>
        <Link to={`/article/${articleToDisplay.id}`}>
          <div className='flex justify-between'>
            <h1 className='text-2xl text-gray-800'>
              {articleToDisplay.title}
            </h1>
            <img className='w-8 -rotate-90' src={chevronDownIconTwo} alt="goBack" />
          </div>
        </Link>

        <div className="date">{`Le ${("0" + (articleDate.getDay()+2)).slice(-2)}/${("0" + (articleDate.getMonth()+1)).slice(-2)}/${articleDate.getFullYear()} à ${articleDate.getHours()}h`}</div>

        <div className='italic text-gray-600 text-lg'>
          Tags:
          {articleToDisplay.tags.map(item => {
            return (
              <span key={item}>{` ${item}`}</span>
            )
          })}
        </div>

        <div className='flex justify-center'>
          <img className='object-contain rounded-md lg:max-h-96 lg:m-2' src={articleToDisplay.imgURL} alt="img" />
        </div>


        {accordeonToggle &&
          <div className="text-gray-900">
            {articleToDisplay.content}
          </div>
        }
        <div className="text-gray-900 hidden lg:block">
          {articleToDisplay.content}
        </div>

        <div className='flex flex-col items-center lg:hidden'>
          <button onClick={switchAccordeonToggle}>
            <img className={accordeonToggle ? 'w-12 rotate-180' : "w-12"} src={chevronDownIcon} alt="" />
          </button>
        </div>
      </div>
    </div>

  )
}
