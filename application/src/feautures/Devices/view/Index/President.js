import { Table, Space, Tooltip, Modal  } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
import { CreateDevice } from '../CreateF';
export default class President extends Component {
  confirm = (data) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to delete device',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: () => this.props.handleDelete(data)
    });
  };
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
              <DeleteOutlined onClick={(e) => this.confirm(record)} />
            </Tooltip>
          </Space>
        ),
      },
    ];
    return (
      <div className='main-container'>
        <div className='title-page'>DEVICE MANAGERMENT</div>
        <div className='container-table'>
          <CreateDevice />
          <div className='table'>
            <Table columns={columns} bordered dataSource={dataSource} />
          </div>
        </div>
      </div>
    )
  }
}
