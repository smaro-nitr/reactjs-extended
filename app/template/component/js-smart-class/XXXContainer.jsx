import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import XXX from './XXXComponent'
import { } from './XXXAction'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(XXX)
