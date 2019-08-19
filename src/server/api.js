import axios from 'axios';
import storage from "../tool/storage";

const getToken = ()=> {
    const token = storage.get("token");
    return token
};

class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = getToken();
    }

    fetch({ method, path, headers = {}, body = {} }) {
        if (this.token) {
            headers = {
                ...headers,
                "Authorization": "token  " + this.token,
            }
        }
        return new Promise((resolve,reject)=>{
            axios({
                url:  this.baseUrl + path,
                data:{
                    ...body,
                },
                method,
                headers
            })
                .then((res)=>{
                    console.log("res",res)
                    if( 200 <= res.data.status && res.data.status <= 300 ){
                        resolve(res.data)
                    }else if(res.data.status === 401){
                        //token无效 跳转到首页

                    }else{
                        reject(res.data.error)
                    }
                })
                .catch((res)=>{
                    if(res.status !== 200){
                        throw "请求有问题"
                    }
                })
        })
    }

    login(path,{username,password}) {
        return api
            .fetch({
                path,
                method:"POST",
                body:{
                    username,
                    password
                },
            })
            .then(res => {
                console.log("结果",res);
                const token = res.data;
                if(token){
                    storage.set("token",token)
                }
                return token
            })
    }

    get(path, body) {
        console.log(this.token)
        return this.fetch({
            method: 'GET',
            path,
            body
        })
    }

    post(path, body) {
        return this.fetch({
            method: 'POST',
            path,
            body
        })
    }

    put(path, body) {
        return this.fetch({
            method: 'PUT',
            path,
            body
        })
    }

    delete(path, body) {
        return this.fetch({
            method: 'DELETE',
            path,
            body
        })
    }
}

const api = new Api('http://192.168.2.219:3000');
global.api = api;

export default api