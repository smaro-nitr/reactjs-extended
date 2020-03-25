import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import XXX from './XXXComponent'
import { } from './XXXAction'

import { MainState } from '../store/mainReducer' // check import path

const mapStateToProps = (state: MainState) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(XXX)
