import React, { useState } from 'react'

// React-redux methods importation
import { useSelector } from 'react-redux';

// Components importation
import Article from '../../Components/Article/Article'

export default function ArticlesContainer() {

  // Stored data fetching
  const { tutoArticleData, tagsListToDisplay } = useSelector(state => ({
    ...state.articlesDbReducer,
    ...state.articlesTagsFilteringReducer
  }))

  const [tailWindStyle] = useState('flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start lg:auto-cols-auto lg:gap-2 lg:p-2')

  if (tagsListToDisplay.length > 0) {
    return (
      <div className={tailWindStyle}>
        {[...tutoArticleData].reverse().map(item => {
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
        {[...tutoArticleData].reverse().map(item => {
          return (
            <Article key={item.uid} uid={item.uid} />
          )
        })}
      </div>
    )
  }

}
