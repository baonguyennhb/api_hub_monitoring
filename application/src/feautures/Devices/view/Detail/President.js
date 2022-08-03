import { Table, Button, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
export default class President extends Component {
  showDeleteConfirm = () => {

  }
  render() {
    const { data } = this.props?.devices.list
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
        title: 'SERIAL',
        dataIndex: 'serial',
        key: 'serial',
      },
      {
        title: 'MODEL',
        dataIndex: 'model',
        key: 'model',
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
        <div className='title-page'>DEVICE MANAGERMENT</div>
        <div className='container-table'>
          <Tooltip color={'blue'} title={'Create New Device'}>
            <Button type='primary' className='btn-insert'>
              Create
            </Button>
          </Tooltip>
          <div className='table'>
            <Table columns={columns} bordered dataSource={dataSource} />
          </div>
        </div>
      </div>
    )
  }
}
