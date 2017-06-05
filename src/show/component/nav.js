/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react';
import LiItem from '../../foot/liItem'
export default class Mine extends React.Component {
    render() {
        let id = 0;
        return (
            <div key={id++}>
                <div className="container">
                    <div className="clearfix"></div>
                    <div className="top-nav">
                        <div className="menu">
                            <ul id="nav">
                                {this.props.mines.map((mine) => (
                                    <LiItem infoLink={mine.infoLink} infoName={mine.infoName} select={mine.select} key={id++}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}