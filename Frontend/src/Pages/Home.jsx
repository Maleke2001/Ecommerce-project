import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopulateData from '../Components/populateData/PopulateData'
import Offers from '../Components/offers/Offers'
import NewCollection from '../Components/NewCollection'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <PopulateData/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
     
    </div>
  )
}

export default Home
