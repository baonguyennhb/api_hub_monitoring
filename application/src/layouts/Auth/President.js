import React, {Component} from "react";
import {Link} from "react-router-dom";
import background from "../../images/home/banner_background.jpg";
import logo from "../../images/logo.png";
import './style.scss'

class President extends Component {
    render() {
        return (
            <div className="auth" style={{backgroundImage: `url(${background})`}}>
                <div className="antd-pro-layouts-user-layout-content">
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
                </div>
            </div>
        );
    }
}

export default President