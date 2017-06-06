/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react'
//import Comment from './component/comment'
import Http from '../http'

export default class HelpDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            user_head: "",
            user_name: "",
            open_date: "",
            target_amount: "",
            raise_amount: "",
            support_time: "",
            describe: "",
            image: "",
            content: []
        }
    }

    componentDidMount() {
        Http.post("http://localhost:8080/MicroPower/DetailServlet", {
            flag: "help",
            id: this.props.match.params.id
        }, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            title: result.title,
            user_head: result.user_head,
            user_name: result.user_name,
            open_date: result.open_date,
            target_amount: result.target_amount,
            raise_amount: result.raise_amount,
            support_time: result.support_time,
            describe: result.describe,
            image: result.image
        })
        console.log(this.statef);
    }

    render() {
        let id = 0
        return (
            <div className="foot-banner">
                <div className="container">
                    <div className="clearfix"></div>
                    <div className="box1">
                        <h2>{this.state.title}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mydetails">
                                <img className="img-circle"
                                     src={this.state.user_head}
                                     alt={this.state.user_name}/>
                                {this.state.user_name}
                                <span>{this.state.open_date}</span>
                                <hr/>
                                <div className="item-info col-md-6">
                                    <strong>{this.state.target_amount}
                                        <small>元</small>
                                    </strong>
                                    <p>目标金额</p>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>{this.state.raise_amount}
                                        <small>元</small>
                                    </strong>
                                    <p>已筹金额</p>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>{this.state.support_time}
                                        <small>人</small>
                                    </strong>
                                    <p>支持人数</p>
                                    <hr/>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>&nbsp;
                                        <small></small>
                                    </strong>
                                    <p>&nbsp;</p>
                                    <hr/>
                                </div>
                                <div className="item1">
                                    <img src="images/erweima.png" alt="支持"
                                         width="130" height="130"/>
                                    <div className="itemsun">
                                        <h3>
                                            扫描左侧二维码 <br/>
                                            <a href="" className="text-success">帮助TA</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="myskills">
                                <div className="content-text">
                                    &nbsp;&nbsp;
                                    {this.state.describe}</div>
                                {this.state.image.split(" ").map(img => (
                                    <img src={img} alt={this.state.title} key={id++}/>
                                ))}
                                <hr/>
                                <div className="itemskills">
                                    <p>筹款动态</p>
                                    <hr/>
                                    <p className="text-center">没有了更多了~~~</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
