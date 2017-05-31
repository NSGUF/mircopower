/**
 * Created by ZhifengFang on 2017/5/21.
 */
import OptionItem from './optionItem'
import React from 'react'
export default class Select extends React.Component {
    render() {
        let id = 0
        return (
            <div className="form-group form-group-lg">
                <label htmlFor={this.props.items.labelName}
                       className="col-md-1 control-label">{this.props.items.labelName}</label>
                <div className="col-md-9 wjz-slider-row">
                    <div className="clearfix"></div>
                    <div className="wjz-slider clearfix">
                        {this.props.items.before}<strong id="liderVal">
                        <select id="dayslider" name="divid_num" onChange={this.props.onChange}>
                            {this.props.options.map(option => (
                                <OptionItem optionName={option} key={id++}/>
                            ))}
                        </select></strong>{this.props.items.after}
                    </div>
                </div>
            </div>
        )
    }
}


