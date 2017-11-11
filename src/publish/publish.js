/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import Http from '../http'

export default class Publish extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            is_volunteer: false
        }

    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/IsLoginServlet", {}, this.callBackLogin.bind(this), this.error);

    }

    callBackLogin(result) {
        if (result.flag === false) {
            alert("请先登录！")
            this.props.history.push("/phone")
        } else {
            Http.post(Http.URL+"/MicroPower/IsVolunteerServlet", {}, this.callBackFun.bind(this), this.error);
        }
    }

    callBackFun(result) {
        this.setState({
            is_volunteer: result.flag === 3 ? true : false
        })
    }

    handleClick() {
        if (this.state.is_volunteer === true) {
            this.props.history.push("/child")
        } else {
            alert("请先审核！")
            this.props.history.push("/my/volunteer")
        }
    }
    handleShareClick() {
        if (this.state.is_volunteer === true) {
            this.props.history.push("/share")
        } else {
            alert("请先审核！")
            this.props.history.push("/my/volunteer")
        }
    }
    getStyles() {
        return {cursor:'pointer'};
    }

    render() {
        return (
            <div className="publish-banner">
                <div className="container">
                    <div className="banner-info">
                        <h2>发起项目</h2>
                        <p>申请微爱通道的筹款项目，选择其他模板将强制下线处理。</p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/help.png" alt="一对一助力儿童" width="80px"/><br />
                        <p>
                            <span style={this.getStyles()}  onClick={this.handleClick.bind(this)}>助力儿童</span>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/donation.png" alt="我要捐赠" width="80px"/><br />
                        <p>
                            <Link to="/donation">我要捐赠</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/need.png" alt="求助捐赠" width="80px"/><br />
                        <p>
                            <Link to="/need">求助捐赠</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/share.png" alt="分享见证" width="80px"/><br />
                        <p>
                            <span style={this.getStyles()} onClick={this.handleShareClick.bind(this)}>分享见证</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}