import React, { Component } from 'react'
import President from './President'
import { fetchingTableApiSource, deleteApiSource } from '../../redux/actions'
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
    this.setState({
      ...this.state,
      isModalVisible: false
    })
    this.openNotificationWithIcon("warning")
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
  handleDelete = (data) => {
    this.props.deleteApiSource({id: data.id})
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
          handleDelete = {this.handleDelete}
        />
        <FormApiSource {...this.props}
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
    }
  }
}
function mapStateToProps(state) {
  return {
    apiSources: state.apiSource
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
