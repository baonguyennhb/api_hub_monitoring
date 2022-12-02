import React, { Component } from 'react'
import President from './President'
import { clearToken } from '../../feautures/Auth/redux/actions';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loadStateFromLocal } from '../../feautures/Auth/redux/reducer';
import FormUser from './component/EditAcount';
import { editAccount, createAccount } from '../../feautures/Auth/redux/actions';
class Container extends Component {
  formRef = React.createRef()
  state = {
    isModalVisible: false,
    isEdit: false
  }
  handleLogout = () => {
    console.log("Logout")
    this.props.clearToken();
  }
  handleEditAccount = () => {
    this.setState({
      isModalVisible: true,
      isEdit: true
    })
  }
  handleCreateAccount = () => {
    this.setState({
      isModalVisible: true,
      isEdit: false
    })
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }
  onFinish = (value) => {
    if (this.state.isEdit) {
      const userInfo = JSON.parse(localStorage.getItem("api_hub"))
      let userEdit = {
        ...value,
        userId: userInfo?.data?.id
      }
      editAccount(userEdit)
    } else {
      createAccount(value)
    }
  }
  handleOk = () => {
    this.formRef.current.submit()
  }
  render() {
    return (
      <>
        <President {...this.props}
          handleLogout={this.handleLogout}
          handleEditAccount={this.handleEditAccount}
          handleCreateAccount={this.handleCreateAccount}
        />
        <FormUser
          isEdit={this.state.isEdit}
          isModalVisible={this.state.isModalVisible}
          handleCancel={this.handleCancel}
          formRef={this.formRef}
          handleOk={this.handleOk}
          onFinish={this.onFinish}
        />
      </>
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
