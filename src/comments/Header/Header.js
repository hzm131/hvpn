import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from './header.css'
import background from './background.png'
class Header extends Component {
    render() {
        return (
            <div>
                <ul className='ulname'>
                    <li><Link to={"/"}>首页</Link></li>
                    <li><Link to={"/movie"}>电影</Link></li>
                    <li><Link to={"/puzzle"}>未接之谜</Link></li>
                    <li><Link to={"/login"}>登录</Link></li>
                    <li><Link to={"/registered"}>注册</Link></li>
                </ul>
                <div className="backImg">
                    <img src={background} alt=""/>
                </div>
                <div className="content">
                    <div className='leftCon'></div>
                    <div className='rightCon'></div>
                </div>
            </div>
        );
    }
}

export default Header;