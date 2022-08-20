import React from 'react'
import AboutUs from '../modules/AboutUs'
import Advantages from '../modules/Advantages'
import FreeConsult from '../modules/FreeConsult'
import HeroBanner from '../modules/HeroBanner'
import Offers from '../modules/Offers'
import OurTeam from '../modules/OurTeam'
import Services from '../modules/Services'
import Statistics from "../modules/Statistics";

const HomePage = () => {
  return (
    <main>
      <HeroBanner />
      <Statistics />
      <Services />
      <Offers />
      <Advantages />
      <OurTeam />
      <FreeConsult />
      <AboutUs />
    </main>
  )
}

export default HomePage
