/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react';
import LiItem from '../../foot/liItem'

export default class Nav extends React.Component {
    render() {
        let id = 0;

        let mines = [
            {
                infoLink: '/my/setting',
                infoName: '个人资料'
            }, {
                infoLink: '/my/receive',
                infoName: '收件地址'
            }, {
                infoLink: '/my/card',
                infoName: '银行卡'
            }
        ]
        return (
            <div className="top-nav" key={id++}>
                <div className="menu">
                    <ul id="nav">
                        {mines.map((mine) => (
                            <LiItem infoLink={mine.infoLink} infoName={mine.infoName} key={id++}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}