/**
 * Created by ZhifengFang on 2017/6/8.
 */
import React from 'react'
import Http from '../../http'
import {Link, Redirect} from 'react-router-dom'

export default class Help extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.project.id,
            flag: "help",
            redirectToReferrer: false
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        Http.post(Http.URL+"/MicroPower/DeleteServlet", this.state, this.callBack.bind(this), this.error)
    }

    callBack(result) {
        if (result.flag) {
            alert("删除成功")
            this.setState({
                redirectToReferrer: true
            })
        }
    }

    error() {
        alert("my projects error")
    }

    render() {
        let link = "/help/detail/" + this.props.project.id
        if (this.state.redirectToReferrer) {
            return (<Redirect to="/my/projects/"/> )
        }
        return (
            <div className="detail">
                <img className="user-info"
                     src={this.props.project.image}
                     alt={this.props.project.title}/>
                <div className="user-info">
                    <div className="bigger">{this.props.project.title}</div>
                    <div className="time">{this.props.project.open_date}</div>
                    <div className="time">
                        目标金额：{this.props.project.target_amount}&nbsp;
                        已筹金额：{this.props.project.raise_amount}&nbsp;
                        支持次数：{this.props.project.support_time}&nbsp;
                    </div>
                </div>
                <form className="user-info" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="btn btn-primary btn-lg large btn-delete" type="submit" value="删除"/>
                    <Link className="btn btn-primary btn-lg large btn-delete"
                          to={link}>查看项目</Link>
                </form>
            </div>)
    }

}