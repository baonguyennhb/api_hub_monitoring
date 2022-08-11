import React, { Component } from 'react'
import President from './President'
import { fetchingTableDevice, deleteDevice } from '../../redux'
import { connect } from 'react-redux'
import FormDevice from '../../component/FormDevice'

class Container extends Component {
  formRef = React.createRef()
  state = {
    data: {},
    isModalVisible: false,
  }
  showModal = (value) => {
    console.log("Show Edit Modal")
    console.log(value)
    this.setState({
      data : value,
      isModalVisible: true
    })
  }
  handleOk = () => {
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    this.onResetForm()
  }
  handleCancel = () => {
    this.onResetForm()
    this.setState({
      ...this.state,
      isModalVisible: false
    })
  }
  onResetForm = () => {
    console.log("reset form")
    this.formRef.current.resetFields();
  }
  handleDelete = (data) => {
    this.props.deleteDevice({ id: data.id })
  }
  render() {
    return (
      <>
        <President {...this.props}
          handleDelete={this.handleDelete}
          connection={"E_ThangLong01"}
          showModal={this.showModal}
        />
        <FormDevice {...this.props}   
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          isModalVisible={this.state.isModalVisible}
          isDetail = {true}
          data = {this.state.data}
          formRef = {this.formRef}
          />
      </>
    )
  }
  componentDidMount() {
    this.props.fetchingTableDevice()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.devices.reload !== this.props.devices.reload && this.props.devices.reload) {
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