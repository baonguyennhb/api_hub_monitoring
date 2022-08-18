import { Button, Modal, Form, Input } from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input;
class FormDevice extends Component {
    render() {
        let { isModalVisible, handleOk, handleCancel, onFinish, data, isDetail } = this.props
        data = data !== undefined ? data : {}
        const { metter_id, serial, model, description, interval } = data
        let title_form = isDetail ? "EDIT METTER" : "CREATE A NEW METTER"
        let isDisable = isDetail ? true : false
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <Form onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ metter_id: metter_id, serial: serial, model: model, description: description, interval: interval }}
                        layout="vertical"
                    >
                        <Form.Item label="Metter ID" name="metter_id" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input Metter ID" disabled = {isDisable} />
                        </Form.Item>
                        <Form.Item label="Serial" name="serial" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input Serial" disabled = {isDisable}/>
                        </Form.Item>
                        <Form.Item label="Description" name="description" >
                            <TextArea placeholder="Input Description" />
                        </Form.Item>
                        <Form.Item label="Interval" name="interval" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="Input Interval" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormDevice
