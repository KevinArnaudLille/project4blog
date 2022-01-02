import React from 'react'

// Components importation
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';

// Style sheet import
import "./Home.css"

// React-redux methods importation
import { useSelector } from 'react-redux';

export default function Home() {
  return (
    <div className='Home'>
      <div className="mainTitle text-4xl font-bold pl-1 pt-1 text-gray-800">
        BLOG
      </div>
      <ArticlesContainer/>
    </div>
  )
}
