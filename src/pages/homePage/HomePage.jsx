import React from 'react'
import Banner from '../../components/homeComponents/banner/Banner'
import BoxCard from '../../components/homeComponents/boxCard/BoxCard'
import ChallengersBox from '../../components/homeComponents/challengers/ChallengersBox'
import InspirationBox from '../../components/homeComponents/inspiration/InspirationBox'
import TutorialBox from '../../components/homeComponents/tutorial/tutorialBox'
import { HomePageStyle } from './styleHomePage'

const HomePage = () => {
  return (
    <HomePageStyle>
      <Banner />
      <section className='eighty'>
        <BoxCard />
        <TutorialBox />
        <ChallengersBox />
        <InspirationBox/>
      </section>
    </HomePageStyle>

  )
}

export default HomePage