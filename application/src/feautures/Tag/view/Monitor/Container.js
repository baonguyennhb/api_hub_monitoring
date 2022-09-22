import React, { Component } from 'react'
import President from './President'
import { fetchingTableTag, fetchingMonitorTag } from '../../redux'
import { fetchingDetailApiSource } from '../../../ApiSource/redux'
import { deleteTag } from '../../redux'
import { connect } from 'react-redux'

class Container extends Component {
  render() {
    return (
      <>
        <President {...this.props}
          apiSource = {this.props.apiSource.detail.data.connection_name}
          apiSourceId = {this.props.apiSource.detail.data.id?.toString()}
          metterId = {window.location.pathname.split("/")[3]}
        />
      </>
    )
  }
  componentDidMount() {
    const params = { metterId: window.location.pathname.split("/")[3], apiSourceId:  window.location.pathname.split("/")[2]}
    this.props.fetchingTableTag(params)
    this.props.fetchingMonitorTag(params)
    const api_source_id = { apiSourceId: window.location.pathname.split("/")[2] }
    this.props.fetchingDetailApiSource(api_source_id)
  }
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
    fetchingMonitorTag: (params) => {
      dispatch(fetchingMonitorTag(params))
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