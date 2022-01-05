import React, {useState} from 'react'

// React-redux methods importation
import { useSelector } from 'react-redux';

// Components importation
import Article from '../../Components/Article/Article'

export default function ArticlesContainer() {

  // Stored data fetching
  const { tutoArticleData, tagsListToDisplay } = useSelector(state => ({
    ...state.tutoReducer,
    ...state.articlesTagsFilteringReducer
  }))

  if (tagsListToDisplay.length > 0) {
    return (
      <div className='flex flex-col items-center'>
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
      <div className='flex flex-col items-center'>
        {[...tutoArticleData].reverse().map(item => {
          return (
            <Article key={item.uid} uid={item.uid} />
          )
        })}
      </div>
    )
  }

}
