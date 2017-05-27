/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import Http from '../http'
import {Link} from 'react-router-dom'

export default class IsLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            userHeadUrl: ''
        }
    }

    componentDidMount() {
        Http.post(this.props.source, {name: "name"}, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            flag: result.flag,
            userHeadUrl: result.userHeadUrl
        })
    }

    error() {
        alert("errror");
    }

    handleClick() {
        this.setState({dp: !this.state.dp});
    }

    getStyles() {
        let styleObj;
        if (this.state.dp === true) {
            styleObj = {display: 'block'};
        } else {
            styleObj = {display: 'none'};
        }
        return styleObj;
    }

    render() {
        let result = [];
        let id=0;
        if (this.state.flag === true) {
            result.push(
                <img className="img-circle" src={this.state.userHeadUrl} onClick={this.handleClick.bind(this)}
                     alt="" key={id++} ref="head"/>
            );
            result.push(
                <ul id="nav-little" style={this.getStyles()} key={id++}>
                    <li><a href="myProjects">我的项目</a></li>
                    <li><a href="myWallet">我的钱包</a></li>
                    <li><a href="setting">个人设置</a></li>
                    <li><a href="phone">退出</a></li>
                </ul>);
        } else {
            result.push(<Link to="/phone" key={id++}>登录</Link>);
        }
        return (
            <li key={id++}>
                {result}
            </li>
        );
    }
}
