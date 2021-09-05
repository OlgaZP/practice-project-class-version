import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RateBlock from './RateBlock/RateBlock'
import styles from './PricingPage.module.sass'
import prices from './prices.json'

const colorRateMap = [
  'rgb(224,180,141)',
  'rgb(233,191,100)',
  'rgb(101,101,101)',
  'rgb(61,213,212)'
]

function PricingPage () {
  return (
    <>
      <Header />
      Pricing Page Header
      <section className={styles.RateSection}>
        <ul className={styles.RateBlocksContainer}>
          {prices.map((rate, i) => (
            <RateBlock key={i} rateOptions={rate} color={colorRateMap[i]} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default PricingPage
