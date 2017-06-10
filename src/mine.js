/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import LiItem from './foot/liItem'
import IsLogin from './index/isLogin';
import {Link} from 'react-router-dom'

export default class Mine extends React.Component {
    render() {
        let mines = [
            {
                infoLink: '/show/better',
                infoName: '浏览项目'
            }, {
                infoLink: '/publish',
                infoName: '发起项目'
            }, {
                infoLink: '/app',
                infoName: 'APP下载'
            }, {
                infoLink: '/foot/help',
                infoName: '帮助中心'
            },
        ]
        let id = 0;
        return (
            <div key={id++}>
                <div className="header-top">
                    <div className="container">
                        <div className="top-nav">
                            <div className="logo">
                                <Link to="/">
                                    <img src="images/logo.png" className="img-responsive" alt="主页"/></Link>
                            </div>
                            <ul id="nav">
                                {mines.map((mine)=>(
                                    <LiItem infoLink={mine.infoLink} infoName={mine.infoName} key={id++}/>
                                ))}
                                <IsLogin source={this.props.source}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}