import React, { Component } from 'react'
import { notification } from 'antd';
import President from './President'
import { fetchingTableTag } from '../../redux'
import { fetchingDetailApiSource } from '../../../ApiSource/redux'
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
          metterId={window.location.pathname.split("/")[3]}
        />
        <FormTag {...this.props}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          isModalVisible={this.state.isModalVisible}
          isDetail={true}
          data={this.state.data}
          formRef={this.formRef}
        />
      </>
    )
  }
  componentDidMount() {
    const metterId = { metterId: window.location.pathname.split("/")[3] }
    this.props.fetchingTableTag(metterId)
    const api_source_id = { apiSourceId: window.location.pathname.split("/")[2] }
    this.props.fetchingDetailApiSource(api_source_id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tags.reload !== this.props.tags.reload && this.props.tags.reload) {
      console.log("Feching")
      const metterId = { metterId: window.location.pathname.split("/")[3] }
      this.props.fetchingTableTag(metterId)
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
        //interval: value.interval
      })
    })
  }
  handleOk = () => {
    this.openNotificationWithIcon('warning')
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    this.onResetForm()
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
    fetchingTableTag: (metterId) => {
      dispatch(fetchingTableTag(metterId))
    },
    deleteTag: (id) => {
      dispatch(deleteTag(id))
    },
    fetchingDetailApiSource: (id) => {
      dispatch(fetchingDetailApiSource(id))
    }
  }
}
function mapStateToProps(state) {
  return {
    tags: state.tag,
    apiSource: state.apiSource
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)