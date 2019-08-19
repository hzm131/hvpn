import Home from '../page/Home/Home'
import Login from "../comments/Login/Login";
let router = [
    {
        path: '/',//首页默认加载的页面
        component: Home,
        exact: true //是否为严格模式
    },
    {
        path: '/user/login',//首页默认加载的页面
        component: Login,
        exact: true //是否为严格模式
    },
];

export default router;