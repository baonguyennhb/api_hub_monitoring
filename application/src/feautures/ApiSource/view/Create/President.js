import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import FormApiSource from '../../component/FormApiSource';
class President extends Component {
    render() {
        const { showModal } = this.props
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Api Source'}>
                    <Button type='primary' className='btn-insert' onClick={showModal}>
                        <PlusCircleOutlined />
                        CREATE
                    </Button>
                </Tooltip>
                <FormApiSource {...this.props} />
            </>
        )
    }
};


export default President
