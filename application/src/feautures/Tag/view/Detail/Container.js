import React, { Component } from 'react'
import President from './President'
import { fetchingTableTag } from '../../redux'
import { connect } from 'react-redux'

class Container extends Component {
  render() {
    return (
      <President {...this.props}/>
    )
  }
  componentDidMount() {
    this.props.fetchingTableTag()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableTag: () => {
      dispatch(fetchingTableTag())
    }
  }
}
function mapStateToProps(state) {
  return {
    tags: state.tag
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)