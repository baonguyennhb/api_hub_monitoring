import { Table, Button, Space, Tooltip, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
const { Search } = Input;
export default class President extends Component {
  showDeleteConfirm = () => {

  }
  render() {
    const { data } = this.props?.tags.list
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
        title: 'TAG NAME',
        dataIndex: 'name',
        key: 'name',
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
        <div className='title-page'>TAG MANAGERMENT</div>
        <div className='container-table'>
          <Tooltip color={'blue'} title={'Create New Tag'}>
            <Button type='primary'>
              Create
            </Button>
          </Tooltip>
          {/* <Search placeholder="input search text" enterButton /> */}
          <div className='table'>
            <Table columns={columns} bordered dataSource={dataSource} />
          </div>
        </div>
      </div>
    )
  }
}
