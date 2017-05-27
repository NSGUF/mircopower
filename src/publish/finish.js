/**
 * Created by Administrator on 2017/5/27.
 */
import React from 'react'

export default class Finish extends React.Component{

    render(){
        return(
            <div className="foot-banner">
                <div className="container">
                    <div className="finish">
                        <img className="img-circle img-responsive" src="images/publish/finish.png" alt="发布完成"/>
                            <h2>项目发布成功！</h2>
                            <h4 className="text-center">太棒了，快点分享给好友为你支持和传播吧~~~</h4>
                    </div>
                    <div className="Login_other finish_other">
                        <ul>
                            <li><a href="" target="_self">查看项目</a></li>
                            <li><a href="">项目验证</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}