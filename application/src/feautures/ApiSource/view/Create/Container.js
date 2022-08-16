import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDevice } from '../../../Devices/redux'
import { fetchingTableApiSource, testConnectApiSource, createApiSource } from '../../redux'
import President from './President'

class Container extends Component {
    formRef = React.createRef()
    state = {
        isModalVisible: false,
        data: {}
    }
    onReset = () => {
        this.formRef.current.resetFields();
    };
    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };
    handleOk = () => {
        this.formRef.current.submit()
    };
    onFinish = (value) => {
        const authorization = value.authorization === undefined ? false : value.authorization
        const newApiSource = {
            ...value,
            authorization: authorization ? 1: 0
        }
        //console.log(newApiSource)
        this.props.createApiSource(newApiSource)
        this.onReset()
        this.setState({
            isModalVisible: false
        })
    }
    handleCancel = () => {
        this.onReset()
        this.setState({
            isModalVisible: false
        })
    }
    handleChangeUrl = (e) => {
        this.setState({
            ...this.state,
            data: {
                url: e.target.value
            }
        })
    }
    handleTestConnect = (params) => {
        this.props.testConnectApiSource(this.state.data)
    }
    render() {
        return (
            <President {...this.props}
                isModalVisible={this.state.isModalVisible}
                showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
                handleTestConnect = {this.handleTestConnect}
                handleChangeUrl = {this.handleChangeUrl}
                onFinish={this.onFinish}
                onReset={this.onReset}
                data={this.state.data}
                formRef={this.formRef}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createDevice: (params) => {
            dispatch(createDevice(params))
        },
        fetchingTableApiSource: () => {
            dispatch(fetchingTableApiSource())
        },
        testConnectApiSource: (params) => {
            dispatch(testConnectApiSource(params))
        },
        createApiSource: (params) => {
            dispatch(createApiSource(params))
        }

    }
}
function mapStateToProps(state) {
    return {
        devices: state.device
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)

