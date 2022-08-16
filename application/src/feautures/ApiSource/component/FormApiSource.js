import { Button, Modal, Form, Input, Checkbox } from 'antd';
import React, { Component } from 'react';
import "./style.scss"
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

        let { isModalVisible, handleOk, handleCancel, handleTestConnect, handleChangeUrl, onFinish,  data, isDetail } = this.props
        data = data !== undefined ? data : {}

        const { connection_name, url, description, interval, check_connection_time, is_authorization } = data
        let title_form = isDetail ? "EDIT API SOURCE" : "CREATE A NEW API SOURCE"
        return (
            <>
                <Modal title={title_form} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                    <Button key="test-connect" type="primary" className='btn-test-connection' onClick={handleTestConnect}>
                        Test connection
                    </Button>,
                ]}>
                    <Form 
                        onFinish={onFinish}
                        ref={this.props.formRef}
                        initialValues={{ connection_name: connection_name, url: url, description: description, interval: interval, check_connection_time: check_connection_time }}
                        layout="vertical"
                    >
                        <Form.Item label="Connection name" name="connection_name">
                            <Input placeholder="Connection name" />
                        </Form.Item>
                        <Form.Item label="URL" name="url">
                            <Input placeholder="URL" onChange={handleChangeUrl} />
                        </Form.Item>
                        <Form.Item label="Interval Time" name="interval">
                            <Input placeholder="Interval Time" />
                        </Form.Item>
                        <Form.Item label="Check connection time" name="check_connection_time">
                            <Input placeholder="Check connection time" />
                        </Form.Item>
                        <Form.Item label="Description" name="description" >
                            <TextArea placeholder="Description" />
                        </Form.Item>
                        <Form.Item name="authorization" valuePropName="checked" >
                            <Checkbox onChange={(e) => this.showAuthorization(e.target.checked)} >Authorization</Checkbox>
                        </Form.Item>
                        {
                            this.state.isAuthorization || is_authorization ? (
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
                    </Form>
                </Modal>
            </>
        )
    }
};


export default FormApiSource
