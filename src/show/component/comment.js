/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react'

export default class Comment extends React.Component {
    render() {
        return (
            <div className="helper">
                <img className="img-circle"
                     src={this.props.comment.user_head}
                     alt={this.props.comment.user_name}/>
                <div className="bigger">{this.props.comment.user_name}</div>
                支持了 <span>{this.props.comment.amount}</span> 元
                <div className="time">{this.props.comment.time}</div>
                <div className="speak">
                    {this.props.comment.deacribe}
                </div>
                <hr/>
            </div>
        )
    }
}