import React from 'react'
import AboutUs from '../modules/AboutUs'
import Advantages from '../modules/Advantages'
import FreeConsult from '../modules/FreeConsult'
import HeroBanner from '../modules/HeroBanner'
import Offers from '../modules/Offers'
import OurTeam from '../modules/OurTeam'
import Services from '../modules/Services'

const HomePage = () => {
  return (
    <main>
      <HeroBanner />
      <Services />
      <Offers />
      <Advantages />
      <FreeConsult />
      <OurTeam />
      <AboutUs />
    </main>
  )
}

export default HomePage
