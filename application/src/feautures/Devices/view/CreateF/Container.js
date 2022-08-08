import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDevice } from '../../redux'
import { fetchingTableDevice } from '../../redux'
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
        this.onReset()
        this.setState({
            isModalVisible: false
        })
    };
    onFinish = (value) => {
        this.props.createDevice(value)
        this.handleOk()
    }
    handleCancel = () => {
        this.onReset()
        this.setState({
            isModalVisible: false
        })
    };
    render() {
        return (
            <President {...this.props}
                isModalVisible = {this.state.isModalVisible}
                showModal = {this.showModal}
                handleOk = {this.handleOk}
                handleCancel = {this.handleCancel}
                onFinish = {this.onFinish}
                onReset = {this.onReset}
                data = {this.state.data}
                formRef = {this.formRef}
             />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createDevice: (params) => {
            dispatch(createDevice(params))
        },
        fetchingTableDevice: () => {
            dispatch(fetchingTableDevice())
        }

    }
}
function mapStateToProps(state) {
    return {
        devices: state.device
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)

