import { Button, Col, Row, Space, Table, Tooltip, Modal } from 'antd'
import React, { Component } from 'react'
import FormMqtt from '../../component/FormMqtt'
import { SettingOutlined, TagsOutlined, ExclamationCircleOutlined, EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import './style.css'
import { AddTag } from '../AddTag';
export default class President extends Component {
    confirm = (data) => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Do you want to remove this tag',
            okText: 'Remove',
            cancelText: 'Cancel',
            onOk: () => this.props.handleRemoveTag(data)
        });
    };
    render() {
        const { data } = this.props.data_hub.detail
        const tagList = this.props.data_hub.tags.data
        let dataSource = tagList.map(tag => {
            return {
                key: tag.id,
                ...tag
            }
        })
        const columns = [
            {
                title: 'Tag name',
                key: 'name',
                dataIndex: 'name'
            },
            {
                title: 'Tag Type',
                dataIndex: 'tag_type',
                key: 'tag_type',
            },
            {
                title: 'Deadband',
                dataIndex: 'Deadband',
                key: 'Deadband',
            },
            {
                title: 'Deadband Type',
                dataIndex: 'deadband_type',
                key: 'deadband_type',
            },
            {
                title: 'Span High',
                dataIndex: 'span_high',
                key: 'span_high',
            },
            {
                title: 'Span Low',
                dataIndex: 'span_low',
                key: 'span_low',
            },
            {
                title: 'Decimal Digits',
                dataIndex: 'decimal_digits',
                key: 'decimal_digits',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Action',
                key: "action",
                render: (record) => (
                    <Space size={'middle'}>
                        <Tooltip title={"Remove Tag"}>
                            <DeleteOutlined onClick={(e) => this.confirm(record)} />
                        </Tooltip>
                        <Tooltip title={"Edit Tag"}>
                            <EditOutlined />
                        </Tooltip>
                    </Space>
                )
            }
        ];
        return (
            <div className='main-container'>
                <Row>
                    <Col span={12}>
                        <div className='title-page'>DATA - HUB CONFIGURATION</div>
                    </Col>
                    <Col span={12}>
                        <Button type='primary' className='btn-download' loading={this.props.loading} onClick={this.props.handleDownloadConfigMqtt}> <DownloadOutlined /> Download</Button>
                    </Col>
                </Row>
                <div className='children-container'>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div className='form-config-mqtt'>
                                <div className='header-config-mqtt'>
                                    <Space size={"small"}>
                                        <SettingOutlined />
                                        MQTT CONFIGURATION
                                    </Space>
                                </div>
                                <div className='form'>
                                    <FormMqtt data={data} formRef={this.props.formRef} />
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className='table-tag-mqtt'>
                                <div className='header-table-tag_mqtt'>
                                    <Row>
                                        <Col span={12}>
                                            <div className='header-title'>
                                                <Space size={'small'}>
                                                    <TagsOutlined />
                                                    TAG LIST
                                                </Space>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='btn-add-tag-container'>
                                                <AddTag />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-list-tag'>
                                    <Table dataSource={dataSource} columns={columns} bordered />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
