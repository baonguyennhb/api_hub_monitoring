import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSideMenu } from '../../feautures/Common/redux'
import President from './President'

class Container extends Component {
    state = {
        collapsed: false
    }
    handleToggle = () => {
        this.props.toggleSideMenu(this.props.common.collapse)
    }
  render() {
    return (
      <President {...this.props} handleToggle = {this.handleToggle} collapsed = {this.state.collapsed}/>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    toggleSideMenu: (collapse) => {
      dispatch(toggleSideMenu(collapse))
    }
  }
}

export function mapStateToProps(state) {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
