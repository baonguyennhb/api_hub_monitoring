import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingDetailDataHub, fetchingTableTagMqtt, removeTag } from '../../redux'
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
      }, 3000)
    })
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
    }
  }
}

export function mapStateToProps(state) {
  return {
    data_hub: state.data_hub
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


