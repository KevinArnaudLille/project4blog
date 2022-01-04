import React from 'react'

// Components importation
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import TabTags from '../../Components/TabMenu/TabTags';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Style sheet import
import "./Home.css"

// React-redux methods importation
import { useSelector } from 'react-redux';

export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <TabTags/>
      <ArticlesContainer/>
      <Footer/>
    </div>
  )
}
