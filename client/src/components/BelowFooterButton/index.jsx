import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './BelowFooterButton.module.sass'

function BelowFooterButton () {
  return (
    <div className={styles.outerContainer}>
      <span>
        Ready to get started? Launch a contest and start receiving submissions
        instantly.
      </span>
      <Link to='/startContest'>
        <span>
          <i class='far fa-lightbulb mr-1'> Start A Contest</i>
        </span>
      </Link>
    </div>
  )
}

export default BelowFooterButton
