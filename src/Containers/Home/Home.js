// <<<<< Home page >>>>>

import React from 'react';

// Components importation
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import TabTags from '../../Components/TabMenu/TabTags';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageUpBtn from '../../Components/PageUpBtn/PageUpBtn';
import ParallaxBg from '../../Components/ParallaxeBg/ParallaxBg';

// Style sheet importation
import "./Home.css"



export default function Home() {
  return (
    <div className='Home-bg absolute m-0 p-0 top-0 left-0 min-h-screen flex flex-col justify-between'>

      {/* PARALLAX COMP. - in progress */}
      <div className='absolute z-0 h-full w-screen overflow-hidden'>
        <ParallaxBg />
      </div>

      {/* HEADER COMP. */}
      <div className='z-10'>
        {/* Btn to go back home disable on home */}
        <Header toggleBtn={false} />
      </div>

      {/* TABTAGS AND ARTICLECONTAINER COMP. */}
      <div className="flex-grow z-10">
        <TabTags />
        <ArticlesContainer />
      </div>

      {/* FOOTER COMP */}
      <div className='z-10'>
        <Footer />
      </div>

      {/* Contextual go to top btn COMP. */}
      <div className='fixed bottom-1 left-1/2 -translate-x-1/2 z-20'>
        <PageUpBtn />
      </div>
    </div>
  )
}