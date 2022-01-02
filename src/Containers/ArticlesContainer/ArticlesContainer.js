import React from 'react'

// Components importation
import Article from '../../Components/Article/Article'

export default function ArticlesContainer() {
  return (
    <div className='flex flex-col items-center'>
      <Article/>
      <Article/>
    </div>
  )
}
