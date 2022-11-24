import React, { Component } from 'react'
import President from './President'
import { fetchingTableDevice, deleteDevice, updateDevice } from '../../redux'
import { fetchingDetailApiSource } from '../../../ApiSource/redux'
import { connect } from 'react-redux'
import { notification } from 'antd'
import FormDevice from '../../component/FormDevice'

class Container extends Component {
  formRef = React.createRef()
  state = {
    data: {},
    isModalVisible: false,
  }
  showModal = (value) => {
    console.log("Show Edit Modal")
    this.setState({
      isModalVisible: true,
      data: value
    }, () => {
      this.formRef.current.setFieldsValue({
        serial: value.serial,
        metter_id: value.metter_id,
        description: value.description,
        interval: value.interval
      })
    })
  }
  handleOk = () => {
   this.formRef.current.submit()
  }
  handleCancel = () => {
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    //this.onResetForm()
  }
  onFinish = (value) => {
    let newDevice = {
      ...value,
      id: this.state.data.id
    }
    this.props.updateDevice(newDevice)
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    this.onResetForm()
  }
  onResetForm = () => {
    console.log("reset form")
    this.formRef.current.resetFields();
  }
  handleDelete = (data) => {
    this.props.deleteDevice({ id: data.id })
  }
  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Feauture is being updated!',
    })
    notification.config({
      duration: 2
    })
  };
  render() {
    return (
      <>
        <President {...this.props}
          handleDelete={this.handleDelete}
          connection={this.props.apiSource.detail.data?.connection_name}
          showModal={this.showModal}
        />
        <FormDevice {...this.props}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          isModalVisible={this.state.isModalVisible}
          isDetail={true}
          data={this.state.data}
          formRef={this.formRef}
          onFinish = {this.onFinish}
        />
      </>
    )
  }
  componentDidMount() {
    const api_source = { apiSource: window.location.pathname.split("/")[2] }
    this.props.fetchingTableDevice(api_source)
    const api_source_id = { apiSourceId: window.location.pathname.split("/")[2] }
    this.props.fetchingDetailApiSource(api_source_id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.devices.reload !== this.props.devices.reload && this.props.devices.reload) {
      console.log("OK")
      const api_source = { apiSource: window.location.pathname.split("/")[2] }
      this.props.fetchingTableDevice(api_source)
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableDevice: (apiSource) => {
      dispatch(fetchingTableDevice(apiSource))
    },
    deleteDevice: (id) => {
      dispatch(deleteDevice(id))
    },
    fetchingDetailApiSource: (id) => {
      dispatch(fetchingDetailApiSource(id))
    },
    updateDevice: (new_device) => {
      dispatch(updateDevice(new_device))
    }
  }
}
function mapStateToProps(state) {
  return {
    devices: state.device,
    apiSource: state.apiSource
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)