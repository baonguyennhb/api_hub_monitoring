import { Button, Input, Modal } from 'antd'
import React, { Component } from 'react'
import { DeleteOutlined, } from '@ant-design/icons';
import "./style.css"

export default class President extends Component {
    render() {
        return (
            <>
                <Button type='primary' onClick={this.props.handleShowModalDelete} className="btn-delete-config"> < DeleteOutlined /> Delete Config Tag</Button>
                <Modal
                    title="Manually Delete Tag Config"
                    visible={this.props.open}
                    onOk={this.props.handleDeleteTagConfig}
                    onCancel={this.props.handleCancel}
                >
                    <div>
                        <label className='lable-tag-name'>Tag Name:</label>
                        <Input onChange={(e) => this.props.handleSetValueTag(e.target.value)} />
                    </div>
                </Modal>
            </>
        )
    }
}
