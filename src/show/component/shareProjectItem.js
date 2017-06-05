/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react'

export default class ProjectItem extends React.Component {

    render() {
        return (
            <div className="col-1-3">
                <div className="wrap-col">
                    <div className="post">
                        <a href="" className="mask">
                            <img src={this.props.project.image.split(" ")[0]} alt={this.props.project.title}/>
                            <div className="upload">
                                <div className="mypeople">
                                    <img classNameName="img-circle" src={this.props.project.user_head} alt="用户名"/>
                                    <p>
                                        {this.props.project.user_name}<span>{this.props.project.open_date}</span>
                                    </p>
                                </div>
                                <h4>{this.props.project.title}</h4>
                                <p>
                                    已有<strong>0</strong>人评价
                                </p>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}