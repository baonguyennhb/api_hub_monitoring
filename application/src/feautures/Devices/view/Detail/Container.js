import React, { Component } from 'react'
import President from './President'
import { fetchingTableDevice } from '../../redux'
import { connect } from 'react-redux'

class Container extends Component {
  render() {
    return (
      <President {...this.props}/>
    )
  }
  componentDidMount() {
    this.props.fetchingTableDevice()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableDevice: () => {
      dispatch(fetchingTableDevice())
    }
  }
}
function mapStateToProps(state) {
  return {
    devices: state.device
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)