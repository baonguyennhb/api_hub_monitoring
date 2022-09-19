import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingTableDevice } from '../../../Devices/redux'
import { fetchingTableApiSource } from '../../../ApiSource/redux'
import { pushToDataHub } from '../../redux'
import President from './President'

class Container extends Component {
  render() {
    return (
      <President {...this.props}
        handlePushDoDataHub={this.handlePushDoDataHub}
      />
    )
  }
  handlePushDoDataHub = (value) => {
    this.props.pushToDataHub(value)
  }
  componentDidMount() {
    this.props.fetchingTableApiSource()
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchingTableApiSource: () => {
      dispatch(fetchingTableApiSource())
    },
    fetchingTableDevice: (params) => {
      dispatch(fetchingTableDevice(params))
    },
    pushToDataHub: (params) => {
      dispatch(pushToDataHub(params))
    }
  }
}

export function mapStateToProps(state) {
  return {
    devices: state.device,
    apiSources : state.apiSource
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


