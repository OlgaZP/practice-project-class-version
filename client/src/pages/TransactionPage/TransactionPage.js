import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './TransactionPage.module.sass'
// import transactions from '../../api/pendingData_tmp'
import { TransactionTable } from './TransactionTable/TransactionTable'

function TransactionPage (props) {
  const { isFetching, error, transactions } = props

  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <>
      <Header />
      <section className={styles.transactionTableContainer}></section>
      <TransactionTable transactions={transactions} />
      <Footer />
    </>
  )
}
const mapStateToProps = state => state.transaction
const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage)
