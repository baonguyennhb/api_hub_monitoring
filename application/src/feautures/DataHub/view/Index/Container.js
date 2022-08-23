import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingDetailDataHub, fetchingTableTagMqtt, removeTag, downloadConfig } from '../../redux'
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
        this.formRef.current.submit()
      }, 3000)
    })
  }
  onFinish = (value) => {
    console.log("SubmitForm")
    this.props.downloadConfig(value)
  }
  handleRemoveTag = (data) => {
    this.props.removeTag({id: data.id})
  }
  componentDidMount() {
    this.props.fetchingDetailDataHub()
    this.props.fetchingTableTagMqtt()
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
  }
  render() {
    return (
      <President {...this.props}
        loading={this.state.loading}
        handleDownloadConfigMqtt={this.handleDownloadConfigMqtt}
        formRef={this.formRef}
        handleRemoveTag = {this.handleRemoveTag}
        onFinish = {this.onFinish}
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


