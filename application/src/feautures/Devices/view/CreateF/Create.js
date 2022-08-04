import { Button, Modal, Tooltip, Form, Input,  } from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input;
export default class CreateDevice extends Component {
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

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };


    render() {
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Device'}>
                    <Button type='primary' className='btn-insert' onClick={this.showModal}>
                        Create
                    </Button>
                </Tooltip>
                <Modal title="CREATE A NEW INVERTER" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form
                    >
                        <Form.Item label="SERIAL">
                            <Input placeholder="Input SERIAL" />
                        </Form.Item>
                        <Form.Item label="MODEL">
                            <Input placeholder="Input MODEL" />
                        </Form.Item>
                        <Form.Item label="DESCRIPTION">
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};
