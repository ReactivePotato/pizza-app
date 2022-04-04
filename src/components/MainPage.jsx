import React from 'react'
import MainContent from './MainContent';
import Header from './Header';
import Filters from './Filters';
import Footer from './Footer';

const MainPage = () => {
  return (
    <>
    <Header />
    <Filters />
    <MainContent />
    <Footer />
    </>
  )
}

export default MainPage
