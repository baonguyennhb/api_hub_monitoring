import React, { Component } from 'react'
import { Table, Button, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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
        const columns = [
            {
                title: 'NO',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: 'END POINT',
                dataIndex: 'endpoint',
                key: 'endpoint',
            },
            {
                title: 'DESCRIPTION',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'ACTION',
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
                    <Tooltip color={'blue'} title={'Create New Api Source'}>
                        <Button type='primary'>
                            Create
                        </Button>
                    </Tooltip>
                    <div className='table'>
                        <Table columns={columns} dataSource={dataSource} />
                    </div>
                </div>
            </div>
        )
    }
}
