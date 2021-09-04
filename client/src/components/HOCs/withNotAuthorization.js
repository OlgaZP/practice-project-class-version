import React from 'react'
import { connect } from 'react-redux'
import { onlyForNotAuthorize } from '../../actions/actionCreator'
import Spinner from '../Spinner/Spinner'

const withNotAuthorization = Component => {
  class withLoginSignUp extends React.Component {
    componentDidMount () {
      const {
        history: { replace }
      } = this.props
      this.props.checkAuth(replace)
    }

    render (props) {
      const { data, isFetching, history } = this.props
      if (isFetching) {
        return <Spinner />
      }
      if (!data) {
        return <Component history={history} />
      }
      return null
    }
  }

  const mapStateToProps = state => state.userStore

  const mapDispatchToProps = dispatch => ({
    checkAuth: data => dispatch(onlyForNotAuthorize(data))
  })

  return connect(mapStateToProps, mapDispatchToProps)(withLoginSignUp)
}

export default withNotAuthorization
