import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
export default class ModalForm extends Component {
    render() {
        const { visible, onCancel, onCreate, form, deviceList } = this.props;
        return (
            <Modal title="CREATE A NEW TAG" visible={visible} onCancel={onCancel} 
                footer={[
                    <Button key="back" onClick={onCancel} >
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick = {onCreate} >
                        Create
                    </Button>,
                ]}
            >
                <Form onFinish={this.onFinish}
                >
                    <Form.Item
                        name="device"
                        label="SERIAL"
                    >
                        <Select
                            placeholder="Select a Serial Device"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            {
                                deviceList.map(device => (
                                    <Option key={device.id} value={device.serial}>{device.serial}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="TAG NAME">
                        <Input placeholder="Input TAG NAME" />
                    </Form.Item>
                    <Form.Item label="DESCRIPTION">
                        <TextArea placeholder="Input DESCRIPTION" />
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
