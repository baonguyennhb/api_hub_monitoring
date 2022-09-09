import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingDetailDataHub, fetchingTableTagMqtt, removeTag, downloadConfig, connectDataHub, disconnectDataHub, getStatusConnectDataHub } from '../../redux'
import President from './President'

class Container extends Component {
  formRef = React.createRef()
  state = {
    data: {},
    loading: false
  }
  handleDownloadConfigMqtt = () => {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
        this.props.downloadConfig()
      }, 2000)
    })
  }
  handleConnectDataHub = () => {
    console.log("Connect Action")
    this.formRef.current.submit()
  }
  handleDisConnectDataHub = () => {
    this.props.disconnectDataHub()
  }
  onFinish = (value) => {
    console.log("SubmitForm")
    this.props.connectDataHub(value)
  }
  handleRemoveTag = (data) => {
    this.props.removeTag({id: data.id})
  }
  componentDidMount() {
    this.props.fetchingDetailDataHub()
    this.props.fetchingTableTagMqtt()
    this.props.getStatusConnectDataHub()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data_hub.detail.loading !== this.props.data_hub.detail.loading && !this.props.data_hub.detail.loading) {
      this.formRef.current.setFieldsValue({
        ...this.props.data_hub.detail.data
      })
    }
    if (prevProps.data_hub.reload !== this.props.data_hub.reload && this.props.data_hub.reload == true) {
      this.props.fetchingTableTagMqtt()
    }
    if (prevProps.data_hub.connect.loading !== this.props.data_hub.connect.loading) {
      this.props.getStatusConnectDataHub()
      console.log("test")
    }
    if (prevProps.data_hub.disconnect.loading !== this.props.data_hub.disconnect.loading) {
      this.props.getStatusConnectDataHub()
      console.log("test")
    }
  }
  render() {
    return (
      <President {...this.props}
        loading={this.state.loading}
        loadingConnect = {this.props.data_hub.connect.loading}
        loadingDisConnect = {this.props.data_hub.disconnect.loading}
        handleDownloadConfigMqtt={this.handleDownloadConfigMqtt}
        formRef={this.formRef}
        handleRemoveTag = {this.handleRemoveTag}
        onFinish = {this.onFinish}
        handleConnectDataHub = {this.handleConnectDataHub}
        handleDisConnectDataHub = {this.handleDisConnectDataHub}
        statusDataHub = {this.props.data_hub.status.data?.data}
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
    },
    connectDataHub: (params) => {
      dispatch(connectDataHub(params))
    },
    disconnectDataHub: () => {
      dispatch(disconnectDataHub())
    },
    getStatusConnectDataHub: () => {
      dispatch(getStatusConnectDataHub())
    }
  }
}

export function mapStateToProps(state) {
  return {
    data_hub: state.data_hub
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


