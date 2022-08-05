import { Button, Modal, Tooltip, Form, Input, Select } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingTableDevice } from '../../../Devices/redux';
import './style.css'
const { TextArea } = Input;
const { Option } = Select;


class CreateTag extends Component {
    state = {
        isModalVisible: false,
        serial: '',
        tagName: ''
    }
    showModal = () => {
        this.setState({
            tagName: '',
            isModalVisible: true,
        })
    };

    onFinish = (value) => {
        console.log(value)
        this.handleOk()
    }


    handleOk = () => {
        this.setState({
            isModalVisible: false,
            tagName: ''
        })
        window.location.reload()
    };
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };
    componentDidMount() {
        this.props.fetchingTableDevice()
    }
    render() {
        const deviceList = this.props.devices.list.data
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Tag'}>
                    <Button type='primary' onClick={this.showModal}>
                        CREATE
                    </Button>
                </Tooltip>
                <Modal title="CREATE A NEW TAG" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                    <Form onFinish={this.onFinish} initialValues = {{tagName: ''}}
                        layout="vertical"
                    >
                        <Form.Item
                            name="device"
                            label="SERIAL"
                        >
                            <Select
                                placeholder="Select a Serial Device"
                                onChange={this.onGenderChange}
                                allowClear
                                value={this.state.serial}
                            >
                                {
                                    deviceList.map(device => (
                                        <Option key={device.id} value={device.serial}>{device.serial}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="TAG NAME" name="tagName" value = {this.state.tagName}>
                            <Input placeholder="Input TAG NAME"/>
                        </Form.Item>
                        <Form.Item label="DESCRIPTION">
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" className='btn-submit'>Submit</Button>
                            <Button className='btn-cancel' onClick={this.handleCancel}>Cancel</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}

export function mapStateToProps(state) {
    return {
        devices: state.device
    }
}
export function mapDispatchToProps(dispatch) {
    return {
        fetchingTableDevice: () => {
            dispatch(fetchingTableDevice())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateTag)
