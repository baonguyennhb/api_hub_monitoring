import React, { Component } from 'react'
import President from './President'
import { clearToken } from '../../feautures/Auth/redux/actions';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loadStateFromLocal } from '../../feautures/Auth/redux/reducer';
class Container extends Component {
  handleLogout = () => {
    console.log("Logout")
    this.props.clearToken();
  }
  render() {
    return (
      <President {...this.props} handleLogout={this.handleLogout} />
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    clearToken: () => {
      dispatch(clearToken());
    },
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    common: state.common
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
