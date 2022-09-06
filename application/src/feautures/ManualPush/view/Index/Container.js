import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingDetailDataHub, fetchingTableTagMqtt, removeTag, downloadConfig } from '../../redux'
import President from './President'

class Container extends Component {
 
    render() {
    return (
      <President {...this.props}
      />
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchingDetailDataHub: () => {
      dispatch(fetchingDetailDataHub())
    },
    fetchingTableTagMqtt: () => {
      dispatch(fetchingTableTagMqtt())
    },
    removeTag: (id) => {
      dispatch(removeTag(id))
    },
    downloadConfig: (params) => {
      dispatch(downloadConfig(params))
    }
  }
}

export function mapStateToProps(state) {
  return {
    data_hub: state.data_hub
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


