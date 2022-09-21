import { Button, Col, Row, Space, Table, Modal, DatePicker, Typography, Select } from 'antd'
import React, { Component } from 'react'
import { OrderedListOutlined, CloudUploadOutlined, ExclamationCircleOutlined, FieldTimeOutlined, ApiOutlined } from '@ant-design/icons';
import './style.css'
const { RangePicker } = DatePicker;
const { Text } = Typography;
const { Option } = Select;
export default class President extends Component {
    state = {
        apiSource: '',
        dates: null,
        hackValue: null,
        value: null,
        selectedRowKeys: [],
    }
    disabledDate = (current) => {
        if (!this.state.dates) {
            return false;
        }

        const tooLate = this.state.dates[0] && current.diff(this.state.dates[0], 'days') > 7;
        const tooEarly = this.state.dates[1] && this.state.dates[1].diff(current, 'days') > 7;
        return !!tooEarly || !!tooLate;
    };

    handleChange = (value) => {
        this.props.fetchingTableDevice({ apiSource: value })
        this.setState({
            ...this.state,
            apiSource: value
        })
    };

    onOpenChange = (open) => {
        if (open) {
            this.setState({
                ...this.state,
                hackValue: [null, null],
                dates: [null, null]
            });
        } else {
            this.setState({
                ...this.state,
                hackValue: null
            })
        }
    };

    // Table

    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }

    confirm = (data) => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Do you want to push data to DataHub',
            okText: 'Push',
            cancelText: 'Cancel',
            onOk: () => {
                this.props.handlePushDoDataHub({
                    apiSource: this.state.apiSource,
                    metter: this.state.selectedRowKeys,
                    rangeTime: this.state.dates
                })
            }
        });
    };

    render() {
        let apiSources = this.props.apiSources.list?.data
        const columns = [
            {
                title: 'No.',
                dataIndex: 'index',
            },
            {
                title: 'Metter',
                dataIndex: 'metter',
            },
            {
                title: 'Serial',
                dataIndex: 'serial',
            }
        ];

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };

        const allDevice = this.props.devices.list.data
        const dataSource = allDevice.map((device, index) => {
            return {
                key: device.metter_id,
                index: index + 1,
                metter: device.metter_id,
                serial: device.serial,
            }
        })

        return (
            <div className='main-container'>
                <div className='title-page'>MANUALLY PUSH</div>
                <div className='children-container'>
                    <Row className='children-header'>
                        <Col span={12}>
                            <div className='range-picker-container'>
                                <Space size={"small"}>
                                    <FieldTimeOutlined />
                                    <span className='picker-title'>SELECT TIME:</span>
                                    <RangePicker
                                        value={this.state.hackValue || this.state.value}
                                        disabledDate={this.disabledDate}
                                        onCalendarChange={(val) => this.setState({
                                            dates: val
                                        })}
                                        onChange={(val) => this.setState({
                                            value: val
                                        })}
                                        onOpenChange={this.onOpenChange}
                                        className="picker"
                                        // showTime
                                    />
                                </Space>
                            </div>
                            <div className='api-source-container'>
                                <Space size={'small'}>
                                    <ApiOutlined />
                                    <span className='title-api-source'>API SOURCE </span>
                                    <Select
                                        // defaultValue="lucy"
                                        style={{
                                            width: 386,
                                        }}
                                        onChange={this.handleChange}
                                    >
                                        {
                                            apiSources.map(data => (
                                                <Option key={data.id} value={data.id}>{data.connection_name}</Option>
                                            ))
                                        }
                                    </Select>
                                </Space>
                            </div>
                        </Col>
                        <Col span={12}>
                            <Button type='primary' className='btn-push' onClick={() => this.confirm()} loading = {this.props.push_manual.push_manual.loading}><CloudUploadOutlined /> PUSH TO DATA-HUB</Button>
                        </Col>
                    </Row>
                    <div className='table-metter-container'>
                        <div className='title-table-add-device'>
                            <Space>
                                <OrderedListOutlined />
                                METTER - LIST
                            </Space>
                        </div>
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            onRow={(record) => ({
                                onClick: () => {
                                    this.selectRow(record);
                                },
                            })}
                            bordered
                            pagination={{ defaultPageSize: 15, showSizeChanger: true, pageSizeOptions: ['15', '20', '30'] }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
