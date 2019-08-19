import React, { Component } from 'react';
import api from '../../../server/api'

class Login extends Component {
    state = {
        username:"",
        password:"",
    };

    userNameChange = (e)=>{
        this.setState({
            username:e.target.value
        })
    };

    passwordChange = (e)=>{
        this.setState({
            password:e.target.value
        })
    };

    onButton = ()=>{
        const { username,password } = this.state;
        api.login("/user/login",{
            username,
            password
        }).then((res)=>{
            if(res){
                console.log("token成功")
            }
        })
    };

    onTest = ()=>{
        api.get("/video/query").then((res)=>{
            console.log("res",res)
        })
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.userNameChange} value={this.state.username}/>
                <input type="password" onChange={this.passwordChange}/>
                <button onClick={this.onButton}>提交</button>
                <button onClick={this.onTest}>测试</button>
            </div>
        );
    }
}

export default Login;