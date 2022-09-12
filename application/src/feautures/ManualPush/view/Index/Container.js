import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingTableALlDevice } from '../../../Devices/redux'
import { pushToDataHub } from '../../redux'
import President from './President'

class Container extends Component {
    render() {
    return (
      <President {...this.props}
      handlePushDoDataHub = {this.handlePushDoDataHub}
      />
    )
  }
  handlePushDoDataHub = (value) => {
    this.props.pushToDataHub(value)
  }
  componentDidMount() {
    this.props.fetchingTableALlDevice()
  }
}

export function mapDispatchToProps(dispatch) {
  return {
   fetchingTableALlDevice:() => {
    dispatch(fetchingTableALlDevice())
   },
   pushToDataHub: (params) => {
    dispatch(pushToDataHub(params))
   }
  }
}

export function mapStateToProps(state) {
  return {
    devices: state.device
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


