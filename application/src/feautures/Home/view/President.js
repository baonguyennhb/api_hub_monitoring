import React, { Component } from 'react'
import { Space, Table, Row, Col } from 'antd';
import { UnorderedListOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import './style.css'
import { Link } from 'react-router-dom';
export default class President extends Component {
  listPlant = this.props.listPlant
  columns = [
    {
      title: 'No',
      dataIndex: 'address',
      key: 'index',
      width: 200

    },
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => (
        <div size='large' className='column_plant'>
          <a className='title-plant'>{record.name}</a>
          <span className='icon'><Link to={'/plant/' + record.id}><DeliveredProcedureOutlined /></Link> </span>
        </div>
      ),
      width: 400
    },
    {
      title: 'End Point',
      dataIndex: 'address',
      key: 'address',
      width: 700

    },
    {
      title: 'Description',
      dataIndex: 'reports',
      key: 'reports',
      width: 200
    },
  ];
  render() {
    const { total, reports, plants } = this.props.plants.overview
    console.log(plants)
    const listPlant = plants.map(plant => {
      return {
        id: plant.plantId,
        key: plant.plantId,
        name: plant.plantName,
        address: plant.plantAddress,
        reports: plant.numberReport
      }
    })

    return (
      <div className='main-container'>
        <div className='title-page'>API - DATASOURCE PAGE</div>
        <div className='box-container'>
          <Table columns={this.columns} dataSource={listPlant} pagination={false} />
        </div>
      </div>
    )
  }
}
