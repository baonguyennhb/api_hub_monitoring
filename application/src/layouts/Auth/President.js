import React, { Component } from "react";
import { Link } from "react-router-dom";
import background from "../../images/auth/background.svg";
import logo from "../../images/advantech-logo.png";
import logo_corner from "../../images/lightbulb.png";
import './style.scss'

class President extends Component {
    render() {
        let width = this.props.width
        return (
            <div className="auth" style={{ backgroundImage: `url(${background})` }}>
                <div className="antd-pro-layouts-user-layout-content">
                    <div className="antd-pro-layouts-user-layout-logo">
                        <img src={logo} className="logo-avn"></img>
                    </div>
                    <div className="antd-pro-layouts-user-layout-top">
                        <div className="antd-pro-layouts-user-layout-header">
                            <Link to="/">
                                <span className="antd-pro-layouts-user-layout-title">API - HUB</span>
                            </Link>
                        </div>
                        <div className="antd-pro-layouts-user-layout-desc">
                            --- LOGIN ---
                        </div>
                    </div>
                    <div className="antd-pro-pages-user-login-index-main">
                        {this.props.children}
                    </div>
                    <div className="footer-form">
                        <div className="title-footer">Version 1.0</div>
                    </div>
                </div>
                {
                    (width >= 1300) ? (
                        <div className="background-corner">
                            <img src={logo_corner} className="background-corner-logo"></img>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default President