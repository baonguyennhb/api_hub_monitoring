import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlantsOverview } from '../redux/actions'
import President from './President'
class Container extends Component {
  render() {
    return (
      <President {...this.props} />
    )
  }

  componentDidMount() {
    this.props.fetchPlantsOverview(1060);
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchPlantsOverview: (siteId) => {
      dispatch(fetchPlantsOverview(siteId));
    },
  }
}
function mapStateToProps(state) {
  return {
    plants: state.plant
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
