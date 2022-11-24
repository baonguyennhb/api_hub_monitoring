import { Button, Col, Row, Space, Table, Tooltip, Modal, Tabs, Tag } from 'antd'
import React, { Component } from 'react'
import FormMqtt from '../../component/FormMqtt'
import { SettingOutlined, TagsOutlined, ExclamationCircleOutlined, EditOutlined, DeleteOutlined, DownloadOutlined, DisconnectOutlined, ControlOutlined, SyncOutlined, SaveOutlined } from '@ant-design/icons';
import './style.css'
import { AddTag } from '../AddTag';
import { DeleteConfig } from '../DeleteTag';
const { TabPane } = Tabs;
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
            // {
            //     title: 'Deadband',
            //     dataIndex: 'Deadband',
            //     key: 'Deadband',
            // },
            // {
            //     title: 'Deadband Type',
            //     dataIndex: 'deadband_type',
            //     key: 'deadband_type',
            // },
            // {
            //     title: 'Span High',
            //     dataIndex: 'span_high',
            //     key: 'span_high',
            // },
            // {
            //     title: 'Span Low',
            //     dataIndex: 'span_low',
            //     key: 'span_low',
            // },
            // {
            //     title: 'Decimal Digits',
            //     dataIndex: 'decimal_digits',
            //     key: 'decimal_digits',
            // },
            // {
            //     title: 'Description',
            //     dataIndex: 'description',
            //     key: 'description',
            // },
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
                        <div className='group-btn'>
                            <Space size={"small"}>
                                <label>Status:</label>
                                {
                                    (this.props.statusDataHub) ? (
                                        <Tag className='tag' color="green" icon={<SyncOutlined spin />}>CONNECTED</Tag>
                                    ) : (
                                        <Tag className='tag' color="gray">DISCONNECT</Tag>
                                    )
                                }
                                <Button onClick={this.props.handleDisConnectDataHub} loading={this.props.loadingDisConnect} className="btn-disconnect" danger><DisconnectOutlined />DisConnect</Button>
                                <Button onClick={this.props.handleConnectDataHub} loading={this.props.loadingConnect} className="btn-connect"><ControlOutlined />Connect</Button>
                                <Button type='primary' loading={this.props.loading} onClick={this.props.handleDownloadConfigMqtt} className="btn-uplaod-config"> <DownloadOutlined />Download Config</Button>
                                <DeleteConfig />
                            </Space>
                        </div>
                    </Col>
                </Row>
                <div className='children-container'>
                    <Tabs size='small' type='card'>
                        <TabPane tab={<> <SettingOutlined />MQTT CONFIGURATION</>} key="1">
                            <div className='form-config-mqtt'>
                                <div className='header-config-mqtt'>
                                    <Space size={"small"}>
                                        <SettingOutlined />
                                        MQTT CONFIGURATION
                                    </Space>
                                </div>
                                <div className='form'>
                                    <FormMqtt data={data} formRef={this.props.formRef} onFinish={this.props.onFinish} />
                                    <Button type='primary' className='btn-save-data-hub' onClick={this.props.handleUpdateDataHub}><SaveOutlined />Save</Button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={
                            <>
                                <TagsOutlined />
                                TAG LIST
                            </>
                        }
                            key={"2"}
                        >
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
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
