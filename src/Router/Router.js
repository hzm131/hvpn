import Login from "../comments/Content/Login/Login";
import Registered from "../comments/Content/Registered/Registered";
import Home from "../comments/Home/Home"
let router = [
    {
        path: '/',//首页默认加载的页面
        component: Home,
        exact: true, //是否为严格模式
    },
    {
        path: '/login',//首页默认加载的页面
        component: Login,
        exact: true, //是否为严格模式
    },
    {
        path: '/registered',//首页默认加载的页面
        component: Registered,
        exact: true, //是否为严格模式
    },
];

export default router;