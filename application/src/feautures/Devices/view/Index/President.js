import { Table, Space, Tooltip, Modal, Button, Tag, Col, Row } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined, ApiOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
import { CreateDevice } from '../CreateF';
import { EditDevice } from '../Edit';
import FormApiSource from '../../../ApiSource/component/FormApiSource';
import FormDevice from '../../component/FormDevice';
import { Link } from 'react-router-dom';
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
        title: 'No',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: 'Metter ID',
        key: 'metter_id',
        render: (metterId) => {
          return (
            <Link className='connecttion' to={metterId.metter_id}>{metterId.metter_id}</Link>
          )
        }
      },
      {
        title: 'Serial',
        dataIndex: 'serial',
        key: 'serial',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
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
        width: '10%',
        render: (record) => (
          <Space size="small">
            <Button type='primary' onClick={(e) => this.props.showModal(record)} icon={<EditOutlined />} >Edit</Button>
            <Button type='danger' onClick={(e) => this.confirm(record)} icon={<DeleteOutlined />}>Delete</Button>
          </Space>
        ),
      },
    ];
    return (
      <div className='main-container'>
        <Row>
          <Col span={12}>
            <div className='title-page'>DEVICE MANAGERMENT </div>
          </Col>
          <Col span={12}>
            <div className='title-sub'><ApiOutlined /> {this.props.connection}</div>
          </Col>
        </Row>
        <div className='container-table'>
          <Row>
            <Col span={12}>
              <Space>
                <UnorderedListOutlined />
                <div className='children-header-title'>LIST DEVICE</div>
              </Space>
            </Col>
            <Col span={12}>
              <div className='children-header-btn-create'>
                <CreateDevice />
              </div>
            </Col>
          </Row>
          <div className='table'>
            <Table columns={columns} bordered dataSource={dataSource} />
          </div>
        </div>
      </div>
    )
  }
}
