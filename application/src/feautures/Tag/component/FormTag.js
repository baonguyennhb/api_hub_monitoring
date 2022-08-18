import { Button, Modal, Form, Input, Select } from 'antd';
import React, { Component } from 'react';
const { Option } = Select;
class FormTag extends Component {
    render() {
        let { isModalVisible, handleOk, handleCancel, onFinish, data, isDetail } = this.props
        data = data !== undefined ? data : {}
        const { name, parameter, scale } = data
        let title_form = isDetail ? "EDIT TAG" : "CREATE A NEW TAG"
        let isDisable = isDetail ? true : false
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <Form onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ name: name, parameter: parameter, scale: scale }}
                        layout="vertical"
                    >
                        <Form.Item label="Tagname" name="name" >
                            <Input placeholder="Input Tag name" />
                        </Form.Item>
                        <Form.Item label="Paramter" name="parameter" >
                            <Input placeholder="Input Parameter" disabled = {isDisable} />
                        </Form.Item>
                        <Form.Item label="Data type" name="data_type" >
                            <Select
                                placeholder="Select Data type"
                                allowClear
                            >
                                <Option value="String">String</Option>
                                <Option value="Number">Number</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Scale" name="scale" >
                            <Input placeholder="Input Scale" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormTag
