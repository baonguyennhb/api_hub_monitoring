import { Button, Modal, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import "./style.css"
import React, { Component } from 'react';
import TableTagAdd from '../../component/TableTagAdd';
class President extends Component {
    render() {
        const { showModal, isModalVisible, handleOk, handleCancel, tags } = this.props
        return (
            <>
                <Button type='primary' onClick={showModal} className={"btn-add-tag"}>
                    <PlusCircleOutlined />
                    ADD TAG
                </Button>
                <Modal title={"Add Tag"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    // <Button key="submit" type="primary" onClick={handleOk}>
                    //     OK
                    // </Button>,
                ]}
                    width={650}
                >
                    <TableTagAdd tags = {tags} />
                </Modal>
            </>
        )
    }
};


export default President
