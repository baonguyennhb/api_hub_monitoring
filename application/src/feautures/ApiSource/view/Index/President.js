import React, { Component } from 'react'
import { Table, Button, Space, Tooltip, Tag, Modal, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined, UnorderedListOutlined, } from '@ant-design/icons';
import { CreateApiSource } from '../Create';
import { Link } from 'react-router-dom';
import "./style.css"

export default class President extends Component {
    confirm = (data) => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Do you want to delete Api Source',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => this.props.handleDelete(data)
        });
    };
    render() {
        const { data } = this.props?.apiSources.list
        const dataSource = data.map((value, index) => {
            return {
                index: index + 1,
                key: value.id,
                ...value
            }
        })
        const columns = [
            {
                title: 'No',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: 'Connection',
                // dataIndex: 'connection_name',
                key: 'connecttion',
                render: (connecttion) => {
                    return (
                        <Link className='connecttion' to={connecttion.id.toString()}>{connecttion.connection_name}</Link>
                    )
                }
            },
            {
                title: 'URL',
                dataIndex: 'url',
                key: 'url',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Status connecttion',
                dataIndex: 'status',
                key: 'status',
                render: (_, { status }) => {
                    let color = status ? "#87d068" : "gray"
                    let textStatus = status ? "GOOD" : "BAD"
                    return (
                        <Tag color={color}>{textStatus}</Tag>
                    )
                }
            },
            {
                title: 'Action',
                key: 'action',
                width: "10%",
                render: (record) => (
                    <Space size="middle">
                        <Button type='primary' onClick={(e) => this.props.showModal(record)} icon={<EditOutlined />} >Edit</Button>
                        <Button type='danger' onClick={(e) => this.confirm(record)} icon={<DeleteOutlined />}>Delete</Button>
                    </Space>
                ),
            },
        ];
        return (
            <div className='main-container'>
                <div className='title-page'>API - SOURCE MANAGERMENT</div>
                <div className='container-table'>
                    <Row>
                        <Col span={12}>
                            <Space>
                                <UnorderedListOutlined />
                                <div className='children-header-title'>LIST API SOURCE</div>
                            </Space>
                        </Col>
                        <Col span={12}>
                            <div className='children-header-btn-create'>
                                <CreateApiSource />
                            </div>
                        </Col>
                    </Row>
                    <div className='table'>
                        <Table columns={columns} dataSource={dataSource} bordered />
                    </div>
                </div>
            </div>
        )
    }
}
