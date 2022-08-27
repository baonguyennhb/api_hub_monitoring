import React, { Component } from 'react'
import President from './President'
import { fetchingTableTag, fetchingMonitorTag,  fetchingMonitorLogTag} from '../../redux'
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
    const metterId = { metterId: window.location.pathname.split("/")[3] }
    this.props.fetchingTableTag(metterId)
    this.props.fetchingMonitorTag(metterId)
    const api_source_id = { apiSourceId: window.location.pathname.split("/")[2] }
    this.props.fetchingDetailApiSource(api_source_id)
    const tagId = {tagId: window.location.pathname.split("/")[4]}
    this.props.fetchingMonitorLogTag(tagId)
  }
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
    },
    fetchingMonitorTag: (metterId) => {
      dispatch(fetchingMonitorTag(metterId))
    },
    fetchingMonitorLogTag: (tagId) => {
      dispatch(fetchingMonitorLogTag(tagId))
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