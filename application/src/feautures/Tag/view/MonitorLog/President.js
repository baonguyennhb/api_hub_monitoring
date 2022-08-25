import { Table, Button, Space, Row, Col} from 'antd';
import { CaretRightOutlined, ApiOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import './style.css'
export default class President extends Component {
  render() {
    const { data } = this.props?.tags.log
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
        title: 'Time',
        dataIndex: 'timestamp',
        key: 'time',
      },
      {
        title: 'Tag name',
        dataIndex: 'tag_name',
        key: 'name',
      },
      {
        title: 'Parameter',
        dataIndex: 'param',
        key: 'tagParameter',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
    ];
    return (
      <div className='main-container'>
        <Row>
          <Col span={12}>
            <div className='title-page'>TAG LOG MONITORING </div>
          </Col>
          <Col span={12}>
            <div className='title-sub'> <ApiOutlined/> {this.props.apiSource}  <CaretRightOutlined />{this.props.metterId}</div>
          </Col>
        </Row>
        <div className='container-table'>
          {/* <Search placeholder="input search text" enterButton /> */}
          <div className='table'>
            <Table columns={columns} bordered dataSource={dataSource} />
          </div>
        </div>
      </div>
    )
  }
}
