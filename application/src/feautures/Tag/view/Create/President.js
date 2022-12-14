import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined  } from '@ant-design/icons';
import React, { Component } from 'react';
import FormDevice from '../../component/FormTag';
class President extends Component {
    render() {
        const { showModal} = this.props
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Device'}>
                    <Button type='primary' className='btn-insert' onClick={showModal}>
                        <PlusCircleOutlined/>
                        CREATE
                    </Button>
                </Tooltip>
                <FormDevice {...this.props}/>
            </>
        )
    }
};


export default President
