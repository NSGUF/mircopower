/**
 * Created by ZhifengFang on 2017/4/12.
 */
import React from 'react';

export default class AboutItem extends React.Component {
    render() {
        let id=0
        return (
            <div className="ab-sub-gd" key={id++}>
				<span className="glyphicon glyphicon-star-empty ab-gd-img" aria-hidden="true"></span>
                <div className="ab-gd-text">
                    <h6>{this.props.aboutTitle}</h6>
                    <p>{this.props.aboutDetail}</p>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}