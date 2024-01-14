import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ButtonContainer from '../components/ButtonContainer'
import Update from '../components/Update'
import Refer from '../components/Refer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <ButtonContainer />
        <Update />
        <Refer />
    </div>
  )
}

export default Home