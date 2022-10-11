import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    ApiOutlined,
    CloudUploadOutlined,
    UserOutlined,
    LogoutOutlined,
    PieChartOutlined,
    ExportOutlined
} from '@ant-design/icons';
import { AntAvatar } from "../AntAvatar";
import { Layout, Menu, Space, Avatar } from 'antd';
import './style.css'
const { Sider } = Layout;
export default class President extends Component {
    render() {
        const path = window.location.pathname.split("/")[1]
        //const {name} = this.props.auth.user
        const userInfo = JSON.parse(localStorage.getItem("api_hub"))
        const { name } = userInfo !== null ? userInfo.data : { name: null }
        const lastName = name !== null ? name.split(" ") : []
        const firstChar = lastName.length > 0 ? (lastName[0])[0] : ""
        let defaultSelectedKeys
        switch (path) {
            case 'api-source':
                defaultSelectedKeys = ['api-source']
                break;
            case 'data-hub':
                defaultSelectedKeys = ['data-hub']
                break;
            case 'push-manual':
                defaultSelectedKeys = ['push-manual']
                break
            case 'config':
                defaultSelectedKeys = ['config']
                break
            default:
                break;
        }
        return (
            <Sider trigger={null} collapsible collapsed={this.props.common.collapse} className='side-menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={defaultSelectedKeys}
                >
                    <Menu.Item icon={<ApiOutlined />} key="api-source" className='side-item'>
                        API-SOURCE
                        <Link to="/api-source" />
                    </Menu.Item>
                    <Menu.Item icon={<PieChartOutlined />} key="data-hub" className='side-item'>
                        DATA - HUB
                        <Link to="/data-hub" />
                    </Menu.Item>
                    <Menu.Item icon={<CloudUploadOutlined />} key="push-manual" className='side-item'>
                        MANUALLY - PUSH
                        <Link to="/push-manual" />
                    </Menu.Item>
                    <Menu.Item icon={<ExportOutlined />} key="config" className='side-item'>
                        EXPORT & IMPORT CONFIG
                        <Link to="/config" />
                    </Menu.Item>
                </Menu>
                <Menu
                    className="menu-account"
                    mode="inline"
                    selectable={false}
                //defaultOpenKeys={collapsed ? [] : ['account']}
                >
                    <Menu.Divider />
                    <Menu.ItemGroup
                        className={this.props.common.collapse ? 'sub-collapsed' : ''}
                        key="account"
                        icon={<UserOutlined />}
                        title={
                            <Space><UserOutlined />Account</Space>
                        }
                    >
                        <Menu.Item
                            key="account-user"
                            className='account-name'
                            icon={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{firstChar}</Avatar>}
                        >
                            {name}
                        </Menu.Item>
                        <Menu.Item
                            className="account-logout"
                            key={3}
                            onClick={this.props.handleLogout}
                            icon={<LogoutOutlined />}
                        >
                            Logout
                        </Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
        )
    }
}
