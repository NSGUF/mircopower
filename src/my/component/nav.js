/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react';
import LiItem from '../../foot/liItem'

export default class Nav extends React.Component {
    render() {
        let id = 0;

        let mines = [
            {
                infoLink: '/show/better',
                infoName: '精选项目'
            }, {
                infoLink: '/show/help',
                infoName: '助力儿童'
            }, {
                infoLink: '/show/donation',
                infoName: '微捐赠'
            }, {
                infoLink: '/show/share',
                infoName: '分享见证'
            },
        ]
        return (
            <div key={id++}>
                <div className="container">
                    <div className="clearfix"></div>
                    <div className="top-nav">
                        <div className="menu">
                            <ul id="nav">
                                {mines.map((mine) => (
                                    <LiItem infoLink={mine.infoLink} infoName={mine.infoName} key={id++}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}