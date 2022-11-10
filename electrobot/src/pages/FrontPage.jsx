import React from 'react'
import Brands from '../components/Brands'
import Hero from '../components/Hero'
import Incentives from '../components/Incentives'
import TrendingProducts from '../components/TrendingProducts'


function Frontpage() {
  return (
    <>
      <Hero /> 
      <TrendingProducts /> 
      <Brands />
      <Incentives />
    </>
        
  )
}

export default Frontpage