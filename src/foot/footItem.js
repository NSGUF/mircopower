/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import FootUlItem from './footUlItem';

export default class FootItem extends React.Component {
    render() {
        let id;
        return (
            <div className="col-md-3 ftr-grd">
                <h3>{this.props.infoHead}</h3>
                <FootUlItem items={this.props.infoDetail} key={id++}/>
            </div>
        );
    }
}