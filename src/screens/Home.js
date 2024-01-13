import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ButtonContainer from '../components/ButtonContainer'
import Update from '../components/Update'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <ButtonContainer />
        <Update />
    </div>
  )
}

export default Home