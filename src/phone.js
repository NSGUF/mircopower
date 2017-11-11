/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import Http from './http'

export default class Phone extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            code: this.createValidateCode(),
            fillCode: "",
            validate: this.createValidateCode("tellphone"),
            tellphone: "",
            fillValidate: ""
        }


    }

    createValidateCode(name) {
        let code = ""
        let codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let charNum

        for (var i = 0; i < 4; i++) {
            if (name === "tellphone") {
                charNum = Math.floor(Math.random() * 10)
            } else {
                charNum = Math.floor(Math.random() * 36)
            }
            code += codeChars[charNum]
        }
        return code
    }

    handlerClick(name) {
        switch (name) {
            case "code":
                this.setState({
                    code: this.createValidateCode()
                })
                break;
            case "validate":
                if (this.state.code === this.state.fillCode) {
                    Http.post(Http.URL+"/MicroPower/SendServlet",
                        {tellphone: this.state.tellphone, validate: this.state.validate},
                        this.callBack.bind(this),
                        this.error)
                } else {
                    alert("请填写正确的图形验证码！")
                }
                break;
            case "login":
                if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.tellphone)) {
                    alert("手机号码格式不正确！")
                } else{
                    if (this.state.validate === this.state.fillValidate) {
                        Http.post(Http.URL+"/MicroPower/LoginServlet",
                            {tellphone: this.state.tellphone},
                            this.callBackLogin.bind(this),
                            this.error)
                    } else {
                        alert("验证码输入错误")
                    }
                }
                break;
            default:
                alert("handlerClick error")
                break
        }

        console.log(this.state)
    }

    callBackLogin(result) {
        alert("登录成功")
        location.reload('/')
        this.props.history.push("/")
    }

    callBack(result) {
        console.log(result.flag)
        console.log(typeof result.flag)
        alert("验证码发送成功！")
    }

    error() {
        alert("error")
    }

    handlerChange(name, e) {
        switch (name) {
            case "tellphone":
                this.setState({
                    tellphone: e.target.value
                })
                break
            case "code":
                this.setState({
                    fillCode: e.target.value
                })
                break
            case "validate":
                this.setState({
                    fillValidate: e.target.value
                })
                break
            default:
                alert("handlerChanger有错误")
        }
    }

    render() {
        return (
            <form className="phone">
                <h2>登 录</h2>
                <div className="phone_num  text-center">
                    <input className="form-control form-control1" type="text"
                           onChange={this.handlerChange.bind(this, "tellphone")}
                           maxLength="11" placeholder="请输入手机号码"/>
                </div>
                <div className="phone_num">
                    <div className="verification">
                        <input type="text" onChange={this.handlerChange.bind(this, "code")}
                               className="form-control form-control1" maxLength="4"
                               placeholder="请输入右侧图形验证码"/>
                    </div>
                    <div className="code" onClick={this.handlerClick.bind(this, "code")}>{this.state.code}</div>
                </div>
                <div className="phone_num">
                    <div className="verification">
                        <input type="text" autoComplete="off" onChange={this.handlerChange.bind(this, "validate")}
                               className="form-control form-control1" maxLength="4"
                               placeholder="请输入手机验证码"/>
                    </div>
                    <div className="id_code_pos">
                        <input className="id_code" type="button" onClick={this.handlerClick.bind(this, "validate")}
                               value="获得验证码"/>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="login_pos text-center">
                    <input className="phone-logo" type="button" value="登  录"
                           onClick={this.handlerClick.bind(this, "login")}/>
                </div>
                <hr/>
            </form>
        )
    }
}