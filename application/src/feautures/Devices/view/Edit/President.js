import { Button, Tooltip } from 'antd';
import React, { Component } from 'react';
import FormDevice from '../../component/FormDevice';
import "./style.css"
class President extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <FormDevice {...this.props} />
            </>
        )
    }
};


export default President
