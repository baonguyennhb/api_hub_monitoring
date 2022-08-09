import React, { Component } from 'react'
import { Table, Button, Space, Tooltip, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { CreateApiSource } from '../Create';
import { Link } from 'react-router-dom';

export default class President extends Component {
    render() {
        
        const { data } = this.props?.apiSources.list
        const dataSource = data.map((value, index) => {
            return {
                index: index + 1,
                key: value.id,
                ...value
            }
        })
        console.log(dataSource)
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
                    console.log(connecttion)
                    return (
                        <Link to={connecttion.connection_name}>{connecttion.connection_name}</Link>
                    )
                }
            },
            {
                title: 'End point',
                dataIndex: 'endpoint',
                key: 'endpoint',
            },
            {
                title: 'DESCRIPTION',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Status connecttion',
                dataIndex: 'status',
                key: 'status',
                render: (_, { status }) => {
                    let color = status ?  "#87d068" : "gray"
                    let textStatus =  status ? "GOOD" : "BAD"
                    return (
                        <Tag color={color}>{textStatus}</Tag>
                    )
                }
            },
            {
                title: 'Action',
                key: 'action',
                render: (record) => (
                    <Space size="middle">
                        <Tooltip title={'Edit'}>
                            <EditOutlined onClick={() => {
                                // setFactoryrecord(record)
                                // showEdit()
                            }} />
                        </Tooltip>
                        <Tooltip title={'Delete'}>
                            <DeleteOutlined onClick={(e) => this.showDeleteConfirm(record)} />
                        </Tooltip>
                    </Space>
                ),
            },
        ];
        return (
            <div className='main-container'>
                <div className='title-page'>API - SOURCE MANAGERMENT</div>
                <div className='container-table'>
                    <CreateApiSource />
                    <div className='table'>
                        <Table columns={columns} dataSource={dataSource} />
                    </div>
                </div>
            </div>
        )
    }
}
