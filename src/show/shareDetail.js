/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react'
//import Comment from './component/comment'
import Http from '../http'

export default class ShareDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            user_head: "",
            user_name: "",
            open_date: "",
            describe: "",
            image: "",
            content: []
        }
    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/DetailServlet", {
            flag: "share",
            id: this.props.match.params.id
        }, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            title: result.title,
            user_head: result.user_head,
            user_name: result.user_name,
            open_date: result.open_date,
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
