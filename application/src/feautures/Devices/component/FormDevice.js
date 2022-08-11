import { Button, Modal, Form, Input } from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input;
class FormDevice extends Component {
    render() {
        let { isModalVisible, handleOk, handleCancel, onFinish, data, isDetail } = this.props
        data = data !== undefined ? data : {}

        const { serial, model, description } = data
        let title_form = isDetail ? "EDIT INVERTER" : "CREATE A NEW INVERTER"
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <Form onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ serial: serial, model: model, description: description }}
                        layout="vertical"
                    >
                        <Form.Item label="SERIAL" name="serial" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input SERIAL" />
                        </Form.Item>
                        <Form.Item label="MODEL" name="model" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input MODEL" />
                        </Form.Item>
                        <Form.Item label="DESCRIPTION" name="description" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item label="INTERVAL" name="interval" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input INTERVAL" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormDevice
