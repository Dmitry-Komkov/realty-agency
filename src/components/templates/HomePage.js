import React from 'react'
import Advantages from '../modules/Advantages'
import FreeConsult from '../modules/FreeConsult'
import HeroBanner from '../modules/HeroBanner'
import Offers from '../modules/Offers'
import Services from '../modules/Services'

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Services />
      <Offers />
      <Advantages />
      <FreeConsult />
    </div>
  )
}

export default HomePage
