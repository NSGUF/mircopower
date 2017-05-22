/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'

export default class Phone extends React.Component {
    createCode() {
        let code = "";
        var checkCode = document.getElementById("checkCode");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (var i = 0; i < 4; i++) {
            var charNum = Math.floor(Math.random() * 36);
            code += codeChars[charNum];
        }
        if (checkCode) {
            checkCode.className = "code";
            checkCode.innerHTML = code;
        }
    }

    show() {
        let hideobj = document.getElementById("hidebg");
        hidebg.style.display = "block";
        hidebg.style.height = document.body.clientHeight + 260 + "px";
        document.getElementById("hidebox").style.display = "block";
        document.getElementById("agreementtitle").style.display = "block";

        document.getElementById("agreement").style.display = "block";
        document.getElementById("hidebutton").style.display = "block";
    }

    hide() {
        return {display: 'none'}
    }

    doCheckCode() {
        let oTellphone = this.refs.tellphone.value;//document.getElementById("tellphone").value;
        let partten = /^1[3,5,7,8]\d{9}$/;
        if (!partten.test(oTellphone)) {
            oTellphone = "";
            alert('电话号码格式不正确!');
            return false;
        }
        let input = this.refs.verification.value;
        if (input === "") {
            alert("验证码不能为空");
            return false;
        }
        else if (input.toLowerCase() != code.toLowerCase()) {
            alert("验证码不正确");
            return false;
        }
    }

    render() {

        return (
            <div>
                <form classNameName="phone" action="" method="post" onSubmit={this.doCheckCode() }>
                    <div classNameName="Logo">
                        <a href="index.jsp"> <img src="images/logo.png"/></a>
                        <p>使用手机号登录</p>
                    </div>
                    <div className="phone_num">
                        <input ref="tellphone" className="form-control form-control1" type="text"
                               name="cell_phone_id" maxlength="11" placeholder="请输入手机号码"/>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div className="verification">
                                    <input type="text" ref="verification"
                                           className="form-control form-control3" maxlength="4"
                                           placeholder="请输入右侧图形验证码"/>
                                </div>
                            </td>
                            <td>
                                <div className="code" id="checkCode" onClick="createCode()"></div>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <div className="form-inline">
                                    <input type="text" autocomplete="off"
                                           className="form-control form-control3" maxlength="4"
                                           placeholder="请输入验证码" style="float: left;"/>
                                </div>
                            </td>
                            <td>
                                <div className="id_code_pos">
                                    <input className="id_code" type="button" value="获得验证码"/>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div className="login_pos">
                        <input className="login" type="submit" value="登  录"/>
                    </div>
                    <div className="form-group form-group-lg">
                        <div className="col-md-12 text-center">
                            <p className="user-agreement">
                                <input type="radio" id="agree" checked="checked"/><span>已阅读并同意<a
                                href="javascript:show()" className="text-success" data-toggle="modal"
                                data-target="#publish-agreement">《微捐助项目发起条款》</a></span>
                            </p>
                        </div>
                    </div>
                    <div className="Login_other">
                        <p>—————————————或—————————————</p>
                        <ul>
                            <li><a href="login.html" target="_self" className="perfect1">使用微信二维码登录</a></li>
                            <li><a href="">使用微博账号登录</a></li>
                        </ul>
                    </div>
                </form>
                <div ref="hidebg"></div>
            </div>
        )
    }
}