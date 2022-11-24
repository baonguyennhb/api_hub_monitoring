import React, { Component } from 'react'
import { notification } from 'antd';
import President from './President'
import { fetchingTableTag, updateTag } from '../../redux'
import { fetchingDetailApiSource } from '../../../ApiSource/redux'
import { fetchingDetailDevice } from '../../../Devices/redux';
import { deleteTag } from '../../redux'
import { connect } from 'react-redux'
import FormTag from '../../component/FormTag'

class Container extends Component {
  formRef = React.createRef()
  state = {
    data: {},
    isModalVisible: false,
  }
  render() {
    return (
      <>
        <President {...this.props}
          handleDelete={this.handleDelete}
          showModal={this.showModal}
          apiSource={this.props.apiSource.detail.data.connection_name}
          apiSourceId = {this.props.apiSource.detail.data.id?.toString()}
          metterId={window.location.pathname.split("/")[3]}
        />
        <FormTag {...this.props}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          isModalVisible={this.state.isModalVisible}
          isDetail={true}
          data={this.state.data}
          formRef={this.formRef}
          onFinish={this.onFinish}
        />
      </>
    )
  }
  componentDidMount() {
    const api_source_id = { apiSourceId: window.location.pathname.split("/")[2] }
    const params = { metterId: window.location.pathname.split("/")[3], apiSourceId:  window.location.pathname.split("/")[2]}
    this.props.fetchingTableTag(params)
    this.props.fetchingDetailApiSource(api_source_id)
    this.props.fetchingDetailDevice(params)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tags.reload !== this.props.tags.reload && this.props.tags.reload) {
      console.log("Feching")
      const params = { metterId: window.location.pathname.split("/")[3], apiSourceId:  window.location.pathname.split("/")[2]}
      this.props.fetchingTableTag(params)
    }
  }
  handleDelete = (data) => {
    this.props.deleteTag({ id: data.id })
  }
  showModal = (value) => {
    console.log("Show Edit Modal")
    this.setState({
      isModalVisible: true,
      data: value
    }, () => {
      this.formRef.current.setFieldsValue({
        name: value.name,
        parameter: value.parameter,
        scale: value.scale,
        data_type: value.data_type
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
  onResetForm = () => {
    console.log("reset form")
    this.formRef.current.resetFields();
  }
  onFinish = (value) => {
    let newTag = {
      id: this.state.data.id,
      name: value.name,
      scale: value.scale,
      data_type: value.data_type
    }
    this.props.updateTag(newTag)
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    this.onResetForm()
  }
  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Feauture is being updated!',
    })
    notification.config({
      duration: 2
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableTag: (params) => {
      dispatch(fetchingTableTag(params))
    },
    deleteTag: (id) => {
      dispatch(deleteTag(id))
    },
    fetchingDetailApiSource: (id) => {
      dispatch(fetchingDetailApiSource(id))
    },
    fetchingDetailDevice: (id) => {
      dispatch(fetchingDetailDevice(id))
    },
    updateTag: (tag) => {
      dispatch(updateTag(tag))
    }
  }
}
function mapStateToProps(state) {
  return {
    tags: state.tag,
    apiSource: state.apiSource,
    device: state.device
  }
}
export default (connect(mapStateToProps, mapDispatchToProps)(Container))