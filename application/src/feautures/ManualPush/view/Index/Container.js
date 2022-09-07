import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingTableALlDevice } from '../../../Devices/redux'
import President from './President'

class Container extends Component {
    render() {
    return (
      <President {...this.props}
      />
    )
  }
  componentDidMount() {
    this.props.fetchingTableALlDevice()
  }
}

export function mapDispatchToProps(dispatch) {
  return {
   fetchingTableALlDevice:() => {
    dispatch(fetchingTableALlDevice())
   }
  }
}

export function mapStateToProps(state) {
  return {
    devices: state.device
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


