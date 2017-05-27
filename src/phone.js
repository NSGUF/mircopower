/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'

export default class Phone extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            code:this.createCode()
        }
    }

    createCode() {
        let code = ""
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (var i = 0; i < 4; i++) {
            var charNum = Math.floor(Math.random() * 36)
            code += codeChars[charNum]
        }
       return code
    }
    handlerClick(){
        this.setState({
            code:this.createCode()
        })
    }

    render() {

        return (
            <form className="phone">
                <div className="phone_num  text-center">
                    <input className="form-control form-control1" type="text"
                           name="cell_phone_id" maxLength="11" placeholder="请输入手机号码"/>
                </div>
                <div className="phone_num">
                    <div className="verification">
                        <input type="text"
                               className="form-control form-control1" maxLength="4"
                               placeholder="请输入右侧图形验证码"/>
                    </div>
                    <div className="code" ref="code" onClick={this.handlerClick.bind(this)}>{this.state.code}</div>
                </div>
                <div className="phone_num">
                    <div className="verification">
                        <input type="text" autoComplete="off"
                               className="form-control form-control1" maxLength="4"
                               placeholder="请输入验证码"/>
                    </div>
                    <div className="id_code_pos">
                        <input className="id_code" type="button" value="获得验证码"/>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="login_pos text-center">
                    <input className="phone-logo" type="submit" value="登  录"/>
                </div>
                <hr/>
            </form>
        )
    }
}