import React, { Component } from 'react'
import President from './President'
import { fetchingTableApiSource, deleteApiSource, updateApiSource, testConnectApiSource } from '../../redux/actions'
import { notification } from 'antd'
import { connect } from 'react-redux'
import FormApiSource from '../../component/FormApiSource'

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
        connection_name: value.connection_name,
        url: value.url,
        key_time: value.key_time,
        description: value.description,
        interval: value.interval,
        check_connection_time: value.connection_time,
        authorization: value.is_authorization,
        username: value.username,
        password: value.password
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
    let newApiSource = {
      id: this.state.data.id,
      ...value
    }
    this.props.updateApiSource(newApiSource)
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
    this.props.deleteApiSource({ id: data.id })
  }
  handleChangeUrl = (e) => {
    this.setState({
      ...this.state,
      data: {
        url: e.target.value
      }
    })
  }
  handleTestConnect = (params) => {
    this.props.testConnectApiSource(this.state.data)
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
          showModal={this.showModal}
          handleDelete={this.handleDelete}
        />
        <FormApiSource {...this.props}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          isModalVisible={this.state.isModalVisible}
          isDetail={true}
          data={this.state.data}
          formRef={this.formRef}
          onFinish={this.onFinish}
          handleTestConnect = {this.handleTestConnect}
        />
      </>
    )
  }
  componentDidMount() {
    this.props.fetchingTableApiSource()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.apiSources.reload !== this.props.apiSources.reload && this.props.apiSources.reload) {
      this.props.fetchingTableApiSource()
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableApiSource: () => {
      dispatch(fetchingTableApiSource())
    },
    deleteApiSource: (id) => {
      dispatch(deleteApiSource(id))
    },
    updateApiSource: (api_source) => {
      dispatch(updateApiSource(api_source))
    },
    testConnectApiSource: (params) => {
      dispatch(testConnectApiSource(params))
    }
  }
}
function mapStateToProps(state) {
  return {
    apiSources: state.apiSource
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
