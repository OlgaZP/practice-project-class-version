import ACTION from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  error: null,
  transactions: []
}

export default function transactionReducer (state = initialState, action) {
  const { type } = action
  switch (type) {
    case ACTION.GET_TRANSACTIONS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }
    case ACTION.GET_TRANSACTIONS_SUCCESS: {
      const { transactions } = action
      return {
        ...state,
        isFetching: false,
        transactions
      }
    }
    case ACTION.GET_TRANSACTIONS_ERROR: {
      const { error } = action
      return {
        ...state,
        isFetching: false,
        error
      }
    }
    default:
      return state
  }
}
