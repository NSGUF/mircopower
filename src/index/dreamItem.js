/**
 * Created by ZhifengFang on 2017/4/12.
 */
import React from 'react';

export default class DreamItem extends React.Component{
    render(){
        let id=0;
        return (
            <div className="col-md-2 dream-grid" key={id++}>
                <h3>{this.props.itemNumber}</h3>
                <h4>{this.props.itemName}</h4>
            </div>
        );
    }
}