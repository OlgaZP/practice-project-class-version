import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RateBlock from './RateBlock/RateBlock'

function PricingPage () {
  return (
    <>
      <Header />
      <div>
        Pricing Page Default Test
        <RateBlock />
      </div>
      <Footer />
    </>
  )
}

export default PricingPage
