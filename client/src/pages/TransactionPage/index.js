import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './TransactionPage.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TransactionTable from './TransactionTable/index';
import { getTransactionsAction } from '../../actions/actionCreator';

function TransactionPage (props) {
  const {
    getTransactions,
    transaction: { transactions },
    // user: {
    //   data: { displayName },
    // },
  } = props;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Header />
      <section className={styles.transactionSection}>
        <h2 style={{ color: 'rgb(69, 90, 137)' }}>
          {/* {displayName},  */}
          verify history of your transactions!{' '}
        </h2>
        <TransactionTable transactions={transactions} />
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction,
    user: state.userStore,
  };
};
const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
