import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTag } from '../../redux'
import { fetchingTableTag } from '../../redux'
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
        this.setState({
            isModalVisible: false
        })
    };
    onFinish = (value) => {
        const metterId =  window.location.pathname.split("/")[3] 
        const api_source = window.location.pathname.split("/")[2] 
        const newTag = {
            ...value,
            metterId: metterId,
            apiSource : api_source
        }
        console.log(newTag)
        this.props.createTag(newTag)
        this.onReset()
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
        createTag: (params) => {
            dispatch(createTag(params))
        },
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

