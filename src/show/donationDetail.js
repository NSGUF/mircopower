/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react'
//import Comment from './component/comment'
import Http from '../http'

export default class DonationDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            user_head: "",
            user_name: "",
            open_date: "",
            trans_cost: "",
            raise_goods: "",
            select_need_or_dona: "",
            describe: "",
            image: "",
            content: []
        }
    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/DetailServlet", {
            flag: "donation",
            id: this.props.match.params.id
        }, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            title: result.title,
            user_head: result.user_head,
            user_name: result.user_name,
            open_date: result.open_date,
            trans_cost: result.trans_cost,
            raise_goods: result.raise_goods,
            select_need_or_dona: result.select_need_or_dona,
            describe: result.describe,
            image: result.image
        })
        console.log(this.state);
    }

    render() {
        let id = 0
        return (
            <div className="foot-banner">
                <div className="container">
                    <div className="box"></div>
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
                                    <strong>{this.state.raise_goods}</strong>
                                    <p>物品分类</p>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>{this.state.trans_cost}
                                        <small>元</small>
                                    </strong>
                                    <p>回报金额</p>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>0
                                        <small>次</small>
                                    </strong>
                                    <p>评论次数</p>
                                    <hr/>
                                </div>
                                <div className="item-info col-md-6">
                                    <strong>&nbsp;
                                        <small></small>
                                    </strong>
                                    <p>&nbsp;</p>
                                    <hr/>
                                </div>
                                {/*<div className="item1">
                                    <img src="images/erweima.png" alt="支持"
                                         width="130" height="130"/>
                                    <div className="itemsun">
                                        <h3>
                                            扫描左侧二维码<br/>帮助TA
                                        </h3>
                                    </div>
                                </div>*/}
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
                                    <p>评论动态</p>
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
