import React from 'react';

// Components importation
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import TabTags from '../../Components/TabMenu/TabTags';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageUpBtn from '../../Components/PageUpBtn/PageUpBtn';
import ParallaxBg from '../../Components/ParallaxeBg/ParallaxBg';

// Style sheet import
import "./Home.css"

export default function Home() {

  return (
    <>
      <div className='Home-bg absolute top-0 left-0 w-screen min-h-screen flex flex-col justify-between'>
        <div className='absolute'>
          <ParallaxBg />
        </div>
        <Header />
        <div className="flex-grow">
          <TabTags />
          <ArticlesContainer />
        </div>
        <Footer />
        <div className='fixed bottom-1 left-1/2 -translate-x-1/2'>
          <PageUpBtn />
        </div>
      </div>
    </>
  )
}
