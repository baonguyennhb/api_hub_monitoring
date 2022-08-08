import { Button, Tooltip } from 'antd';
import React, { Component } from 'react';
import FormApiSource from '../../component/FormApiSource';
class President extends Component {
    render() {
        const { showModal} = this.props
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Device'}>
                    <Button type='primary' className='btn-insert' onClick={showModal}>
                        Create
                    </Button>
                </Tooltip>
                <FormApiSource {...this.props}/>
            </>
        )
    }
};


export default President
