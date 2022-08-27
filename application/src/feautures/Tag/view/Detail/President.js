import { Table, Button, Space, Row, Col, Input, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined, CaretRightOutlined, ApiOutlined, DesktopOutlined, UnorderedListOutlined} from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
import { CreateTag } from '../Create';
import { Link } from 'react-router-dom';
import NavigateButton from '../../../../common/NavigateButton';
const { Search } = Input;
export default class President extends Component {
  confirm = (data) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to delete Tag',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: () => this.props.handleDelete(data)
    });
  };
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
        title: 'Tag name',
        key: 'name',
        render: (tag) => {
          return (
            <Link className='connecttion' to={tag.id.toString()}>{tag.name}</Link>
          )
        }
      },
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',
      },
      {
        title: 'Data type',
        dataIndex: 'data_type',
        key: 'data_type',
      },
      {
        title: 'Scale',
        dataIndex: 'scale',
        key: 'scale',
      },
      {
        title: 'Action',
        key: 'action',
        width: '10%',
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
        <Row>
          <Col span={12}>
            <div className='title-page'>TAG MANAGERMENT </div>
          </Col>
          <Col span={12}>
            <div className='title-sub'> <ApiOutlined /> <NavigateButton buttonTitle = {this.props.apiSource} route = {`/api-source/${this.props.apiSourceId}`} isReplaced = {true} /> <CaretRightOutlined />{this.props.metterId}</div>
          </Col>
        </Row>
        <div className='container-table'>
          <Row>
            <Col span={12}>
              <Space>
                <UnorderedListOutlined />
                <div className='children-header-title'>LIST TAG</div>
              </Space>
            </Col>
            <Col span={12}>
              <div className='children-header-btn-create'>
                <Space size={"middle"}>
                  <CreateTag />
                  <Link to={window.location.pathname + "/monitor"}>
                    <Button type='primary'> <DesktopOutlined /> MONITORING TAG</Button>
                  </Link>
                </Space>
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
