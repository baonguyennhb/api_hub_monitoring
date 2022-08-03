import React, { Component } from 'react'
import President from './President'
import { fetchingTableApiSource } from '../../redux/actions'
import { connect } from 'react-redux'

class Container extends Component {
  render() {
    return (
      <President {...this.props}/>
    )
  }
  componentDidMount() {
    this.props.fetchingTableApiSource()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchingTableApiSource: () => {
      dispatch(fetchingTableApiSource())
    }
  }
}
function mapStateToProps(state) {
  return {
    apiSources: state.apiSource
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
