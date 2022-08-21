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
import { AntAvatar } from "../AntAvatar";
import { Layout, Menu } from 'antd';
import './style.css'
const { Sider } = Layout;
export default class President extends Component {
    render() {
        const path = window.location.pathname.split("/")[1]
        let defaultSelectedKeys
        switch (path) {
            case 'api-source':
                defaultSelectedKeys = ['api-source']
                break;
            case 'data-hub':
                defaultSelectedKeys = ['data-hub']
                break;
            default:
                break;
        }
        return (
            <Sider trigger={null} collapsible collapsed={this.props.common.collapse} className='side-menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={defaultSelectedKeys}
                >
                    <Menu.Item icon={<ApiOutlined />} key="api-source">
                        API-SOURCE
                        <Link to="/api-source" />
                    </Menu.Item>
                    <Menu.Item icon={<PieChartOutlined />} key="data-hub">
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
