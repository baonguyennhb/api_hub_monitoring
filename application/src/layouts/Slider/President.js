import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UploadOutlined,
    DashboardOutlined,
    VideoCameraOutlined,
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {AntAvatar} from "../AntAvatar";
import { Layout, Menu } from 'antd';
import './style.css'
const { Sider } = Layout;
export default class President extends Component {
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed} className='side-menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item icon={<DashboardOutlined />} key="1">
                        API CLOUD
                        <Link to="/home" />
                    </Menu.Item>
                    <Menu.Item icon={<DashboardOutlined />} key="2">
                        DEVICE
                        <Link to="/devices" />
                    </Menu.Item>
                    <Menu.Item icon={<VideoCameraOutlined />} key="3">
                        TAG
                        <Link to="/monitor" />
                    </Menu.Item>
                    <Menu.Item icon={<VideoCameraOutlined />} key="3">
                        MONITOR
                        <Link to="/monitor" />
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
                        //className={collapsed ? 'sub-collapsed' : ''}
                        key="account"
                        icon={<UserOutlined />}
                        title={
                            <span><UserOutlined /> Account</span>
                        }
                    >
                        <Menu.Item
                            key="account-user"
                            icon={<AntAvatar
                                alt={''}
                                icon={<UserOutlined />}
                                size="small"
                                src={''}
                            />}
                        >
                            {'Admin'}
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
