/**
 * Created by ZhifengFang on 2017/5/21.
 */

import React from 'react'
export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    handleChange(e) {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="form-group form-group-lg">
                <div className="col-md-9">
                    <textarea cols="85" rows="10" name="donation_describe" placeholder={this.props.placeHolder}
                              {...this.props} value={this.state.value} onChange={this.handleChange}></textarea>
                    <div className="form-item help-block">
                        项目内容和项目图片禁止透露任何 <strong className="text-danger">联系方式</strong>和<strong
                        className="text-danger">银行卡</strong> 等收款款息,包括但不限于手机号码、座机号码、<br />
                        微信号、支付宝账号、银行卡号等。违反以上规定，项目验证和提现申请均不予通过。
                    </div>
                </div>
            </div>
        )
    }
}