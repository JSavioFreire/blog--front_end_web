import React from 'react'
import Banner from '../../components/banner/Banner'
import BoxCard from '../../components/boxCard/BoxCard'
import { HomePageStyle } from './styleHomePage'

const HomePage = () => {
  return (
    <HomePageStyle>
      <Banner />
      <BoxCard />

    </HomePageStyle>

  )
}

export default HomePage