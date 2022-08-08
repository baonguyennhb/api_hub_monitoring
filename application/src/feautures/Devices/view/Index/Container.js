import React, { Component } from 'react'
import President from './President'
import { fetchingTableDevice, deleteDevice } from '../../redux'
import { connect } from 'react-redux'

class Container extends Component {
  state = {
    devices: []
  }
  handleDelete = (data) => {
    this.props.deleteDevice({id: data.id})
  }
  render() {
    return (
      <President {...this.props}
        handleDelete={this.handleDelete}
      />
    )
  }
  componentDidMount() {
    this.props.fetchingTableDevice()
  }
  componentDidUpdate(prevProps) {
    if ( prevProps.devices.reload !==  this.props.devices.reload && this.props.devices.reload) {
      console.log("OK")
      this.props.fetchingTableDevice()
    }
    // if (this.props.devices.reload) {
    //   this.props.fetchingTableDevice()
    // }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableDevice: () => {
      dispatch(fetchingTableDevice())
    },
    deleteDevice: (id) => {
      dispatch(deleteDevice(id))
    }
  }
}
function mapStateToProps(state) {
  return {
    devices: state.device
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)