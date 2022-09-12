import React, { Component } from 'react'
import President from './President'
import { deleteTagConfig } from '../../redux'
import { connect } from 'react-redux'

class Container extends Component {
    state = {
        open: false,
        tagname: ""
    }
    handleSetValueTag = (value) => {
        this.setState({
            ...this.state,
            tagname: value
        })
    }
    handleShowModalDelete = () => {
        this.setState({
            ...this.state,
            open: true
        })
    }
    handleDeleteTagConfig = () => {
        this.props.deleteTagConfig({
            tagName: this.state.tagname
        })
    }
    handleCancel = () => {
        this.setState({
            ...this.state,
            open: false
        })
    }
    render() {
        return (
            <President {...this.props}
                handleShowModalDelete={this.handleShowModalDelete}
                handleDeleteTagConfig = {this.handleDeleteTagConfig}
                handleSetValueTag={this.handleSetValueTag}
                handleCancel={this.handleCancel}
                open={this.state.open}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTagConfig: (params) => {
            dispatch(deleteTagConfig(params))
        }
    }
}

function mapStateToProps(state) {
    return {
        data_hub: state.data_hub
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
