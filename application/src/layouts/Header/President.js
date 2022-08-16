import React, { Component } from 'react'
import { Image } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import logo from "../../images/advantech-logo.png"
import './style.css'
export default class President extends Component {
    render() {
        return (
            <header
                className="header"
            >
                <div className='btn-toggle1'>
                    {React.createElement(this.props.common.collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => this.props.handleToggle(),
                    })}
                </div>
                <div className='title-header'>API-HUB</div>
            </header>
        )
    }
}
