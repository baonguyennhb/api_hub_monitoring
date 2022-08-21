import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingTableTag } from '../../../Tag/redux'
import { addTag } from '../../redux'
import President from './President'

class Container extends Component {

    state = {
        isModalVisible: false,
        data: {},
    }
    showModal = () => {
        this.setState({
            isModalVisible: true
        })
        this.props.fetchingTableTag({metterId: null})
    };
    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }
    render() {
        return (
            <President {...this.props}
                isModalVisible={this.state.isModalVisible}
                showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
                tags = {this.props.tags.list.data}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchingTableTag: (metter_id) => {
            dispatch(fetchingTableTag(metter_id))
        },
        addTag: (tagIdList) => {
            dispatch(addTag(tagIdList))
        }
    }
}
function mapStateToProps(state) {
    return {
        tags: state.tag,
        data_hub: state.data_hub
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)

