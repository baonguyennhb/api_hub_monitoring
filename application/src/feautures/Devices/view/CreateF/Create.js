import { Button, Modal, Tooltip, Form, Input, } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import Create from '../../../Tag/view/Create/Create';
import { createDevice } from '../../redux';
const { TextArea } = Input;
class CreateDevice extends Component {
    //const [isModalVisible, setIsModalVisible] = useState(false);
    state = {
        isModalVisible: false
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };

    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    onFinish = (value) => {
        console.log(value)
        this.props.createDevice(value)
        //this.handleOk()
    }
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };

    render() {
        const { create } = this.props.devices
        //console.log(create.data.serial)
        if (create.data.serial) {
            return (
                <Navigate to={"/devices"} />
            )
        }
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Device'}>
                    <Button type='primary' className='btn-insert' onClick={this.showModal}>
                        Create
                    </Button>
                </Tooltip>
                <Modal title="CREATE A NEW INVERTER" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                    <Form onFinish={this.onFinish}
                        layout="vertical"
                    >
                        <Form.Item label="SERIAL" name="serial">
                            <Input placeholder="Input SERIAL" />
                        </Form.Item>
                        <Form.Item label="MODEL" name = "model">
                            <Input placeholder="Input MODEL" />
                        </Form.Item>
                        <Form.Item label="DESCRIPTION" name = "description">
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item label="INTERVAL" name = "interval">
                            <Input placeholder="Input INTERVAL" />
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
};

function mapDispatchToProps(dispatch) {
    return {
        createDevice: (params) => {
            dispatch(createDevice(params))
        }
    }
}
function mapStateToProps(state) {
    return {
        devices: state.device
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDevice)
