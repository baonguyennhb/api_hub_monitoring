import { Modal, Form, Input } from 'antd';
import React, { Component } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TextArea } = Input;
class FormUser extends Component {
    render() {
        let { isEdit, isModalVisible, handleOk, handleCancel, onFinish, data } = this.props
        data = data !== undefined ? data : {}
        const userInfo = JSON.parse(localStorage.getItem("api_hub"))
        const { name, username } = userInfo !== null ? userInfo.data : { name: null, username: null }
        //const { metter_id, serial, model, description, interval } = data
        let title_form = isEdit? "EDIT ACOUNT" : "CREATE ACCOUNT"
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <Form onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ name: name, username: username }}
                        layout="vertical"
                    >
                        <Form.Item label="Name" name="name" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input placeholder="name" prefix={<UserOutlined />}  />
                        </Form.Item>
                        <Form.Item label="Username" name="username" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input  placeholder="Username" prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item label="Password" name="password" >
                            <Input.Password prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormUser
