import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={"/"}>首页</Link></li>
                    <li><Link to={"/movie"}>电影</Link></li>
                    <li><Link to={"/puzzle"}>未接之谜</Link></li>
                    <li><Link to={"/login"}>登录</Link></li>
                    <li><Link to={"/registered"}>注册</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;