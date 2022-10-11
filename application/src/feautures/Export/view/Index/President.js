import { Button, Space, message, Upload } from 'antd'
import React, { Component } from 'react'
import { ImportOutlined, ExportOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import './style.css'
export default class President extends Component {

    render() {
        return (
            <div className='main-container'>
                <div className='title-page'>IMPORT & EXPORT CONFIG</div>
                <div className='children-container1'>
                    <div className='header'>
                        <div className='title'>
                            <Space size={"small"}>
                                <ImportOutlined />IMPORT CONFIG
                            </Space>
                        </div>
                    </div>
                    <div className='upload-container'>
                        <Space size={'middle'}>
                            <Button icon={<DownloadOutlined />} type = 'primary' className='btn-upload'>DOWNLOAD SAMPLE TEMPLATE</Button>
                            <Button icon={<UploadOutlined />} type = 'primary' className='btn-upload'>CLICK TO UPLOAD</Button>
                        </Space>
                    </div>
                </div>
                <div className='children-container2'>
                    <div className='header'>
                        <div className='title'>
                            <Space size={"small"}>
                                <ExportOutlined />EXPORT CONFIG
                            </Space>
                        </div>
                    </div>
                    <div className='btn-export-container'>
                        <Button type='primary' className='btn-export' onClick={(e) => this.props.downloadConfig()}><DownloadOutlined />EXPORT</Button>
                    </div>
                </div>
            </div>
        )
    }
}
