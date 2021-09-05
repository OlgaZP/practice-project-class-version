import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RateBlock.module.sass'

function RateBlock (props) {
  const {
    rateOptions: {
      rateName,
      description,
      price: { currency, amount },
      options
    },
    color
  } = props

  return (
    <li className={styles.RateBlock}>
      <div className={styles.rateBlockHeader} style={{ borderColor: color }}>
        <h3 style={{ color: color }}>{rateName} </h3>
        <p>{description}</p>
        <p className={styles.price} style={{ color: color }}>
          {currency}
          {amount}
        </p>
      </div>
      <ul className={styles.optionsList}>
        {options.map((option, i) => (
          <li data-tooltip='tooltip' key={i}>
            {option}
          </li>
        ))}
      </ul>

      <Link
        to='#'
        style={{ backgroundColor: color }}
        className={styles.startLink}
      >
        Start
      </Link>
    </li>
  )
}

export default RateBlock
