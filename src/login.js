/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => (
    <div id="Login">
        <div className="Logo">
            <a href="index.jsp"> <img src="images/logo.png" alt="登录"/></a>
        </div>
        <div className="Login_weixin">
            <h2>微信登录</h2>
            <img src="images/erweima.png" alt="微信登录"/>
            <p>请使用微信扫描二维码登录</p>
            <p>“微捐赠”</p>
        </div>
        <div className="Login_other">
            <p>————————————或————————————</p>
            <ul>
                <li><Link to="/phone">使用手机号码登录</Link></li>
                <li><Link to="">使用微博账号登录</Link></li>
            </ul>
        </div>
    </div>
)
export default Login