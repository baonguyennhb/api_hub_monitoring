import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    ApiOutlined,
    DashboardOutlined,
    VideoCameraOutlined,
    UserOutlined,
    LogoutOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import {AntAvatar} from "../AntAvatar";
import { Layout, Menu } from 'antd';
import './style.css'
const { Sider } = Layout;
export default class President extends Component {
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.common.collapse} className='side-menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item icon={<ApiOutlined/>} key="1">
                        API-SOURCE
                        <Link to="/api-source" />
                    </Menu.Item>
                    <Menu.Item icon={<PieChartOutlined />} key="5">
                        DATA - HUB
                        <Link to="/data-hub" />
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
                            <span><UserOutlined />Account</span>
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
                            {'Nguyễn Hữu Bảo'}
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
