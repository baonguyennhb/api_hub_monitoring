import React, { Component } from 'react'
import { Form, Input, Button, Space, Col, Row } from 'antd';
export default class FormMqtt extends Component {
    render() {
        const { host, port, username, password, group_id, interval } = this.props.data
        return (
            <Form onFinish={this.props.onFinish}
                ref={this.props.formRef}
                initialValues={{ host: host, port: port, username: username, password: password, group_id: group_id, interval: interval, }}
                layout="vertical"
            >
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="MQTT Version" name="mqtt_version" initialValue={"3.1.1"} >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Host" name="host" >
                            <Input placeholder="MQTT HOST" />
                        </Form.Item>
                        <Form.Item label="Port" name="port" >
                            <Input placeholder="MQTT PORT" />
                        </Form.Item>
                        <Form.Item label="Username" name="username" >
                            <Input placeholder="Input Username" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Password" name="password">
                            <Input placeholder="Input Password" />
                        </Form.Item>
                        <Form.Item label="GroupID" name="group_id">
                            <Input placeholder="Input GroupId" />
                        </Form.Item>
                        <Form.Item label="HeartBeat" name="heart_beat">
                            <Input placeholder="Input HeartBeat" />
                        </Form.Item>
                        <Form.Item label="Interval" name="interval">
                            <Input placeholder="Input Interval" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}
