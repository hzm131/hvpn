import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>首页</li>
                    <li>电影</li>
                    <li>文章</li>
                    <li><Link to={"/user/login"}>登录</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;