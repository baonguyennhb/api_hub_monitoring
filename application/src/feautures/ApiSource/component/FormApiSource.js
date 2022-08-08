import { Button, Modal, Form, Input, Checkbox } from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input;
class FormApiSource extends Component {
    state = {
        isAuthorization: false
    }
    showAuthorization = (isCheck) => {
        this.setState({
            isAuthorization: isCheck
        })
    }
    render() {

        let { isModalVisible, handleOk, handleCancel, onFinish, data, isDetail } = this.props
        data = data !== undefined ? data : {}

        const { serial, model, description } = data
        let title_form = isDetail ? "EDIT INVERTER" : "CREATE A NEW INVERTER"
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    <Form onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ serial: serial, model: model, description: description }}
                        layout="vertical"
                    >
                        <Form.Item label="URL" name="serial">
                            <Input placeholder="Input SERIAL" />
                        </Form.Item>
                        <Form.Item label="Interval Time" name="model">
                            <Input placeholder="Input MODEL" />
                        </Form.Item>
                        <Form.Item label="Check connection time" name="description">
                            <Input placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item label="DESCRIPTION" name="description" >
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item name="authorization" valuePropName="checked" >
                            <Checkbox onChange={(e) => this.showAuthorization(e.target.checked)} >Authorization</Checkbox>
                        </Form.Item>
                        {
                            this.state.isAuthorization ? (
                                <>
                                    <Form.Item label="User name" name="username" >
                                        <Input placeholder="User name" />
                                    </Form.Item>
                                    <Form.Item label="Password" name="password" >
                                        <Input placeholder="Password" />
                                    </Form.Item>
                                </>

                            ) : null
                        }
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='btn-submit'>Submit</Button>
                            <Button className='btn-cancel' onClick={handleCancel}>Cancel</Button>
                            <Button htmlType="button" onClick={this.props.onReset}>
                                Reset
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormApiSource
